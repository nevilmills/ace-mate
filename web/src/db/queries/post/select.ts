"use server";

import { db } from "@/db/db";
import { golf_course, post, user } from "@/db/schema";
import { and, asc, count, desc, eq, gt, inArray, lt, sql } from "drizzle-orm";

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

/**
 * Fetches posts from a list of userIds
 * @param userIds
 * @param page
 * @param pageSize
 * @returns
 */
export const getFeedPosts = async (
  userIds: string[],
  page: number,
  pageSize: number
) => {
  const posts = await db
    .select()
    .from(post)
    .where(inArray(post.userId, userIds))
    .innerJoin(golf_course, eq(post.golfCourseId, golf_course.id))
    .innerJoin(user, eq(post.userId, user.id))
    .orderBy(desc(post.createdAt))
    .limit(pageSize)
    .offset((page - 1) * pageSize);
  const data = await JSON.parse(JSON.stringify(posts));
  return data;
};

/**
 * Fetches posts from 30 days ago, defaulting to 20 posts.
 * Used to calculate the users handicap trend over the last 30 days.
 * @param userId
 * @param count
 * @returns
 */
export const getPostsFrom30DaysAgo = async (
  userId: string,
  count: number = 20
) => {
  const posts = await db
    .select()
    .from(post)
    .where(
      and(
        eq(post.userId, userId),
        lt(post.date, sql`now() - interval '30 days'`)
      )
    )
    .orderBy(desc(post.date))
    .limit(count)
    .innerJoin(golf_course, eq(post.golfCourseId, golf_course.id));
  return posts;
};

export const getMostPlayedCourseId = async (userId: string) => {
  const result = await db
    .select({
      golfCourseId: post.golfCourseId,
      roundCount: sql<number>`COUNT(*)`,
    })
    .from(post)
    .where(eq(post.userId, userId))
    .groupBy(post.golfCourseId)
    .orderBy(desc(sql`COUNT(*)`))
    .limit(1);

  return result[0] ?? null; // Return first result or null if none found
};

export const getPostsFromLast6Months = async (userId: string) => {
  const posts = await db
    .select()
    .from(post)
    .where(
      and(
        eq(post.userId, userId),
        gt(post.date, sql`now() - interval '6 months'`)
      )
    )
    .orderBy(asc(post.date))
    .innerJoin(golf_course, eq(post.golfCourseId, golf_course.id));
  return posts;
};
