"use server";

import { db } from "@/db/db";
import { user } from "@/db/schema";
import { and, eq, ilike, inArray, not } from "drizzle-orm";

/**
 * Returns a list of users that match the partial username excluding the supplied user
 * @param partialUsername
 * @returns
 */
export const getUserAutocompletion = async (
  partialUsername: string,
  excludedUser: string
) => {
  const users = await db
    .select()
    .from(user)
    .where(
      and(
        ilike(user.username, `%${partialUsername}%`),
        not(eq(user.id, excludedUser))
      )
    )
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
