import { getRoundsPlayedCountsByUser } from "@/db/queries/post/select";
import React from "react";

interface MostPlayedProps {
  userId: string;
}

export const MostPlayed: React.FC<MostPlayedProps> = async ({ userId }) => {
  const data = await getRoundsPlayedCountsByUser(userId);

  console.log("Rounds played: ", data);

  return (
    <div>
      <h3 className="text-2xl font-bold pl-6">Most Played Courses</h3>
      <div className="h-4" />

      <div className="flex flex-col space-y-2">
        {data.map((item) => (
          <div key={item.value} className="flex flex-row justify-between">
            <p>{item.value}</p>
            <p>{item.count}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
