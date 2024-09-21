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
import { Label } from "@/components/ui/label";

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
        <CardContent className="">
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name" className="font-semibold">
                Username
              </Label>
              <Input
                id="name"
                type="text"
                placeholder="Tiger Woods"
                className="w-full"
              />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="password" className="font-semibold">
                Password
              </Label>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                className="w-full"
              />
            </div>
          </div>
          <div className="h-3" />
          <div className="flex w-full justify-end text-sm text-primary">
            <div>
              <a className="underline hover:cursor-pointer">Forgot Password?</a>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex flex-col">
          <Button className="w-full font-bold">Login</Button>
          <div className="h-6" />
          <div className="flex w-full justify-center text-sm font-semibold">
            <div>Don't have an account?</div>
            <a className="text-primary underline ml-1 hover:cursor-pointer">
              Sign up here
            </a>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default page;
