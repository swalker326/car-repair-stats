import { redirect, type ActionFunctionArgs } from "@remix-run/node";
import { authenticator } from "~/auth/services/auth.server";

export const loader = () => redirect("/auth/login");

export const action = ({ request }: ActionFunctionArgs) => {
	return authenticator.authenticate("google", request);
};
