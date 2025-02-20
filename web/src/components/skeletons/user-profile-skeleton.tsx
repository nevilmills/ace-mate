import React from "react";
import { Card, CardContent, CardHeader } from "../ui/card";
import { Skeleton } from "../ui/skeleton";

interface UserProfileSkeletonProps {}

export const UserProfileSkeleton: React.FC<UserProfileSkeletonProps> = ({}) => {
  return (
    <Card className="max-w-[400px] w-[400px]">
      <CardHeader className="space-y-4">
        <div className="flex flex-row space-x-4 items-center">
          <Skeleton className="rounded-full w-[60px] h-[60px]" />
          <Skeleton className="flex-grow h-6" />
        </div>
      </CardHeader>
      <CardContent>
        <Skeleton className="h-4 flex-grow mt-4" />
        <Skeleton className="h-4 flex-grow mt-4" />
        <Skeleton className="h-4 w-1/2 mt-4" />
        <Skeleton className="h-8 w-24 mt-8" />
      </CardContent>
    </Card>
  );
};
