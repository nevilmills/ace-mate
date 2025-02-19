import FeedSkeleton from "@/components/skeletons/feed-skeleton";
import { FriendSkeleton } from "@/components/skeletons/friend-skeleton";
import { ProfileSkeleton } from "@/components/skeletons/profile-skeleton";
import React from "react";

interface LoadingProps {}

export const Loading: React.FC<LoadingProps> = ({}) => {
  return (
    <div className="px-12 py-8 flex flex-row justify-evenly">
      {/* Friends List */}
      <div className="flex flex-col w-72">
        <h3 className="text-2xl font-bold">Friends</h3>
        <div className="h-8" />
        <div className="flex flex-col space-y-8">
          {[1, 2, 3].map((i) => (
            <FriendSkeleton key={i} />
          ))}
        </div>
      </div>

      {/* Feed */}
      <FeedSkeleton />

      {/* Profile */}
      <div className="flex flex-col space-y-8">
        <div className="h-[24px]" />
        <ProfileSkeleton />
      </div>
    </div>
  );
};

export default Loading;
