import { PostCreator } from "@/components/post-creator/post-creator";
import { getGolfCourses } from "@/db/queries/golf-course/select";
import React from "react";

const page: React.FC = async () => {
  const golfCourses = await getGolfCourses();
  console.log(golfCourses);

  return (
    <div className="absolute top-0 flex flex-col w-screen h-screen items-center justify-center">
      <PostCreator golfCourses={golfCourses} />
    </div>
  );
};

export default page;
