"use server";

import { db } from "@/db/db";
import { userFriends } from "@/db/schema";
import { and, eq } from "drizzle-orm";

/**
 * Un-friend a user
 * @param userId
 * @param friendId
 */
export const deleteUserFriend = async (userId: string, friendId: string) => {
  try {
    const result = await db
      .delete(userFriends)
      .where(
        and(eq(userFriends.userId, userId), eq(userFriends.friendId, friendId))
      );
  } catch (err) {
    console.log("error:", err);
  }
};
