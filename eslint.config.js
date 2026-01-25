// // This configuration only applies to the package manager root.
// /** @type {import("eslint").Linter.Config} */
// module.exports = {
//   ignorePatterns: ["apps/**", "packages/**"],
//   extends: ["@workspace/eslint-config/library.js"],
//   parser: "@typescript-eslint/parser",
//   parserOptions: {
//     project: true,
//   },
// };

// eslint.config.js
import path from "node:path";
import { fileURLToPath } from "node:url";
import tseslint from "typescript-eslint";

// workspace の共有 config（flat 化されている前提）
// import workspaceLibrary from "@workspace/eslint-config/library.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default [
  // === ルートのみ適用 ===
  {
    files: ["*.{js,ts}"],
    ignores: ["apps/**", "packages/**"],

    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        project: true,
        tsconfigRootDir: __dirname,
      },
    },

    // ...workspaceLibrary,
  },
];
