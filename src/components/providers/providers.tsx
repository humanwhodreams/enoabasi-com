import { ReactNode } from "react";
import { ThemeProvider } from "./theme";

interface Props {
	children: ReactNode;
}
export function Providers({ children }: Props) {
	return (
		<ThemeProvider
			attribute="class"
			defaultTheme="system"
			enableSystem
			disableTransitionOnChange
		>
			{children}
		</ThemeProvider>
	);
}
