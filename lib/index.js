/** @import {JSXCompilerOptions} from "showmark/jsx" */
/** @import {ShowMarkOptions} from "showmark*/

/** @typedef {{compilerOptions?: JSXCompilerOptions;converterOptions?: ShowMarkOptions}} Options */

/**@typedef {import('webpack').LoaderContext<Options>} LoaderContext */

import jsxCompiler from "showmark/jsx";

/**
 * @this {LoaderContext}
 * @param {string} source
 * @param {(error?: null | Error, content?: string | Buffer, sourceMap?: Object | null | undefined) => void} callback
 */
export function loader(source, callback) {
  const { compilerOptions, converterOptions } = this.getOptions();
  const result = jsxCompiler(source, compilerOptions, converterOptions);
  callback(null, result.code, result.map);
}
