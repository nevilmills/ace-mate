"use server";

import { db } from "@/db/db";
import { user, golf_course, post } from "@/db/schema";
import { desc, eq } from "drizzle-orm";

export const updateHandicap = async (userId: string) => {
  // attempt to fetch 20 most recent scores
  const data = await db
    .select()
    .from(post)
    .where(eq(post.userId, userId))
    .orderBy(desc(post.date))
    .limit(20)
    .innerJoin(golf_course, eq(post.golfCourseId, golf_course.id));

  // if there are less than 20 scores, the user has not qualified for a handicap yet
  if (data.length < 10) {
    return;
  }

  // calculate handicap
  // get lowest 8 scores.
  const topScores = data
    .map((item) => item.post.score - item.golf_course.par)
    .sort((a, b) => a - b)
    .slice(0, 8);

  const sum = topScores.reduce((acc, score) => acc + score, 0);
  const average = sum / topScores.length;

  // Update the user's handicap
  await db
    .update(user)
    .set({ handicap: average.toString() })
    .where(eq(user.id, userId));
};
