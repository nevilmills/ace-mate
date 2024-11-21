import {
  integer,
  numeric,
  pgTable,
  serial,
  text,
  timestamp,
} from "drizzle-orm/pg-core";

export const user = pgTable("user", {
  id: text("id").primaryKey(), // same as clerk id
  username: text("name").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  handicap: numeric("handicap", { precision: 3, scale: 1 }),
});

export const post = pgTable("post", {
  id: serial("id").primaryKey(),
  userId: text("user_id").references(() => user.id),
  golfCourseId: integer("golf_course_id")
    .references(() => golf_course.id)
    .notNull(),
  score: integer("score").notNull(),
  tees: text("tees").notNull(),
  date: timestamp("date").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const golf_course = pgTable("golf_course", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  par: integer("par").notNull(),
});

export type NewUser = typeof user.$inferInsert;
export type ExistingUser = typeof user.$inferSelect;
export type GolfCourse = typeof golf_course.$inferSelect;
export type NewPost = typeof post.$inferInsert;
export type ExistingPost = typeof post.$inferSelect;
