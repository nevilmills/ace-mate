import React from "react";
import { Card } from "../ui/card";
import Image from "next/image";
import { Button } from "../ui/button";
import { ExistingUser } from "@/db/schema";
import { useAuth } from "@clerk/nextjs";
import { createUserFriend } from "@/db/queries/user_friends/insert";

interface UserCardProps {
  user: ExistingUser;
}

export const UserCard: React.FC<UserCardProps> = ({ user }) => {
  const { userId } = useAuth();
  console.log(user.imageUrl);

  /**
   * Once you've fetched the users list of friends in a parent component,
   * put code here to check if the current user is already a friend.
   * If they are, show a different button.
   */

  return (
    <Card className="h-32 flex p-4 px-8 items-center">
      <div className="rounded-full overflow-hidden flex items-center justify-center h-[90px] w-[90px]">
        <Image
          src={user.imageUrl || ""}
          width={90}
          height={90}
          alt="Profile Picture"
        />
      </div>
      <div className="w-8" />
      <span className="font-semibold text-lg text-muted-foreground">
        {user.username}
      </span>
      <div className="w-8" />
      <div className="grow flex justify-end">
        <Button
          size="lg"
          className="font-bold text-lg"
          onClick={() => {
            createUserFriend(userId!, user.id);
            createUserFriend(user.id, userId!);
          }}
        >
          Add
        </Button>
      </div>
    </Card>
  );
};
