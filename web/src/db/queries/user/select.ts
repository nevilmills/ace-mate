"use server";

import { db } from "@/db/db";
import { user } from "@/db/schema";
import { ilike } from "drizzle-orm";

export const getUserSuggestions = async (partialUsername: string) => {
  const users = await db
    .select()
    .from(user)
    .where(ilike(user.username, `%${partialUsername}%`))
    .limit(10);
  return users;
};
