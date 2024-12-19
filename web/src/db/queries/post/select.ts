"use server";

import { db } from "@/db/db";
import { golf_course, post, user } from "@/db/schema";
import { count, desc, eq } from "drizzle-orm";

export const getPostsByUserWithCourse = async (userId: string) => {
  const posts = await db
    .select()
    .from(post)
    .where(eq(post.userId, userId))
    .innerJoin(golf_course, eq(post.golfCourseId, golf_course.id))
    .orderBy(desc(post.createdAt));

  return posts;
};

export const getRoundsPlayedCountsByUser = async (userId: string) => {
  const roundsPlayed = await db
    .select({ value: golf_course.name, count: count(post.id) })
    .from(post)
    .innerJoin(golf_course, eq(post.golfCourseId, golf_course.id))
    .where(eq(post.userId, userId))
    .groupBy(golf_course.name)
    .orderBy(desc(count(post.id)))
    .limit(5);

  return roundsPlayed;
};

export const getFeedPosts = async (
  userId: string,
  page: number,
  pageSize: number
) => {
  const posts = await db
    .select()
    .from(post)
    .where(eq(post.userId, userId))
    .innerJoin(golf_course, eq(post.golfCourseId, golf_course.id))
    .innerJoin(user, eq(post.userId, user.id))
    .orderBy(desc(post.createdAt))
    .limit(pageSize)
    .offset((page - 1) * pageSize);

  // console.log(posts);

  const data = await JSON.parse(JSON.stringify(posts));
  return data;
};
