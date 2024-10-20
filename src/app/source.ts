import { blog } from "~/content";
import { createMDXSource } from "fumadocs-mdx";
import { loader } from "fumadocs-core/source";

export const source = loader({
	baseUrl: "/blog",
	source: createMDXSource(blog, []),
});
