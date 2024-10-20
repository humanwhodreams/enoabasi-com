import type { Metadata } from "next";
import { Section } from "@/components/ui/section";

export const metadata: Metadata = {
	title: "Home",
};

export default function Home() {
	return (
		<>
			<Section>
				<h1 className="font-bricolage-grotesque">Enoabasi.com</h1>
				<p>Personal website of Enoabasi Essien.</p>
			</Section>
		</>
	);
}
