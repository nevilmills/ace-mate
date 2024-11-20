"use server";

import { db } from "@/db/db";
import { golf_course } from "@/db/schema";

export const getGolfCourses = async () => {
  const golfCourses = await db.select().from(golf_course);
  return golfCourses;
};
