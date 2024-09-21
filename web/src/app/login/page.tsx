import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import React from "react";

interface pageProps {}

export const page: React.FC<pageProps> = ({}) => {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Login</CardTitle>
          <CardDescription>
            Your latest golf statistics await...
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <Input type="text" placeholder="Username" className="w-full" />
            <Input type="password" placeholder="Password" className="w-full" />
          </div>
        </CardContent>
        <CardFooter>
          <Button className="w-full">Login</Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default page;
