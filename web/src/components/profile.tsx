import { user } from "@/db/schema";
import React from "react";
import { Card, CardHeader, CardContent } from "./ui/card";
import { currentUser } from "@clerk/nextjs/server";
import Image from "next/image";

interface ProfileProps {}

export const Profile: React.FC<ProfileProps> = async ({}) => {
  const user = await currentUser();

  return (
    <Card className="max-w-[380px]">
      <CardHeader className="flex flex-row space-x-4">
        <div className="rounded-full overflow-hidden">
          <Image
            src={user?.imageUrl || ""}
            width={60}
            height={60}
            alt="Profile Picture"
          />
        </div>
        <div className="flex flex-col">
          <span className="font-semibold">{user?.username}</span>
          <span className="text-sm text-muted-foreground">HCP: 9.8</span>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </CardContent>
    </Card>
  );
};
