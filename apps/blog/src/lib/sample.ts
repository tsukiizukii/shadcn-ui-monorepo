import { toText } from "hast-util-to-text";
import type { ShikiTransformer } from "shiki";

export const transformerCopyRaw: ShikiTransformer = {
  name: "copy-raw",
  enforce: "post",
  pre(node) {
    node.properties["data-copy"] = toText(this.code, { whitespace: "pre" });
  },
};
