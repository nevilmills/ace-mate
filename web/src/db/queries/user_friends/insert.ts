"use server";

import { db } from "@/db/db";
import { userFriends } from "@/db/schema";

export const createUserFriend = async (userId: string, friendId: string) => {
  const result = await db.insert(userFriends).values({ userId, friendId });
  console.log("Result:", result);
  return result;
};
