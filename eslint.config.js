import { config as baseConfig } from "./packages/eslint-config/base.js";

export default [
  ...baseConfig,
  {
    files: ["*.{js,cjs,mjs,ts}"],
    ignores: ["apps/**", "packages/**"],
  },
];
