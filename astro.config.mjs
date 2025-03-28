import { defineConfig } from "astro/config";
import { rehypeHeadingIds } from "@astrojs/markdown-remark";
import tailwindcss from "@tailwindcss/vite";
import remarkToc from "remark-toc";
import { rehypeAccessibleEmojis } from "rehype-accessible-emojis";
import rehypeKatex from "rehype-katex";
import remarkMath from "remark-math";

// https://astro.build/config
export default defineConfig({
	site: "https://amediocre.blog",
	vite: {
		plugins: [tailwindcss()],
	},
	image: {
		domains: ["https://amediocre.blog"],
		remotePatterns: [
			{
				protocol: "https",
				hostname: "amediocre.blog",
			},
		],
	},
	markdown: {
		rehypePlugins: [rehypeHeadingIds, rehypeAccessibleEmojis, rehypeKatex],
		remarkPlugins: [remarkToc, remarkMath],
	},
});
