import type { MetadataRoute } from "next";
import { baseUrl } from "@/utils/metadata";
import { source } from "@/app/source";

export const revalidate = false;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
	const url = (path: string): string => new URL(path, baseUrl).toString();

	return [
		{
			url: url("/"),
			changeFrequency: "monthly",
			priority: 1,
		},
		{
			url: url("/work"),
			changeFrequency: "monthly",
			priority: 0.8,
		},
		{
			url: url("/about"),
			changeFrequency: "monthly",
			priority: 0.8,
		},
		{
			url: url("/blog"),
			changeFrequency: "monthly",
			priority: 0.8,
		},
		...(await Promise.all(
			source.getPages().map(async (page) => {
				return {
					url: url(page.url),
					changeFrequency: "weekly",
					priority: 0.5,
				} as MetadataRoute.Sitemap[number];
			})
		)),
	];
}
