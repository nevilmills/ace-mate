import { integer, pgTable, serial, text, timestamp } from "drizzle-orm/pg-core";
import { decimal } from "drizzle-orm/pg-core";

export const user = pgTable("user", {
  id: text("id").primaryKey(), // same as clerk id
  username: text("name").notNull(),
  handicap: decimal("handicap", { precision: 2, scale: 1 }),
});

export const golf_course = pgTable("golf_course", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  par: integer("par").notNull(),
});

export type NewUser = typeof user.$inferInsert;
export type ExistingUser = typeof user.$inferSelect;
export type GolfCourse = typeof golf_course.$inferSelect;
