import { DocsBody, DocsDescription, DocsTitle } from "fumadocs-ui/page";
import { InlineTOC } from "fumadocs-ui/components/inline-toc";

import type { Metadata } from "next";
import { Section } from "@/components/ui/section";
import defaultMdxComponents from "fumadocs-ui/mdx";
import { notFound } from "next/navigation";
import { source } from "@/app/source";

import { Tab, Tabs } from "fumadocs-ui/components/tabs";
import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Link from "next/link";
import { cn } from "@/lib/cn";
import { Share } from "@/components/share/share";
import { ScrollProgress } from "@/components/scroll-progress";
import { focusRing } from "@/lib/focuses";

interface Props {
	params: {
		slug?: string[];
	};
}

export default function Page({ params }: Props) {
	const page = source.getPage(params.slug);

	if (!page) notFound();

	const MDX = page.data.body;

	return (
		<>
			<ScrollProgress />
			<Section>
				<Breadcrumb className="mb-4">
					<BreadcrumbList>
						<BreadcrumbItem>
							<BreadcrumbLink asChild>
								<Link
									href={"/blog"}
									className={cn(
										"text-muted-foreground hover:text-primary rounded-md",
										focusRing
									)}
								>
									blog
								</Link>
							</BreadcrumbLink>
						</BreadcrumbItem>
						<BreadcrumbSeparator />
						<BreadcrumbItem>
							<BreadcrumbLink asChild>
								<Link
									href={page.data.category!}
									className={cn(
										"text-muted-foreground hover:text-primary rounded-md",
										focusRing
									)}
								>
									{page.data.category}
								</Link>
							</BreadcrumbLink>
						</BreadcrumbItem>
					</BreadcrumbList>
				</Breadcrumb>
				<article>
					<hgroup>
						<DocsTitle>{page.data.title}</DocsTitle>
						<DocsDescription>{page.data.description}</DocsDescription>
					</hgroup>
					<div className="mb-6 flex flex-col md:flex-row md:items-center md:justify-between">
						<div className="flex items-center gap-4">
							<p>
								Written by
								<span className="ml-1 font-medium text-orange-500">
									{page.data.author}
								</span>
							</p>
							&mdash;
							<time className="text-muted-foreground">
								{new Date(page.data.date ?? page.file.name).toDateString()}
							</time>
						</div>
						<Share
							url={page.url}
							title={page.data.title}
						/>
					</div>
					<div className="mb-6">
						<InlineTOC items={page.data.toc} />
					</div>
					<DocsBody>
						<MDX components={{ ...defaultMdxComponents, Tabs, Tab }} />
					</DocsBody>
				</article>
			</Section>
		</>
	);
}

export async function generateStaticParams() {
	return source.generateParams();
}

export function generateMetadata({ params }: { params: { slug?: string[] } }) {
	const page = source.getPage(params.slug);

	if (!page) notFound();

	return {
		generator: "Next.js",
		applicationName: "Enoabasi",
		title: {
			absolute: page.data.title,
		},
		description: page.data.description,
		authors: {
			name: page.data.author,
		},
		creator: "Enoabasi Essien",
		publisher: "Enoabasi Essien",
		formatDetection: {
			email: false,
			address: false,
			telephone: false,
		},
	} satisfies Metadata;
}
