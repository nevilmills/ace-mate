"use server";

import { getFeedPosts } from "@/db/queries/post/select";

export const fetchPosts = async ({ page = 1 }: { page?: number }) => {
  const posts = await getFeedPosts("userId", 1, 3);
  return posts;
};
