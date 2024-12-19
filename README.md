# Showmark Webpack

## About

Webpack Loader for [Showdown.js](https://github.com/showdownjs/showdown) Markdown as MDX Component with [@types/mdx](https://www.npmjs.com/package/@types/mdx).

## Install

This package is ESM only

```bash
npm i showmark-webpack
```

```bash
pnpm i showmark-webpack
```

```bash
yarn add showmark-webpack
```

## Use

Add something along these lines to your `webpack.config.js`.

```js
/** @type {import('webpack').Configuration} */
const webpackConfig = {
  // others config
  module: {
    rules: [
      // :::
      {
        test: /\.(md|markdown)$/i,
        use: [
          {
            loader: "showmark-webpack",
            /** @type {import("showmark-webpack").Options}*/
            options: {
              // showdown js options
              converterOptions: {
                customClassJsx: true,
              },
              // markdown to jsx compiler options
              compilerOptions: {
                // default as "prose dark:prose-invert" for Tailwind Css "@tailwindcss/typography".
                className: "prose dark:prose-invert",
                // default "react" Or "preact"
                jsxSource: "react",
              },
            },
          },
        ],
      },
    ],
  },
};
```

`example.md` Or `example.markdown`

```md
# Hello World
```

`App.tsx`

```tsx
import React from "react";
import { MarkdownProvider } from "showmark/react";
import Hello from "./example.md";

const App = () => {
  return (
    <MarkdownProvider>
      <Hello />
    </MarkdownProvider>
  );
};
```

***This project is for learning purposes only. It is not suitable for production use.***
