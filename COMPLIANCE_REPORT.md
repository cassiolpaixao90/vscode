# Compliance Report - BillAI (Code OSS Fork)

Status: PASS COM RESSALVAS

## Summary

- Branding replaced to BillAI across runtime strings and docs.
- Visual Studio Marketplace endpoints removed and Open VSX configured.
- Telemetry disabled by default.
- Official icon assets moved to `do-not-ship/` and replaced with BillAI placeholders.
- LICENSE and ThirdParty notices preserved.
- Build tooling updated to run TypeScript gulpfiles under Node 22.

## Files Changed (high level)

- Branding/product identity: `product.json`, `src/main.ts`, `README.md`, `CONTRIBUTING.md`, `SECURITY.md`.
- Marketplace config: `product.json`, `build/vite/workbench-vite.html`.
- Build tooling: `package.json`, `build/ts-loader.mjs`, `scripts/run-billai.sh`.
- Icon assets: `resources/win32/code.ico`, `resources/win32/code_70x70.png`, `resources/win32/code_150x150.png`, `resources/linux/code.png`, `resources/server/code-512.png`, `resources/darwin/code.icns`, `resources/linux/rpm/code.xpm`, originals moved to `do-not-ship/original-icons/`.
- Packaging metadata: `resources/win32/appx/AppxManifest.xml`, `build/win32/code.iss`, `build/win32/code-insider.iss`.
- Reports: `BRANDING_INVENTORY.md`, `MARKETPLACE_REMOVAL.md`, `PRIVACY_TELEMETRY.md`, `COMPLIANCE_REPORT.md`.
- Broad string updates across docs/tests/schemas to remove "Visual Studio Code"/"VS Code" and marketplace URLs.

## Commands Executed

- Inventory:
  - `rg -n "Visual Studio Code|VS Code|Microsoft|marketplace\.visualstudio\.com|vssps|extensionsGallery|telemetry|appInsights" .`
  - `rg -n "marketplace\.visualstudio\.com|vssps|extensionsGallery" .`
- Install:
  - `npm install`
- Runtime:
  - `n 22.21.1` (with `N_PREFIX=$HOME/.n`)
  - `npm run compile`
  - `./scripts/run-billai.sh`

## Build/Test Results

- `npm install` succeeded with Node v22.21.1 (installed via `n` with local `N_PREFIX`).
- `npm run compile` succeeded (Node v22.21.1 with TS loader).

Compile completed without TypeScript errors.

## Blockers

None.

## Ressalvas

- `npm audit` reports vulnerabilities; review before distribution.

## Packaging & Distribution Notes

- Use Node.js >=22.21.1.
- Optional: run tests/lint as required by the project.

## License/Notices

- `LICENSE.txt` and `ThirdPartyNotices.txt` were preserved without modification.

## Notes

- `BRANDING_INVENTORY.md` and `MARKETPLACE_REMOVAL.md` retain legacy strings in the "Antes" sections as required by the audit instructions.
