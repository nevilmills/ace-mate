import { integer, pgTable, serial, text, timestamp } from "drizzle-orm/pg-core";

export const users = pgTable("user", {
  id: serial("id").primaryKey(),
  username: text("name").notNull(),
  password: text("password").notNull(),
  email: text("email").notNull().unique(),
});

export type NewUser = typeof users.$inferInsert;
export type ExistingUser = typeof users.$inferSelect;
