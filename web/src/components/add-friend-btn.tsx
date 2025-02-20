"use client";
import React from "react";
import { Button } from "./ui/button";

interface AddFriendBtnProps {
  userId: string;
}

export const AddFriendBtn: React.FC<AddFriendBtnProps> = ({ userId }) => {
  return <Button size={"sm"}>Add friend</Button>;
};
