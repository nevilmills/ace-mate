import React from "react";
import { Post } from "./post";
import { Button } from "./ui/button";
import Link from "next/link";

interface feedProps {}

export const Feed: React.FC<feedProps> = ({}) => {
  return (
    <div className="w-[700px] flex flex-col space-y-4">
      <div className="w-full flex flex-row justify-between">
        <h3 className="text-2xl font-bold pl-6">Your feed</h3>
        <Button asChild className="text-md font-semibold">
          <Link href="/create-post">Create Post</Link>
        </Button>
      </div>
      <Post title="Hello world" />
      <Post title="Dude I just shot a 79" />
      <Post title="Is it even worth it bro" />
    </div>
  );
};
