"use server";

import { db } from "@/db/db";
import { golf_course } from "@/db/schema";
import { eq } from "drizzle-orm";

export const getGolfCourses = async () => {
  const golfCourses = await db.select().from(golf_course);
  return golfCourses;
};

export const getGolfCourseById = async (id: number) => {
  const golfCourse = await db
    .select()
    .from(golf_course)
    .where(eq(golf_course.id, id));
  return golfCourse[0] ?? null;
};
