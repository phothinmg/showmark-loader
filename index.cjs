/** @import {JSXCompilerOptions} from "showmark/jsx" */
/** @import {ShowMarkOptions} from "showmark"*/

/** @typedef {{compilerOptions?: JSXCompilerOptions;converterOptions?: ShowMarkOptions}} Options */

/**@typedef {import('webpack').LoaderContext<Options>} LoaderContext */

/**
 * @this {LoaderContext}
 * @param {string} source
 */
module.exports = function (source) {
  const callback = this.async();
  import("./lib/index.js").then((module) =>
    module.loader.call(this, source, callback)
  );
};
