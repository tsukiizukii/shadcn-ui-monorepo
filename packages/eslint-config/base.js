import js from "@eslint/js";

import pluginJsxA11y from "eslint-plugin-jsx-a11y";
import "eslint-plugin-only-warn";
import pluginTurbo from "eslint-plugin-turbo";
import tseslint from "typescript-eslint";

/**
 * A shared ESLint configuration for the repository.
 *
 * @type {import("eslint").Linter.Config}
 * */
export const config = [
  js.configs.recommended,
  ...tseslint.configs.recommended,
  pluginJsxA11y.flatConfigs.recommended,
  {
    plugins: {
      turbo: pluginTurbo,
    },
    rules: {
      "turbo/no-undeclared-env-vars": "warn",
    },
  },
  {
    ignores: ["dist/**"],
  },
];
