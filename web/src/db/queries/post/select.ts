"use server";

import { db } from "@/db/db";
import { golf_course, post } from "@/db/schema";
import { eq } from "drizzle-orm";

export const getPostsByUserWithCourse = async (userId: string) => {
  const posts = await db
    .select()
    .from(post)
    .where(eq(post.userId, userId))
    .innerJoin(golf_course, eq(post.golfCourseId, golf_course.id));
  console.log(posts);
  return posts;
};
