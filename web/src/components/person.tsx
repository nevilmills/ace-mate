"use client";
import { getMostPlayedCourse } from "@/app/actions";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";

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
  const [courseName, setCourseName] = React.useState<string | undefined>(
    undefined
  );

  useEffect(() => {
    const getCourseName = async () => {
      const name = await getMostPlayedCourse(user.id);
      setCourseName(name);
    };
    getCourseName();
  }, []);

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
        <Link className="font-bold" href={`/${user.username}`}>
          {user.username}
        </Link>
        {courseName && (
          <span className="text-sm font-semibold text-muted-foreground">
            {courseName}
          </span>
        )}
      </div>
    </div>
  );
};
