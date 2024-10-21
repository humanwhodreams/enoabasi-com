import { ReactNode } from "react";
import { ShareOptions } from "./utils";
import { cn } from "@/lib/cn";

interface Props extends Omit<ShareOptions, "description"> {
	children: ReactNode;
	className?: string;
}

export function Social({ url, title, children, className }: Props) {
	return (
		<a
			title={title}
			target="_blank"
			href={url}
			rel="noopener noreferrer"
			className={cn(
				"col-span-1 bg-muted/80 rounded-md border hover:border-blue-500",
				"flex flex-col items-center justify-center p-4 text-center",
				className
			)}
		>
			{children}
			<span className="text-xs text-muted-foreground font-medium mt-2">{title}</span>
		</a>
	);
}
