import React from "react";
import { Card, CardHeader, CardContent } from "../ui/card";
import { Skeleton } from "../ui/skeleton";

interface PostSkeletonProps {}

export const PostSkeleton: React.FC<PostSkeletonProps> = ({}) => {
  return (
    <Card className="max-w-[750px] w-[750px] h-[308px] overflow-hidden">
      <CardHeader>
        <div className="flex flex-col space-y-4">
          <div className="flex flex-row space-x-4 items-center">
            <Skeleton className="rounded-full w-[40px] h-[40px]" />
            <Skeleton className="w-24 h-4" />
          </div>
          <div className="flex flex-col space-y-2">
            <Skeleton className="w-36 h-4" />
            <Skeleton className="w-24 h-4" />
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="h-4" />
        <Skeleton className="h-24 flex-grow" />
      </CardContent>
    </Card>
  );
};
