import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const repairsTable = sqliteTable("repairs", {
	id: integer("id").primaryKey(),
	userId: integer("user_id").notNull(),
	cost: integer("cost").notNull(),
	receipt: text("receipt").notNull(),
	createdAt: integer("created_at", { mode: "timestamp" }).default(new Date()),
	updatedAt: integer("updated_at", { mode: "timestamp" }).$onUpdate(
		() => new Date(),
	),
});
