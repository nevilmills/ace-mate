"use client";
import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { useAuth } from "@clerk/nextjs";
import { addFriend, areUsersFriends, removeFriend } from "@/app/actions";

interface AddFriendBtnProps {
  friendId: string;
}

export const AddFriendBtn: React.FC<AddFriendBtnProps> = ({ friendId }) => {
  const { userId } = useAuth();
  const [userIsAFriend, setUserIsAFriend] = useState<boolean>(false);

  useEffect(() => {
    // check if user is already a friend
    const checkFriendshipStatus = async () => {
      console.log("user id: ", userId);
      const areFriends = await areUsersFriends(userId!, friendId);
      console.log("areFriends", areFriends);
      if (areFriends) {
        setUserIsAFriend(true);
      }
    };

    checkFriendshipStatus();
  }, [userId]);

  const handleAddFriend = async () => {
    addFriend(userId!, friendId);
    setUserIsAFriend(true);
  };

  const handleUnfriend = async () => {
    removeFriend(userId!, friendId);
    setUserIsAFriend(false);
  };

  if (!userIsAFriend) {
    return (
      <Button onClick={handleAddFriend} size={"sm"}>
        Add friend
      </Button>
    );
  } else {
    return (
      <Button onClick={handleUnfriend} size={"sm"}>
        Unfriend
      </Button>
    );
  }
};
