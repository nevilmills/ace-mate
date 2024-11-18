"use server";

import { db } from "@/db/db";
import { NewUser, user } from "@/db/schema";

export const createUser = async (newUser: NewUser) => {
  const createdUser = await db.insert(user).values(newUser).returning();
  console.log("New user:", createdUser);
  return newUser;
};
