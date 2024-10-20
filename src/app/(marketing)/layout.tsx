import { Header } from "@/components/header";
import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
	return (
		<>
			<Header />
			<main className="relative flex-1 w-full">{children}</main>
		</>
	);
}
