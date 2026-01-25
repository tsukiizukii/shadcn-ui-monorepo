import type { SiteConfig } from "./index";

export function getNextMetadata(cfg: SiteConfig) {
	return {
		title: cfg.siteName,
		description: cfg.description,
		// Next App Router の metadata 互換フィールド（必要に応じて拡張）
		openGraph: {
			title: cfg.siteName,
			description: cfg.description,
			url: cfg.siteUrl,
			images: cfg.defaultImage ? [{ url: cfg.defaultImage }] : [],
			locale: cfg.locale
		},
		twitter: {
			card: "summary_large_image",
			site: cfg.twitterHandle
		}
	};
}
