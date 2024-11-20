import React from "react";
import { Post } from "./post";
import { Button } from "./ui/button";
import Link from "next/link";
import { auth } from "@clerk/nextjs/server";
import { getPostsByUser } from "@/db/queries/post/select";

interface feedProps {}

export const Feed: React.FC<feedProps> = async ({}) => {
  const { userId } = auth();

  if (!userId) {
    throw new Error("User not found");
  }

  const posts = await getPostsByUser(userId);

  return (
    <div className="w-[700px] flex flex-col space-y-4">
      <div className="w-full flex flex-row justify-between">
        <h3 className="text-2xl font-bold pl-6">Your feed</h3>
        <Button asChild className="text-md font-semibold">
          <Link href="/create-post">Create Post</Link>
        </Button>
      </div>
      {posts.map((post) => (
        <Post post={post} />
      ))}
    </div>
  );
};
