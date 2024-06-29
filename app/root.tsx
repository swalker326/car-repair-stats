import {
	Links,
	Meta,
	Outlet,
	Scripts,
	ScrollRestoration,
} from "@remix-run/react";
import "./tailwind.css";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

export function Layout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en" className="h-full">
			<head>
				<meta charSet="utf-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<Meta />
				<Links />
			</head>
			<body className="flex flex-col h-full">
				<Header />
				<main className="px-2 p-4 flex-grow">{children}</main>
				<ScrollRestoration />
				<Scripts />
				<Footer />
			</body>
		</html>
	);
}

export default function App() {
	return <Outlet />;
}
