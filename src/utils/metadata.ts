export const baseUrl =
	process.env.NODE_ENV === "development" || !process.env.VERCEL_URL
		? "http://localhost:3000"
		: `https://${process.env.VERCEL_URL}`;
