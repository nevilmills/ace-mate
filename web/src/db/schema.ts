import { integer, pgTable, serial, text, timestamp } from "drizzle-orm/pg-core";

export const user = pgTable("user", {
  id: serial("id").primaryKey(),
  username: text("name").notNull(),
  password: text("password").notNull(),
  email: text("email").notNull().unique(),
});

export const golf_course = pgTable("golf_course", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  par: integer("par").notNull(),
});

export type NewUser = typeof user.$inferInsert;
export type ExistingUser = typeof user.$inferSelect;
export type GolfCourse = typeof golf_course.$inferSelect;
