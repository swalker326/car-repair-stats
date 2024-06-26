import type { MetaFunction } from "@remix-run/node";
import { Button } from "~/components/shadcn-components/ui/button";

export const meta: MetaFunction = () => {
	return [
		{ title: "New Remix App" },
		{ name: "description", content: "Welcome to Remix!" },
	];
};

export default function Index() {
	return (
		<div>
			<h2 className="text-xl">Index Route</h2>
		</div>
	);
}
