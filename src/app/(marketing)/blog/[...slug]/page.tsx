import { DocsBody, DocsDescription, DocsTitle } from "fumadocs-ui/page";

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
import { buttonVariants } from "@/components/ui/button";

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
			<Section>
				<Breadcrumb className="mb-4">
					<BreadcrumbList>
						<BreadcrumbItem>
							<BreadcrumbLink asChild>
								<Link
									href={"/blog"}
									className={cn(
										buttonVariants({ variant: "ghost", size: "sm" })
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
										buttonVariants({ variant: "ghost", size: "sm" })
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
		title: page.data.title,
		description: page.data.description,
		authors: {
			name: page.data.author
		}
	} satisfies Metadata;
}
