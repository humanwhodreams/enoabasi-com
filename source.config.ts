import {
	defineCollections,
	defineConfig,
	frontmatterSchema,
} from "fumadocs-mdx/config";

import { remarkInstall } from "fumadocs-docgen";
import { z } from "zod";

const blog = defineCollections({
	dir: "content/blog",
	schema: frontmatterSchema.extend({
		author: z.string().default("Anonymous").optional(),
		date: z.string().optional(),
		published: z.boolean().default(true).optional(),
	}),
	type: "doc",
});

export default defineConfig({
	mdxOptions: {
		remarkPlugins: [[remarkInstall, { persist: { id: "package-manager" } }]],
	},
});
