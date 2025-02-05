"use client";
import React, { useCallback, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { getUserAutocompletion } from "@/db/queries/user/select";
import { UserCard } from "./user-card";
import { ScrollArea } from "../ui/scroll-area";
import { useAuth } from "@clerk/nextjs";
import { ExistingUser } from "@/db/schema";
import { FlagTriangleRight } from "lucide-react";
import { createUserFriend } from "@/db/queries/user_friends/insert";
import { deleteUserFriend } from "@/db/queries/user_friends/delete";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

interface AddFriendButtonProps {
  friendsMap: Record<string, boolean>;
  loggedInUser: string;
}

export const AddFriendButton: React.FC<AddFriendButtonProps> = ({
  friendsMap,
  loggedInUser,
}) => {
  const [golfers, setGolfers] = useState<ExistingUser[]>([]);
  const [friends, setFriends] = useState<Record<string, boolean>>(friendsMap);

  const fetchGolfers = async (partialUsername: string) => {
    if (partialUsername.length < 3) {
      setGolfers([]);
      return;
    }
    const data = await getUserAutocompletion(partialUsername, loggedInUser!);
    setGolfers(data);
  };

  const debounce = (fn: Function, ms = 300) => {
    let timeoutId: ReturnType<typeof setTimeout>;
    return function (this: any, ...args: any[]) {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => fn.apply(this, args), ms);
    };
  };

  const debouncedFetchGolfers = useCallback(debounce(fetchGolfers), []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    debouncedFetchGolfers(e.target.value);
  };

  const handleAddFriend = (friendId: string) => {
    createUserFriend(loggedInUser!, friendId);
    createUserFriend(friendId, loggedInUser!);
    setFriends((prevFriends) => ({ ...prevFriends, [friendId]: true }));
  };

  const handleUnfriend = (friendId: string) => {
    deleteUserFriend(loggedInUser!, friendId);
    deleteUserFriend(friendId, loggedInUser!);
    setFriends((prevFriends) => ({ ...prevFriends, [friendId]: false }));
  };

  return (
    <Dialog onOpenChange={(isOpen) => !isOpen && setGolfers([])}>
      <DialogTrigger asChild>
        <Button size="sm" className="font-bold">
          + Add friend
        </Button>
      </DialogTrigger>
      <DialogContent
        className="bg-[#0a0a0a] max-w-[900px] h-[600px] p-0 overflow-hidden"
        aria-describedby={undefined}
      >
        <VisuallyHidden>
          <DialogTitle>Search for golfers</DialogTitle>
        </VisuallyHidden>
        <div className="flex items-center justify-center h-28 p-8 sticky top-0 bg-card border-b-[1px] border-[rgb(41 37 36)]">
          <Input onChange={handleChange} placeholder="Find golfers" />
        </div>
        {golfers.length > 0 ? (
          <ScrollArea className="w-full h-full flex flex-col">
            <div className="grow p-8 px-16 space-y-4">
              {golfers.map((golfer) => {
                if (friends[golfer.id])
                  return (
                    <UserCard
                      key={golfer.id}
                      user={golfer}
                      added={true}
                      handleAddFriend={handleAddFriend}
                      handleUnfriend={handleUnfriend}
                    />
                  );
                return (
                  <UserCard
                    key={golfer.id}
                    user={golfer}
                    handleAddFriend={handleAddFriend}
                    handleUnfriend={handleUnfriend}
                  />
                );
              })}
            </div>
          </ScrollArea>
        ) : (
          <div className="w-full flex flex-col items-center mb-4 text-muted-foreground space-y-2">
            <FlagTriangleRight />
            <span>Search here for fellow golfers</span>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};
