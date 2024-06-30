import { Form } from "@remix-run/react";
import { Button } from "./shadcn-components/ui/button";

export function LogoutButton() {
	return (
		<Form action="/auth/logout">
			<Button type="submit">Logout</Button>
		</Form>
	);
}
