import { config as baseConfig } from "./packages/eslint-config/base.js";

export default [
  ...baseConfig,
  {
    files: ["*.{js,ts}"],
    ignores: ["apps/**", "packages/**"],
  },
];
