import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { getFeedPosts } from "@/db/queries/post/select";
import { InfiniteScroll } from "./infinite-scroll";
import { ExistingUser } from "@/db/schema";
import { PostSubmitSonner } from "./post-submit-sonner";

interface feedProps {
  userId: string;
  friends: ExistingUser[];
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export const Feed: React.FC<feedProps> = async ({
  userId,
  friends,
  searchParams,
}) => {
  const friendIds = friends.map((friend) => friend.id); // map friends to their ids
  const userIds = [userId, ...friendIds]; // combine userId and friendIds
  const posts = await getFeedPosts(userIds, 1, 3); // fetch initial posts

  const { submitted } = await searchParams; // extract search params

  return (
    <div className="w-[750px] flex flex-col space-y-4">
      <div className="w-full flex flex-row justify-between">
        <h3 className="text-2xl font-bold pl-6">Your feed</h3>
        <Button asChild className="text-md font-semibold">
          <Link href="/create-post">Create Post</Link>
        </Button>
      </div>
      <InfiniteScroll initialPosts={posts} userIds={userIds} />
      {submitted && <PostSubmitSonner />}
    </div>
  );
};
