export type SocialLinks = {
  name: string;
  url: string;
};

export type SiteConfig = {
  siteName: string;
  titleTemplate?: string;
  description: string;
  siteUrl: string;
  defaultImage?: string;
  locale?: string;
  twitterHandle?: string;
  social?: SocialLinks[];
};

export const siteConfig: SiteConfig = {
  siteName: "My Site",
  titleTemplate: "%s | My Site",
  description: "サイトの説明をここに書く。",
  siteUrl: "https://example.com",
  defaultImage: "/og-image.png",
  locale: "ja-JP",
  twitterHandle: "@yourhandle",
  social: [{ name: "twitter", url: "https://twitter.com/yourhandle" }],
};

// Next.js と Astro 用ヘルパーを再エクスポート
export { renderAstroHead } from "@/src/astro.js";
export { getNextMetadata } from "@/src/next";
