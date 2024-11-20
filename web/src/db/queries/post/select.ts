"use server";

import { db } from "@/db/db";
import { post } from "@/db/schema";
import { eq } from "drizzle-orm";

export const getPostsByUser = async (userId: string) => {
  const posts = await db.select().from(post).where(eq(post.userId, userId));
  return posts;
};
