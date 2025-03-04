import React from "react";
import { InfiniteScroll } from "./infinite-scroll";
import { getFeedPosts } from "@/db/queries/post/select";
import { ExistingUser } from "@/db/schema";

interface PostHistoryProps {
  user: ExistingUser;
}

export const PostHistory: React.FC<PostHistoryProps> = async ({ user }) => {
  const posts = await getFeedPosts([user.id], 1, 3); // fetch initial posts

  return (
    <div className="w-[750px] flex flex-col space-y-4">
      <h3 className="text-2xl font-bold pl-6">Scoring history</h3>
      {posts.length === 0 ? (
        <div className="text-muted-foreground pt-4 text-lg">
          No posts found.
        </div>
      ) : (
        <InfiniteScroll initialPosts={posts} userIds={[user.id]} />
      )}
    </div>
  );
};
