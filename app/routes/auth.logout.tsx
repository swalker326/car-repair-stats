import { type ActionFunctionArgs, json } from "@remix-run/node";

export async function action({ request }: ActionFunctionArgs) {
	return json({ message: "Logged out" }, { status: 200 });
}
