"use client";

import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "@/components/ui/tooltip";

import { Button } from "@/components/ui/button";
import { MoveUpIcon } from "lucide-react";

export function ScrollToTop() {
	return (
		<TooltipProvider>
			<Tooltip delayDuration={300}>
				<TooltipTrigger asChild>
					<Button
						type="button"
						variant={"secondary"}
						size={"icon"}
						onClick={() =>
							window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
						}
					>
						<MoveUpIcon className="size-[1.2rem] text-muted-foreground" />
						<span className="sr-only">scroll to top</span>
					</Button>
				</TooltipTrigger>
				<TooltipContent side="left">
					<span>Scroll to top</span>
				</TooltipContent>
			</Tooltip>
		</TooltipProvider>
	);
}
