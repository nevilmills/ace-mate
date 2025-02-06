"use server";

import { getFeedPosts } from "@/db/queries/post/select";

export const fetchPosts = async ({
  page = 1,
  userId,
}: {
  page?: number;
  userId: string;
}) => {
  const posts = await getFeedPosts(userId, page, 3);
  return posts;
};
