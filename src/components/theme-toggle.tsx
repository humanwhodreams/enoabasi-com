"use client";

import { MoonIcon, SunDimIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";

export function ThemeToggle() {
	const { theme, setTheme } = useTheme();
	return (
		<Button
			type="button"
			variant="ghost"
			size="icon"
			onClick={() => setTheme(theme === "light" ? "dark" : "light")}
		>
			<SunDimIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 fill-current" />
			<MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 fill-current" />
			<span className="sr-only">Toggle theme</span>
		</Button>
	);
}
