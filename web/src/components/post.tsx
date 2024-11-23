import React from "react";
import { Card, CardContent, CardHeader } from "./ui/card";
import { ExistingPost, GolfCourse } from "@/db/schema";
import { currentUser } from "@clerk/nextjs/server";
import Image from "next/image";

interface postProps {
  data: { post: ExistingPost; golf_course: GolfCourse };
}

export const Post: React.FC<postProps> = async ({ data }) => {
  const user = await currentUser();

  return (
    <Card>
      <CardHeader className="flex flex-col space-y-4">
        <div className="flex space-x-4 items-center">
          <div className="rounded-full overflow-hidden">
            <Image
              src={user?.imageUrl || ""}
              width={30}
              height={30}
              alt="Profile Picture"
            />
          </div>
          <span className="font-semibold text-sm">{user?.username}</span>
        </div>

        <div className="flex flex-col space-y-1">
          <h4 className="font-semibold">{data.golf_course.name}</h4>
          <span className="text-xs text-[#b6b7b8]">
            {data.post.date.toDateString()}
          </span>
        </div>
      </CardHeader>
      <CardContent>
        <div className="rounded-lg h-40 bg-[#0a0a0a] flex flex-col p-4 space-y-2">
          <span className="text-[42px] font-bold text-primary">
            {data.post.score}
          </span>
          <div className="h-1 w-6 bg-white" />
          <div className="flex flex-col text-xs font-semibold">
            <span>PAR {data.golf_course.par}</span>
            <span>{data.post.tees.toUpperCase()}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
