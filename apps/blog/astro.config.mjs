// @ts-check

import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import vercel from "@astrojs/vercel";
import { pluginCollapsibleSections } from "@expressive-code/plugin-collapsible-sections";
import { pluginLineNumbers } from "@expressive-code/plugin-line-numbers";
import tailwindcss from "@tailwindcss/vite";
import expressiveCode from "astro-expressive-code";
import { defineConfig } from "astro/config";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeSemanticBlockquotes from "rehype-semantic-blockquotes";
import rehypeSlug from "rehype-slug";
import remarkBreaks from "remark-breaks";
import { remarkAlert } from "remark-github-blockquote-alert";
import remarkHeadingId from "remark-heading-id";

const rehypeAutolinkHeadingsOptions = {
  behavior: "append",
  properties: {
    className: ["subheading-anchor"],
    ariaLabel: "Link to section",
  },
};

// const rehypePrettyCodeOptions = {
//   theme: "github-dark-default",
//   keepBackground: false,
//   tokensMap: {
//     fn: "entity.name.function",
//   },
//   transformers: [
//     transformerNotationDiff(),
//     transformerNotationFocus(),
//     transformerNotationErrorLevel(),
//     transformerCopyRaw,
//   ],
// };

// https://astro.build/config
export default defineConfig({
  site: "https://blog.tsukiizukii.com",
  integrations: [
    expressiveCode({
      cascadeLayer: "utilities",
      themes: ["github-light-default", "github-dark-default"],
      themeCssSelector: (theme) => {
        if (theme.type === "dark") {
          return ".dark";
        }
        return false;
      },
      useDarkModeMediaQuery: false,
      plugins: [pluginCollapsibleSections(), pluginLineNumbers()],
      defaultProps: {
        showLineNumbers: false,
      },
      shiki: {
        injectLangsIntoNestedCodeBlocks: true,
      },
      styleOverrides: {
        borderRadius: "none",
        codeFontFamily: "var(--font-mono)",
        codeFontWeight: "425",
        uiFontFamily: "var(--font-sans)",
        uiFontSize: "var(--text-sm)",
        frames: {
          editorActiveTabBackground: ({ theme }) =>
            theme.colors["editorGroupHeader.tabsBackground"],
          editorActiveTabIndicatorBottomColor: "taransparent",
          editorActiveTabIndicatorTopColor: "taransparent",
          editorTabBarBorderBottomColor: "taransparent",
          editorTabBarBorderColor: "taransparent",
          frameBoxShadowCssValue: "none",
          terminalTitlebarBorderBottomColor: "taransparent",
        },
      },
    }),
    mdx(),
    sitemap(),
    react(),
  ],

  vite: {
    plugins: [tailwindcss()],
  },

  markdown: {
    // syntaxHighlight: false,
    remarkPlugins: [remarkHeadingId, remarkBreaks, remarkAlert],
    rehypePlugins: [
      rehypeSlug,
      [rehypeAutolinkHeadings, rehypeAutolinkHeadingsOptions],
      rehypeSemanticBlockquotes,
      // [rehypePrettyCode, rehypePrettyCodeOptions],
    ],
  },

  adapter: vercel(),
});
