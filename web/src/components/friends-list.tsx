import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Person } from "./person";

interface FriendsListProps {}

export const FriendsList: React.FC<FriendsListProps> = ({}) => {
  return (
    <div className="flex flex-col w-72">
      <h3 className="text-2xl font-bold">People</h3>
      <div className="h-8" />
      <div>
        <span className="text-sm font-semibold text-muted-foreground">
          ONLINE (23)
        </span>
      </div>
      <div className="h-8" />
      <div className="flex flex-col space-y-4">
        <Person username="bob1" />
        <Person username="billy" />
        <Person username="mark" />
      </div>
      <div className="h-8" />
      <span className="font-bold underline text-muted-foreground hover:cursor-pointer">
        Show more
      </span>
    </div>
  );
};
