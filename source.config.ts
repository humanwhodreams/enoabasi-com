import {
	defineCollections,
	defineConfig,
	frontmatterSchema,
} from "fumadocs-mdx/config";

import { isodate } from "@/lib/zod/isodate";
import { rehypeCode } from "fumadocs-core/mdx-plugins";
import { remarkInstall } from "fumadocs-docgen";
import { z } from "zod";

export const blog = defineCollections({
	dir: "src/content/blog",
	schema: frontmatterSchema.extend({
		author: z.string().default("Anonymous").optional(),
		date: z.string().optional(),
		category: z.string().default("All").optional(),
		published: z.boolean().default(true).optional(),
		date: isodate().optional(),
	}),
	type: "doc",
});

export default defineConfig({
	mdxOptions: {
		rehypeCodeOptions: {
			inline: "tailing-curly-colon",
			themes: {
				light: "github-light-default",
				dark: "github-dark-default",
			},
		},
		rehypePlugins: [rehypeCode],
		remarkPlugins: [[remarkInstall, { persist: { id: "package-manager" } }]],
	},
});
