import Link from "next/link";
import { cn } from "@/lib/cn";
import { focusRing } from "@/lib/focuses";

interface Options {
	href?: string;
	className?: string;
}

export function Brand({ className, href }: Options) {
	return (
		<Link
			href={href || "/"}
			className={cn("rounded-md", className, focusRing)}
			aria-label="brand"
		>
			∆ Enoabasi.com
		</Link>
	);
}
