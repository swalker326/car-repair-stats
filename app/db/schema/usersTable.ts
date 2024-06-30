import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const usersTable = sqliteTable("users", {
	id: integer("id").primaryKey(),
	email: text("email").unique().notNull(),
	createdAt: integer("created_at", { mode: "timestamp" }).default(new Date()),
	updatedAt: integer("updated_at", { mode: "timestamp" }).$onUpdate(
		() => new Date(),
	),
});

export type InsertUser = typeof usersTable.$inferInsert;
export type SelectUser = typeof usersTable.$inferSelect;

/*
model UserImage {
  id          String  @id @default(cuid())
  altText     String?
  contentType String
  blob        Bytes

  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt

  user   User   @relation(fields: [userId], references: [id], onDelete: Cascade, onUpdate: Cascade)
  userId String @unique
}

model Password {
  hash String

  user   User   @relation(fields: [userId], references: [id], onDelete: Cascade, onUpdate: Cascade)
  userId String @unique
}

model Session {
  id             String   @id @default(cuid())
  expirationDate DateTime

  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt

  user   User   @relation(fields: [userId], references: [id], onDelete: Cascade, onUpdate: Cascade)
  userId String

  // non-unique foreign key
  @@index([userId])
}
model User {
  id       String  @id @default(cuid())
  email    String  @unique
  username String  @unique
  name     String?

  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt

  image       UserImage?
  password    Password?
  sessions    Session[]
  connections Connection[]
}

model Connection {
  id           String @id @default(cuid())
  providerName String
  providerId   String

  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt

  user   User   @relation(fields: [userId], references: [id], onDelete: Cascade, onUpdate: Cascade)
  userId String

  @@unique([providerName, providerId])
}

  */
