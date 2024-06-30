export { usersTable } from "./schema/usersTable";
export type { InsertUser, SelectUser } from "./schema/usersTable";

// export const postsTable = sqliteTable("posts", {
// 	id: integer("id").primaryKey(),
// 	title: text("title").notNull(),
// 	content: text("content").notNull(),
// 	userId: integer("user_id")
// 		.notNull()
// 		.references(() => usersTable.id, { onDelete: "cascade" }),
// 	createdAt: text("created_at").default(sql`(CURRENT_TIMESTAMP)`).notNull(),
// 	updateAt: integer("updated_at", { mode: "timestamp" }).$onUpdate(
// 		() => new Date(),
// 	),
// });

// export type InsertPost = typeof postsTable.$inferInsert;
// export type SelectPost = typeof postsTable.$inferSelect;
