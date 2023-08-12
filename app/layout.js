import Layout from "@/shared/components/Layout";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "Coinomi",
	description: "We make crypto clear and simple",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<Layout>{children}</Layout>
			</body>
		</html>
	);
}
