"use server";

import { db } from "@/db/db";
import { user } from "@/db/schema";
import { eq, ilike, inArray } from "drizzle-orm";

export const getUserAutocompletion = async (partialUsername: string) => {
  const users = await db
    .select()
    .from(user)
    .where(ilike(user.username, `%${partialUsername}%`))
    .limit(10);
  return users;
};

export const getUsersByIds = async (userIds: string[]) => {
  const users = await db.select().from(user).where(inArray(user.id, userIds));
  return users;
};

export const getUserById = async (userId: string) => {
  const result = await db
    .selectDistinct()
    .from(user)
    .where(eq(user.id, userId));
  return result[0];
};
