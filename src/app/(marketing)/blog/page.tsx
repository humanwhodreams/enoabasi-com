import { Fragment } from "react";
import Link from "next/link";
import { Section } from "@/components/ui/section";
import { cn } from "@/lib/cn";
import { focusRing } from "@/lib/focuses";
import { source } from "@/app/source";

export default function Page() {
	const posts = [...source.getPages()].sort(
		(a, b) =>
			new Date(b.data.date!).getTime() - new Date(a.data.date!).getTime()
	);

	return (
		<>
			<Section>
				<div className="grid gap-2 text-center">
					<span className="text-xl font-extrabold tracking-wide text-blue-500">
						BLOGS
					</span>
					<h1 className="font-bricolage-grotesque">
						Blogs on Software &amp; Others
					</h1>
				</div>
			</Section>
			<Section>
				<h2>Recent blog posts</h2>
				<div className="flex flex-col gap-2 mt-2">
					{posts.map((post) => {
						return (
							<Fragment key={post.url}>
								{post.data.published ? (
									<Link
										href={post.url}
										className={cn(
											"flex flex-col bg-fd-card p-4 transition-colors hover:bg-fd-accent hover:text-fd-accent-foreground",
											focusRing
										)}
									>
										<hgroup>
											<h3>{post.data.title}</h3>
											<p className="text-sm text-fd-muted-foreground [&:not(:first-child)]:mt-2">
												{post.data.description}
											</p>
										</hgroup>
										<time className="pt-4 mt-auto text-xs text-fd-muted-foreground">
											{new Date(
												post.data.date ?? post.file.name
											).toDateString()}
										</time>
									</Link>
								) : null}
							</Fragment>
						);
					})}
				</div>
			</Section>
		</>
	);
}
