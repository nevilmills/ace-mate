import Image from "next/image";
import React from "react";

interface PersonProps {
  user: {
    username: string;
    id: string;
    createdAt: Date;
    handicap: string | null;
    imageUrl: string;
  };
}

export const Person: React.FC<PersonProps> = ({ user }) => {
  return (
    <div className="flex space-x-4 h-16 items-center ">
      <div className="w-14 h-14 rounded-full">
        <Image
          src={user.imageUrl || ""}
          width={56}
          height={56}
          alt="Profile Picture"
        />
      </div>
      <div className="flex flex-col">
        <span className="font-bold">{user.username}</span>
        <span className="text-sm font-semibold text-muted-foreground">
          Chilliwack Golf Club
        </span>
      </div>
    </div>
  );
};
