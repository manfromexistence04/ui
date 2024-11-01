import { imports } from '@sveltejs/cli-core/js';
import type { ScriptFileEditor } from '@sveltejs/cli-core';

export function run({ ast }: ScriptFileEditor<any>): void {
	imports.addNamed(ast, 'package', { namedOne: 'namedOne' }, false);

	imports.addNamed(ast, '@sveltejs/kit', { Handle: 'Handle' }, false);
	// adding the same import twice should not produce two imports
	imports.addNamed(ast, '@sveltejs/kit', { Handle: 'Handle' }, false);
}
