import { PostCreator } from "@/components/post-creator";
import React from "react";

const page: React.FC = () => {
  return (
    <div className="absolute top-0 flex flex-col w-screen h-screen items-center justify-center">
      <PostCreator />
    </div>
  );
};

export default page;
