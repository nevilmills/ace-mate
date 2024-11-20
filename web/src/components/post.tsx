import React from "react";
import { Card, CardHeader, CardTitle } from "./ui/card";
import { ExistingPost } from "@/db/schema";

interface postProps {
  post: ExistingPost;
}

export const Post: React.FC<postProps> = ({ post }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{post.score}</CardTitle>
      </CardHeader>
    </Card>
  );
};
