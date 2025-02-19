import React from "react";
import { Skeleton } from "../ui/skeleton";

interface FriendSkeletonProps {}

export const FriendSkeleton: React.FC<FriendSkeletonProps> = ({}) => {
  return (
    <div className="flex flex-row space-x-4 items-center">
      <Skeleton className="rounded-full w-[40px] h-[40px]" />
      <div className="flex flex-col space-y-2">
        <Skeleton className="w-16 h-4" />
        <Skeleton className="w-24 h-4" />
      </div>
    </div>
  );
};
