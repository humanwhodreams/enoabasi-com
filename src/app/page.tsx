import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Home",
};

export default function Home() {
	return (
		<div className="grid place-items-center min-h-screen">
			<div>
				<h1 className="font-bricolage-grotesque">Enoabasi.com</h1>
				<p>
					Personal website of Enoabasi Essien. Software developer with 5+ years
					of experience.
				</p>
			</div>
		</div>
	);
}
