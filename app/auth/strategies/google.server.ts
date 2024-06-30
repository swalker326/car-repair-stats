// app/services/auth.server.ts
import { eq } from "drizzle-orm";
import { GoogleStrategy } from "remix-auth-google";
import { db } from "~/db";
import { usersTable } from "~/db/schema";

if (!process.env.GOOGLE_CLIENT_ID) {
	throw new Error("GOOGLE_CLIENT_ID is not set");
}
if (!process.env.GOOGLE_CLIENT_SECRET) {
	throw new Error("GOOGLE_CLIENT_SECRET is not set");
}
console.log("GOOGLE_CLIENT_ID", process.env.GOOGLE_CLIENT_ID);
export const googleStrategy = new GoogleStrategy(
	{
		clientID: process.env.GOOGLE_CLIENT_ID,
		clientSecret: process.env.GOOGLE_CLIENT_SECRET,
		callbackURL: "/auth/google/callback",
	},
	async ({ accessToken, refreshToken, extraParams, profile }) => {
		let user = await db
			.select()
			.from(usersTable)
			.where(eq(usersTable.email, profile.emails[0].value));
		if (!user) {
			user = await db
				.insert(usersTable)
				.values({
					email: profile.emails[0].value,
				})
				.returning();
		}
		return user[0];
	},
);
