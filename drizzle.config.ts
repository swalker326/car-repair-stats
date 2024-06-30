import { config } from "dotenv";
import { defineConfig } from "drizzle-kit";

config({ path: ".env" });

if (!process.env.DATABASE_URL) {
	throw new Error("DATABASE_URL is not set");
}
if (!process.env.DATABASE_TOKEN) {
	throw new Error("DATABASE_TOKEN is not set");
}

export default defineConfig({
	schema: "./app/db/schema.ts",
	out: "./migrations",
	dialect: "sqlite",
	driver: "turso",
	dbCredentials: {
		url: process.env.DATABASE_URL,
		authToken: process.env.DATABASE_TOKEN,
	},
});
