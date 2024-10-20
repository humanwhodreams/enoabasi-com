import { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/cn";

interface Props extends ComponentPropsWithoutRef<"section"> {}

export function Section({ id, children, className, ...props }: Props) {
	return (
		<section
			id={id}
			className={cn("max-w-4xl mx-auto py-12 px-4 md:px-6 lg:px-8", className)}
			{...props}
		>
			{children}
		</section>
	);
}
