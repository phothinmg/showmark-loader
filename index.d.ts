/// <reference types="showmark" />
export type Options = {
  compilerOptions?: import("showmark/jsx").JSXCompilerOptions;
  converterOptions?: import("showmark/converter").ShowMarkOptions;
};

export type LoaderContext = import("webpack").LoaderContext<Options>;

declare function showmarkLoader(this: LoaderContext, value: string): void;
export default showmarkLoader;
