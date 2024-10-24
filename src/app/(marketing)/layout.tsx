import { Header } from "@/components/header";
import { ReactNode } from "react";
import { ScrollToTop } from "@/components/scroll-to-top";

export default function Layout({ children }: { children: ReactNode }) {
	return (
		<>
			<Header />
			<main className="relative flex-1 w-full">
				{children}
				<div className="fixed bottom-2 end-2">
					<ScrollToTop />
				</div>
			</main>
		</>
	);
}
