"use client";
import React from "react";
import { Card, CardContent, CardHeader } from "./ui/card";
import { ExistingPost, ExistingUser, GolfCourse } from "@/db/schema";
import Image from "next/image";

interface postProps {
  data: { post: ExistingPost; golf_course: GolfCourse; user: ExistingUser };
}

export const Post: React.FC<postProps> = ({ data }) => {
  // const user = await currentUser();
  // const { imageUrl } = await getUserById(user!.id);

  console.log("data: ", data);
  const { user, golf_course, post } = data;
  const dateString = new Date(post.date).toDateString();

  return (
    <Card>
      <CardHeader className="flex flex-col space-y-4">
        <div className="flex space-x-4 items-center">
          <div className="rounded-full overflow-hidden">
            <Image
              src={user.imageUrl ? user.imageUrl : "https://robohash.org/asd"}
              width={30}
              height={30}
              alt="Profile Picture"
            />
          </div>
          <span className="font-semibold text-sm">{user.username}</span>
        </div>

        <div className="flex flex-col space-y-1">
          <h4 className="font-semibold">{golf_course.name}</h4>
          <span className="text-xs text-[#b6b7b8]">{dateString}</span>
        </div>
      </CardHeader>
      <CardContent>
        <div className="rounded-lg h-36 bg-[#0a0a0a] flex flex-col p-4 space-y-2 justify-center">
          <span className="text-[42px] font-bold text-primary h-[50px] flex items-center">
            {post.score}
          </span>
          <div className="h-1 w-6 bg-white" />
          <div className="flex flex-col text-xs font-semibold">
            <span>PAR {golf_course.par}</span>
            <span>{post.tees.toUpperCase()}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
