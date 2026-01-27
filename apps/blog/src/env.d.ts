/// <reference types="astro/client" />

declare module "remark-heading-id" {
  import type { Root } from "mdast";
  import type { Plugin } from "unified";
  const remarkHeadingId: Plugin<[], Root>;
  export default remarkHeadingId;
}

declare module "@workspace/eslint-config/astro" {
  import type { Linter } from "eslint";
  export const astroConfig: Linter.Config[];
}
