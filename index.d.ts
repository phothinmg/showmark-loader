export type Options = {
  compilerOptions?: import("showmark/jsx").JSXCompilerOptions;
  converterOptions?: import("showmark").ShowMarkOptions;
};

export type LoaderContext = import("webpack").LoaderContext<Options>;

declare function showdownLoader(this: LoaderContext, value: string): void;
export default showdownLoader;
