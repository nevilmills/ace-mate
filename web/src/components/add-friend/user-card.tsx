import React from "react";
import { Card } from "../ui/card";
import Image from "next/image";
import { Button } from "../ui/button";

interface UserCardProps {
  data: any;
}

export const UserCard: React.FC<UserCardProps> = ({ data }) => {
  return (
    <Card className="h-32 flex p-4 px-8 items-center">
      <div className="rounded-full overflow-hidden flex items-center justify-center bg-blue-400 h-[90px] w-[90px]">
        <Image
          src={data.imageUrl || ""}
          width={90}
          height={90}
          alt="Profile Picture"
        />
      </div>
      <div className="w-8" />
      <span className="font-semibold text-lg text-muted-foreground">
        {data.username}
      </span>
      <div className="w-8" />
      <div className="grow flex justify-end">
        <Button size="lg" className="font-bold text-lg">
          Add
        </Button>
      </div>
    </Card>
  );
};
