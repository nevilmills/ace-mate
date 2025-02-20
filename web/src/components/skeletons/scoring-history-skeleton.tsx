import React from "react";
import { Skeleton } from "../ui/skeleton";
import { PostSkeleton } from "./post-skeleton";

interface ScoringHistorySkeletonProps {}

export const ScoringHistorySkeleton: React.FC<
  ScoringHistorySkeletonProps
> = ({}) => {
  return (
    <div className="w-[750px] flex flex-col space-y-4">
      <div className="w-full flex flex-row">
        <h3 className="text-2xl font-bold pl-6">Scoring history</h3>
      </div>
      {[1, 2].map((i) => (
        <PostSkeleton key={i} />
      ))}
    </div>
  );
};
