import React from "react";
import { Card, CardHeader, CardTitle } from "./ui/card";

interface postProps {
  title: string;
}

export const Post: React.FC<postProps> = ({ title }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
    </Card>
  );
};
