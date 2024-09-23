"use server";

import { db } from "@/db/db";
import { NewUser, users } from "@/db/schema";

export const createUser = async () => {
  const user: NewUser = {
    email: "asd@asd.com",
    username: "bob",
    password: "1234",
  };
  const newUser = await db.insert(users).values(user).returning();
  return newUser;
};
