import { Brand } from "@/components/ui/brand";
import Link from "next/link";
import { buttonVariants } from "./ui/button";
import { cn } from "@/lib/cn";

interface Props {
	className?: string;
}

const NAVLINKS = [
	{
		label: "/work",
		href: "/work",
	},
	{
		label: "/blog",
		href: "/blog",
	},
	{
		label: "/about",
		href: "/about",
	},
];

export function Header({ className }: Props) {
	return (
		<header
			className={cn("sticky top-0 inset-x-0 w-full z-50 border-b bg-background", className)}
		>
			<nav className="flex flex-row items-center h-12 px-4 lg:px-6">
				<Brand />

				<ul className="flex items-center gap-2 lg:ml-6">
					{NAVLINKS.map((link) => (
						<li key={link.href}>
							<Link
								href={link.href}
								className={buttonVariants({
									variant: "ghost",
									size: "sm",
									className: "text-muted-foreground",
								})}
							>
								{link.label}
							</Link>
						</li>
					))}
				</ul>
			</nav>
		</header>
	);
}
