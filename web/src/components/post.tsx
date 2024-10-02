import React from "react";
import { Card, CardHeader } from "./ui/card";

interface postProps {
  title: string;
}

export const Post: React.FC<postProps> = ({ title }) => {
  return (
    <Card>
      <CardHeader>{title}</CardHeader>
    </Card>
  );
};
