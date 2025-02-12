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

  if (editable) {
    return (
      <Card className="max-w-[380px] w-[380px]">
        <CardHeader className="flex flex-row space-x-4">
          <div className="rounded-full overflow-hidden">
            <Image
              src={imageUrl || ""}
              width={60}
              height={60}
              alt="Profile Picture"
            />
          </div>
          <div className="flex flex-col">
            <span className="">{username}</span>
            <Handicap user={user} />
          </div>
        </CardHeader>
        <CardContent>
          {bio ? (
            <Bio userId={userId} text={bio} />
          ) : (
            <Bio userId={userId} text="No bio provided" />
          )}
        </CardContent>
      </Card>
    );
  } else {
    return (
      <Card className="max-w-[380px] w-[380px]">
        <CardHeader className="flex flex-row space-x-4">
          <div className="rounded-full overflow-hidden">
            <Image
              src={imageUrl || ""}
              width={60}
              height={60}
              alt="Profile Picture"
            />
          </div>
          <div className="flex flex-col">
            <span className="font-semibold">{username}</span>
            <Handicap user={user} />
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">{bio}</p>
        </CardContent>
      </Card>
    );
  }
};
