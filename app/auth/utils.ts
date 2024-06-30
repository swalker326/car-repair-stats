import { redirect } from "@remix-run/node";
import { eq } from "drizzle-orm";
import { db } from "~/db";
import { sessionStorage } from "./services/session.server";
import { schema } from "~/db/schema";

export const sessionKey = "sessislaonId";

export async function logout(
	{
		request,
		redirectTo = "/",
	}: {
		request: Request;
		redirectTo?: string;
	},
	responseInit?: ResponseInit,
) {
	const authSession = await sessionStorage.getSession(
		request.headers.get("cookie"),
	);
	const sessionId = authSession.get(sessionKey);
	// if this fails, we still need to delete the session from the user's browser
	// and it doesn't do any harm staying in the db anyway.
	// todo: Void is from epic stack. Why void? What is void?
	if (sessionId) {
		void db.delete(schema.session).where(eq(schema.session.id, sessionId));
	}
	// throw redirect(redirectTo, {
	// 	...responseInit,
	// 	headers: combineHeaders(
	// 		{ "set-cookie": await authSessionStorage.destroySession(authSession) },
	// 		responseInit?.headers,
	// 	),
	// });
}
