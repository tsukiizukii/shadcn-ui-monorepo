import type { SiteConfig } from "@/src/index";

function esc(s?: string) {
  return (s ?? "").replace(/&/g, "&amp;").replace(/"/g, "&quot;");
}

export function renderAstroHead(cfg: SiteConfig) {
  const title = esc(cfg.siteName);
  const desc = esc(cfg.description);
  const url = esc(cfg.siteUrl);
  const img = esc(cfg.defaultImage);
  const locale = esc(cfg.locale);

  return `
<meta name="description" content="${desc}" />
<meta property="og:title" content="${title}" />
<meta property="og:description" content="${desc}" />
<meta property="og:url" content="${url}" />
${img ? `<meta property="og:image" content="${img}" />` : ""}
<meta property="og:locale" content="${locale}" />
<meta name="twitter:card" content="summary_large_image" />
${cfg.twitterHandle ? `<meta name="twitter:site" content="${esc(cfg.twitterHandle)}" />` : ""}
`.trim();
}
