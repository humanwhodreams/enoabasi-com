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
		author: z.string().default("Anonymous"),
		date: isodate().optional(),
		category: z.string().default("All"),
		published: z.boolean().default(true),
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
		remarkPlugins: [[remarkInstall]],
	},
});
