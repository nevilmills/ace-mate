import React from "react";
import { Card } from "../ui/card";
import Image from "next/image";
import { Button } from "../ui/button";
import { ExistingUser } from "@/db/schema";
import { useAuth } from "@clerk/nextjs";
import { createUserFriend } from "@/db/queries/user_friends/insert";
import { deleteUserFriend } from "@/db/queries/user_friends/delete";

interface UserCardProps {
  user: ExistingUser;
  added?: boolean;
  handleAddFriend: (friendId: string) => void;
  handleUnfriend: (friendId: string) => void;
}

export const UserCard: React.FC<UserCardProps> = ({
  user,
  added,
  handleAddFriend,
  handleUnfriend,
}) => {
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
        {!added ? (
          <Button
            size="lg"
            className="font-bold text-lg"
            onClick={() => handleAddFriend(user.id)}
          >
            Add
          </Button>
        ) : (
          <Button
            size="lg"
            className="font-bold text-lg"
            onClick={() => handleUnfriend(user.id)}
          >
            Un-friend
          </Button>
        )}
      </div>
    </Card>
  );
};
