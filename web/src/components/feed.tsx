import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { getFeedPosts } from "@/db/queries/post/select";
import { InfiniteScroll } from "./infinite-scroll";

interface feedProps {
  userId: string;
}

export const Feed: React.FC<feedProps> = async ({ userId }) => {
  const posts = await getFeedPosts(userId, 1, 3);

  return (
    <div className="w-[750px] flex flex-col space-y-4">
      <div className="w-full flex flex-row justify-between">
        <h3 className="text-2xl font-bold pl-6">Your feed</h3>
        <Button asChild className="text-md font-semibold">
          <Link href="/create-post">Create Post</Link>
        </Button>
      </div>
      <InfiniteScroll initialPosts={posts} />
    </div>
  );
};
