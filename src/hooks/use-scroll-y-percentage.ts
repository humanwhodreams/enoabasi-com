import { useCallback, useEffect, useState } from "react";

export function useScrollYPercentage(decimalPlaces: number = 0): number {
	const [scrollPercentage, setScrollPercentage] = useState<number>(0);

	const handleScroll = useCallback(() => {
		const calculateScrollPercentage = () => {
			const windowHeight = window.innerHeight;
			const documentHeight = document.documentElement.scrollHeight;
			const scrollY = window.scrollY;
			const scrollPercent = (scrollY / (documentHeight - windowHeight)) * 100;
			return Number(scrollPercent.toFixed(decimalPlaces));
		};

		setScrollPercentage((prevPercentage) => {
			const newPercentage = calculateScrollPercentage();
			return newPercentage !== prevPercentage ? newPercentage : prevPercentage;
		});
	}, [decimalPlaces]);

	useEffect(() => {
		let rafId: number;

		const throttledHandleScroll = () => {
			cancelAnimationFrame(rafId);
			rafId = requestAnimationFrame(handleScroll);
		};

		window.addEventListener("scroll", throttledHandleScroll);

		return () => {
			cancelAnimationFrame(rafId);
			window.removeEventListener("scroll", throttledHandleScroll);
		};
	}, [handleScroll]);

	return scrollPercentage;
}
