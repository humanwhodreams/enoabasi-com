import "@/styles/globals.css";

import { bricolageGrotesque, geistMono, geistSans } from "@/lib/fonts";

import type { Metadata } from "next";
import { cn } from "@/lib/cn";

export const metadata: Metadata = {
	title: {
		template: "%s | Enoabasi",
		default: "Enoabasi Essien",
	},
	description:
		"Personal website of Enoabasi Essien. Software developer with 5+ years of experience.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={cn(
					"antialiased font-geist-sans",
					geistSans.variable,
					geistMono.variable,
					bricolageGrotesque.variable
				)}
			>
				{children}
			</body>
		</html>
	);
}
