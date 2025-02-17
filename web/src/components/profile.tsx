import React from "react";
import { Card, CardHeader, CardContent } from "./ui/card";
import Image from "next/image";
import { getUserById } from "@/db/queries/user/select";
import { Bio } from "./bio";
import { Handicap } from "./handicap";

interface ProfileProps {
  userId: string;
  editable: boolean;
}

export const Profile: React.FC<ProfileProps> = async ({ userId, editable }) => {
  const user = await getUserById(userId);
  const { username, imageUrl, handicap, bio } = user;

  return (
    <Card className="max-w-[380px] w-[380px]">
      <CardHeader className="">
        <div className="flex flex-row space-x-4">
          <div className="rounded-full overflow-hidden">
            <Image
              src={imageUrl || ""}
              width={60}
              height={60}
              alt="Profile Picture"
            />
          </div>
          <div className="flex flex-row items-center space-x-6">
            <span className="font-semibold">{username}</span>
            <div className="h-10 w-[1px] bg-muted-foreground" />
            <Handicap user={user} />
          </div>
        </div>
      </CardHeader>
      <CardContent>
        {editable ? (
          bio ? (
            <Bio userId={userId} text={bio} />
          ) : (
            <Bio userId={userId} text="No bio provided" />
          )
        ) : (
          <p className="text-muted-foreground">{bio}</p>
        )}
      </CardContent>
    </Card>
  );
};
