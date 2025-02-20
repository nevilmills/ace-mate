import { ScoringHistorySkeleton } from "@/components/skeletons/scoring-history-skeleton";
import { UserProfileSkeleton } from "@/components/skeletons/user-profile-skeleton";
import React from "react";

interface LoadingProps {}

export const Loading: React.FC<LoadingProps> = ({}) => {
  return (
    <div className="px-12 py-8 flex flex-row justify-center space-x-28">
      <ScoringHistorySkeleton />
      <div className="flex flex-col space-y-8">
        <div className="h-[24px]" />
        <UserProfileSkeleton />
      </div>
    </div>
  );
};

export default Loading;
