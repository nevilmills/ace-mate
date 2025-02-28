"use server";

import { getGolfCourseById } from "@/db/queries/golf-course/select";
import {
  getFeedPosts,
  getMostPlayedCourseId,
  getPostsFromLast6Months,
} from "@/db/queries/post/select";
import { getUsersByIds } from "@/db/queries/user/select";
import { deleteUserFriend } from "@/db/queries/user_friends/delete";
import { createUserFriend } from "@/db/queries/user_friends/insert";
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

// find the most played course of the provided user
export const getMostPlayedCourse = async (userId: string) => {
  const golfCourseId = await getMostPlayedCourseId(userId);
  if (!golfCourseId) return;
  const golfCourse = await getGolfCourseById(golfCourseId.golfCourseId);
  return golfCourse?.name;
};

export const addFriend = async (loggedInUser: string, friendId: string) => {
  createUserFriend(loggedInUser, friendId);
  createUserFriend(friendId, loggedInUser);
};

export const removeFriend = async (loggedInUser: string, friendId: string) => {
  deleteUserFriend(loggedInUser, friendId);
  deleteUserFriend(friendId, loggedInUser);
};

export const areUsersFriends = async (userId: string, friendId: string) => {
  const userFriends = await getUsersFriends(userId);
  const friendIds = userFriends.map((userFriend) => userFriend.friendId);
  return friendIds.includes(friendId);
};

export const getChartData = async (userId: string) => {
  const data = await getPostsFromLast6Months(userId);

  // calculate difference from par for each post.
  const newData = data.map((item) => {
    const newItem = {
      date: item.post.createdAt,
      differenceFromPar: item.post.score - item.golf_course.par,
    };

    return newItem;
  });

  return newData;
};
