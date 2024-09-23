"use server";

import { db } from "@/db/db";
import { NewUser, users } from "@/db/schema";

export const createUser = async (user: NewUser) => {
  const newUser = await db.insert(users).values(user).returning();
  console.log("New user:", newUser);
  return newUser;
};
