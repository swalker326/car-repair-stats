// app/routes/auth.google.callback.tsx
import type { LoaderFunctionArgs } from "@remix-run/node";
import { authenticator } from "~/auth/services/auth.server";

export const loader = ({ request }: LoaderFunctionArgs) => {
	return authenticator.authenticate("google", request, {
		successRedirect: "/",
		failureRedirect: "/auth/login",
	});
};