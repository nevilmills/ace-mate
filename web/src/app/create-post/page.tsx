import { PostCreator } from "@/components/post-creator/post-creator";
import { getGolfCourses } from "@/db/queries/golf-course/select";
import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Create post | AceMate",
  icons: "/images/favicon.ico",
};

export default async function Page() {
  const golfCourses = await getGolfCourses();

  return (
    <div className="absolute top-0 flex flex-col w-screen h-screen items-center justify-center">
      <PostCreator golfCourses={golfCourses} />
    </div>
  );
}
