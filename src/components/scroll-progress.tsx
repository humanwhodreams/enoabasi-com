"use client";

import { useScrollYPercentage } from "@/hooks/use-scroll-y-percentage";

export function ScrollProgress() {
	const scrollPercentage = useScrollYPercentage(3);

	return (
		<div className="h-1 w-full bg-muted/50 fixed top-12 inset-x-0 z-40">
			<div
				className="bg-blue-500/80 h-full rounded-e-full"
				style={{
					width: `${scrollPercentage}%`,
				}}
			></div>
		</div>
	);
}
