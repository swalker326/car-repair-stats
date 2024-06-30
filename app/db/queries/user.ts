import { type InsertUser, usersTable } from "~/db/schema";
import { db } from "~/db";

export async function createUser(user: InsertUser) {
	return db.insert(usersTable).values(user);
}
