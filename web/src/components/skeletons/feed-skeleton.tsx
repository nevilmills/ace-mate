import React from "react";
import { Skeleton } from "../ui/skeleton";
import { PostSkeleton } from "./post-skeleton";

interface FeedSkeletonProps {}

export const FeedSkeleton: React.FC<FeedSkeletonProps> = ({}) => {
  return (
    <div className="w-[750px] flex flex-col space-y-4">
      <div className="w-full flex flex-row justify-between">
        <h3 className="text-2xl font-bold pl-6">Your feed</h3>
        <Skeleton className="w-24 h-8" />
      </div>

      {[1, 2, 3].map((i) => (
        <PostSkeleton key={i} />
      ))}
    </div>
  );
};

export default FeedSkeleton;
