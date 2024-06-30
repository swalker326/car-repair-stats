import { relations, sql } from "drizzle-orm";
import { sqliteTable, text, int } from "drizzle-orm/sqlite-core";
import { nanoid } from "nanoid";
import { usersTable } from "./usersTable";

export const session = sqliteTable("session", {
	id: text("id").primaryKey().$defaultFn(nanoid),
	expirationDate: int("expirationDate", { mode: "timestamp" }).notNull(),
	createdAt: int("createdAt", { mode: "timestamp" })
		.notNull()
		.default(sql`(unixepoch())`),
	updatedAt: int("updatedAt", { mode: "timestamp" }),
	userId: text("userId")
		.references(() => usersTable.id, { onDelete: "cascade" })
		.notNull(),
});

export const sessionsRelations = relations(session, (helpers) => ({
	user: helpers.one(usersTable, {
		relationName: "sessionToUser",
		fields: [session.userId],
		references: [usersTable.id],
	}),
}));

export type InsertSession = typeof session.$inferInsert;
export type SelectSession = typeof session.$inferSelect;