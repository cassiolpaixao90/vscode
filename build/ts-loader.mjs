import { readFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import ts from 'typescript';

const tsExtensions = new Set(['.ts', '.mts', '.cts']);

export async function resolve(specifier, context, defaultResolve) {
	return defaultResolve(specifier, context, defaultResolve);
}

export async function load(url, context, defaultLoad) {
	if (url.startsWith('file:') && [...tsExtensions].some(ext => url.endsWith(ext))) {
		const filename = fileURLToPath(url);
		const source = await readFile(filename, 'utf8');
		const output = ts.transpileModule(source, {
			fileName: filename,
			compilerOptions: {
				module: ts.ModuleKind.ESNext,
				moduleResolution: ts.ModuleResolutionKind.NodeNext,
				target: ts.ScriptTarget.ES2022
			}
		});

		return { format: 'module', source: output.outputText, shortCircuit: true };
	}

	return defaultLoad(url, context, defaultLoad);
}
