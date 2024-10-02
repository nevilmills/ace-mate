"use client";
import React, { useEffect } from "react";
import { Post } from "./post";
import { Button } from "./ui/button";

interface feedProps {}

export const Feed: React.FC<feedProps> = ({}) => {
  const [creatingPost, setCreatingPost] = React.useState(false);
  useEffect(() => {
    console.log("creatingPost state: ", creatingPost);
  }, [creatingPost]);

  return (
    <div className="w-[700px] flex flex-col space-y-4">
      <div className="w-full flex flex-row justify-between">
        <h3 className="text-2xl font-bold pl-6">Your feed</h3>
        <Button
          className="text-md font-semibold"
          onClick={() => setCreatingPost(!creatingPost)}
        >
          Post Score
        </Button>
      </div>
      {creatingPost ? null : (
        <>
          <Post title="Hello world" />
          <Post title="Dude I just shot a 79" />
          <Post title="Is it even worth it bro" />
        </>
      )}
    </div>
  );
};
