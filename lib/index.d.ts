//
export type Options = {
  compilerOptions?: import("showmark/jsx").JSXCompilerOptions;
  converterOptions?: import("showmark").ShowMarkOptions;
};

export type LoaderContext = import("webpack").LoaderContext<Options>;
type CallBackParams = {
  error?: null | Error;
  content?: string | Buffer;
  sourceMap?: Object | null | undefined;
};
type CallBack = ({ error, content, sourceMap }: CallBackParams) => void;

export function loader(value: string, callback: CallBack): void;
