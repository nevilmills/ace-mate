"use server";

import { db } from "@/db/db";
import { userFriends } from "@/db/schema";
import { eq } from "drizzle-orm";

export const getUsersFriends = async (userId: string) => {
  const friends = await db
    .select()
    .from(userFriends)
    .where(eq(userFriends.userId, userId))
    .limit(5);
  return friends;
};
