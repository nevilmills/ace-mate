"use server";

import { getFeedPosts } from "@/db/queries/post/select";
import { getUsersByIds } from "@/db/queries/user/select";
import { getUsersFriends } from "@/db/queries/user_friends/select";

export const fetchPosts = async ({
  page = 1,
  userIds,
}: {
  page?: number;
  userIds: string[];
}) => {
  const posts = await getFeedPosts(userIds, page, 3);
  return posts;
};

export const fetchUsersFriends = async (userId: string) => {
  const userFriends = await getUsersFriends(userId);
  const friendIds = userFriends.map((userFriend) => userFriend.friendId); // extract friendIds
  const friends = await getUsersByIds(friendIds);
  return friends;
};
