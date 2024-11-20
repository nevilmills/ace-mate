"use server";

import { db } from "@/db/db";
import { NewPost, post } from "@/db/schema";

export const createPost = async (newPost: NewPost) => {
  const createdPost = await db.insert(post).values(newPost).returning();
  console.log("New post:", createdPost);
  return createdPost;
};
