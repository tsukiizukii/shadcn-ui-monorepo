// @ts-check
import path from "path";
import { fileURLToPath } from "url";
const __dirname = path.dirname(fileURLToPath(import.meta.url));

/** @type {import("prettier").Config} */
export default {
  plugins: ["prettier-plugin-tailwindcss", "prettier-plugin-astro"],
  // Tailwind CSS v4
  tailwindStylesheet: path.join(
    __dirname,
    "./packages/ui/src/styles/globals.css",
  ),
  tailwindFunctions: ["clsx", "twMerge", "cn", "cva", "cx"],

  overrides: [
    {
      files: "*.astro",
      options: {
        parser: "astro",
      },
    },
  ],
};
