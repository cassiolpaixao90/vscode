/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { h } from '../../../../base/browser/dom.js';
import { ActionsOrientation } from '../../../../base/browser/ui/actionbar/actionbar.js';
import { Action } from '../../../../base/common/actions.js';
import { Codicon } from '../../../../base/common/codicons.js';
import { Disposable } from '../../../../base/common/lifecycle.js';
import { ThemeIcon } from '../../../../base/common/themables.js';
import { localize } from '../../../../nls.js';
import { createActionViewItem, getFlatActionBarActions } from '../../../../platform/actions/browser/menuEntryActionViewItem.js';
import { DropdownMenuActionViewItemWithKeybinding } from '../../../../platform/actions/browser/dropdownActionViewItemWithKeybinding.js';
import { WorkbenchToolBar } from '../../../../platform/actions/browser/toolbar.js';
import { IMenuService, MenuId } from '../../../../platform/actions/common/actions.js';
import { ICommandService } from '../../../../platform/commands/common/commands.js';
import { IContextMenuService } from '../../../../platform/contextview/browser/contextView.js';
import { IContextKeyService } from '../../../../platform/contextkey/common/contextkey.js';
import { IInstantiationService } from '../../../../platform/instantiation/common/instantiation.js';
import { IKeybindingService } from '../../../../platform/keybinding/common/keybinding.js';
import { CommandCenterControlRegistry, ICommandCenterControl } from '../../../browser/parts/titlebar/commandCenterControlRegistry.js';
import { DEBUG_RUN_COMMAND_ID, DEBUG_START_COMMAND_ID } from './debugCommands.js';
import { StartDebugActionViewItem } from './debugActionViewItems.js';

const INTELLIJ_DEBUG_ACTION_ID = 'workbench.action.intellijDebugStart';
const INTELLIJ_MORE_ACTION_ID = 'workbench.action.intellijRunMore';
const INTELLIJ_COMMAND_CENTER_CONTEXT_KEY = 'config.workbench.titleBar.intellijToolbar';

class IntellijTitlebarControl extends Disposable implements ICommandCenterControl {
	readonly element: HTMLElement;

	private readonly toolbar: WorkbenchToolBar;

	constructor(
		@IInstantiationService private readonly instantiationService: IInstantiationService,
		@ICommandService private readonly commandService: ICommandService,
		@IMenuService menuService: IMenuService,
		@IContextKeyService contextKeyService: IContextKeyService,
		@IContextMenuService contextMenuService: IContextMenuService,
		@IKeybindingService keybindingService: IKeybindingService,
	) {
		super();

		const elements = h('div.intellij-command-center', [
			h('div.intellij-command-center-toolbar@toolbar')
		]);
		this.element = elements.root;
		this.element.setAttribute('role', 'group');
		this.element.setAttribute('aria-label', localize('intellijRunControls', "Run Controls"));

		const startDebugAction = this._register(new Action(
			DEBUG_START_COMMAND_ID,
			localize('startDebugging', "Start Debugging"),
			undefined,
			true,
			() => this.commandService.executeCommand(DEBUG_START_COMMAND_ID)
		));

		const runAction = this._register(new Action(
			DEBUG_RUN_COMMAND_ID,
			localize('runWithoutDebugging', "Run Without Debugging"),
			ThemeIcon.asClassName(Codicon.play),
			true,
			() => this.commandService.executeCommand(DEBUG_RUN_COMMAND_ID)
		));

		const debugAction = this._register(new Action(
			INTELLIJ_DEBUG_ACTION_ID,
			localize('debugStart', "Start Debugging"),
			ThemeIcon.asClassName(Codicon.bug),
			true,
			() => this.commandService.executeCommand(DEBUG_START_COMMAND_ID)
		));

		const moreAction = this._register(new Action(
			INTELLIJ_MORE_ACTION_ID,
			localize('moreActions', "More Actions"),
			ThemeIcon.asClassName(Codicon.kebabVertical),
			true
		));

		const updateTooltip = (action: Action, commandId: string): void => {
			const keybinding = keybindingService.lookupKeybinding(commandId);
			const label = action.label;
			action.tooltip = keybinding ? `${label} (${keybinding.getLabel()})` : label;
		};

		updateTooltip(startDebugAction, DEBUG_START_COMMAND_ID);
		updateTooltip(runAction, DEBUG_RUN_COMMAND_ID);
		updateTooltip(debugAction, DEBUG_START_COMMAND_ID);

		const moreMenu = this._register(menuService.createMenu(MenuId.DebugToolBar, contextKeyService));

		this.toolbar = this._register(this.instantiationService.createInstance(WorkbenchToolBar, elements.toolbar, {
			orientation: ActionsOrientation.HORIZONTAL,
			ariaLabel: localize('intellijRunControlsToolbar', "Run Controls Toolbar"),
			telemetrySource: 'intellijTitlebar',
			actionViewItemProvider: (action, options) => {
				if (action.id === DEBUG_START_COMMAND_ID) {
					return this.instantiationService.createInstance(StartDebugActionViewItem, undefined, action, options);
				}

				if (action.id === INTELLIJ_MORE_ACTION_ID) {
					return this.instantiationService.createInstance(DropdownMenuActionViewItemWithKeybinding, action, {
						getActions: () => getFlatActionBarActions(moreMenu.getActions({ shouldForwardArgs: true }))
					}, contextMenuService, {
						...options,
						classNames: ThemeIcon.asClassNameArray(Codicon.kebabVertical)
					});
				}

				return createActionViewItem(this.instantiationService, action, options);
			}
		}));

		this.toolbar.setActions([startDebugAction, runAction, debugAction, moreAction]);
	}
}

CommandCenterControlRegistry.register({
	contextKey: INTELLIJ_COMMAND_CENTER_CONTEXT_KEY,
	priority: 100,
	create: instantiationService => instantiationService.createInstance(IntellijTitlebarControl),
});
