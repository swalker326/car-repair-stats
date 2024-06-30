import { config } from "dotenv";
import { drizzle } from "drizzle-orm/libsql";
import { createClient } from "@libsql/client";

config({ path: ".env" });

if (!process.env.DATABASE_URL) {
	throw new Error("DATABASE_URL is not set");
}
if (!process.env.DATABASE_TOKEN) {
	throw new Error("DATABASE_TOKEN is not set");
}

const client = createClient({
	url: process.env.DATABASE_URL,
	authToken: process.env.DATABASE_TOKEN,
});

export const db = drizzle(client);
