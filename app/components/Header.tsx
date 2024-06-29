import { NavLink } from "@remix-run/react";
import { Button } from "./shadcn-components/ui/button";

export function Header() {
	return (
		<header className="flex justify-between px-3 p-4 bg-gray-100">
			<h1 className="text-4xl">Car Repair Stats</h1>
			<nav>
				<ul className="flex gap-4 items-center">
					<NavLink to="/repair/create">
						<Button>Add Repair</Button>
					</NavLink>
					<NavLink to="/login">Login</NavLink>
				</ul>
			</nav>
		</header>
	);
}
