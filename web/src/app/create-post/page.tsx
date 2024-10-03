import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import React from "react";

const page: React.FC = () => {
  return (
    <div className="absolute top-0 flex flex-col w-screen h-screen items-center justify-center">
      <Card className="w-96">
        <CardHeader>
          <CardTitle>Create a New Post</CardTitle>
        </CardHeader>
        <CardContent>{/* Add your form or content here */}</CardContent>
      </Card>
    </div>
  );
};

export default page;
