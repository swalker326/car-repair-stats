// app/routes/login.tsx
import type { ActionFunctionArgs, LoaderFunctionArgs } from "@remix-run/node";
import { Form, json, useLoaderData } from "@remix-run/react";
import { authenticator } from "~/auth/services/auth.server";
import { sessionStorage } from "~/auth/services/session.server";
import { Button } from "~/components/shadcn-components/ui/button";

// First we create our UI with the form doing a POST and the inputs with the
// names we are going to use in the strategy
export default function Screen() {
	const { error } = useLoaderData<typeof loader>();
	return (
		<div>
			<Form method="post" action="/auth/google">
				{error ? <div>{error.message}</div> : null}
				<button type="submit">Sign In with Google</button>
				<Button>Sign In</Button>
			</Form>
		</div>
	);
}

// Second, we need to export an action function, here we will use the
// `authenticator.authenticate method`
export async function action({ request }: ActionFunctionArgs) {
	// we call the method with the name of the strategy we want to use and the
	// request object, optionally we pass an object with the URLs we want the user
	// to be redirected to after a success or a failure
	return await authenticator.authenticate("user-pass", request, {
		successRedirect: "/dashboard",
		failureRedirect: "/login",
	});
}

// Finally, we can export a loader function where we check if the user is
// authenticated with `authenticator.isAuthenticated` and redirect to the
// dashboard if it is or return null if it's not
// export async function loader({ request }: LoaderFunctionArgs) {
// 	// If the user is already authenticated redirect to /dashboard directly
// 	return await authenticator.isAuthenticated(request, {
// 		successRedirect: "/dashboard",
// 	});
// }

type LoaderError = { message: string } | null;
export const loader = async ({ request }: LoaderFunctionArgs) => {
	await authenticator.isAuthenticated(request, { successRedirect: "/" });
	const session = await sessionStorage.getSession(
		request.headers.get("Cookie"),
	);
	const error = session.get(authenticator.sessionErrorKey) as LoaderError;
	return json({ error });
};
