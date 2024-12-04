import React from "react";

interface PersonProps {
  username: string;
}

export const Person: React.FC<PersonProps> = ({ username }) => {
  return (
    <div className="flex space-x-4 h-16 items-center ">
      <div className="w-14 h-14 bg-muted-foreground rounded-full" />
      <div className="flex flex-col">
        <span className="font-bold">{username}</span>
        <span className="text-sm font-semibold text-muted-foreground">
          Chilliwack Golf Club
        </span>
      </div>
    </div>
  );
};
