"use client";
import React, { useState } from "react";
import { SelectCourse } from "./select-course";
import { PostCreatorMenu } from "@/lib/types";
import { SelectTees } from "./select-tees";
import { SelectDate } from "./select-date";
import { SelectScore } from "./select-score";
import { useAuth } from "@clerk/nextjs";
import { GolfCourse } from "@/db/schema";

interface PostCreatorProps {
  golfCourses: GolfCourse[];
}

export const PostCreator: React.FC<PostCreatorProps> = ({ golfCourses }) => {
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [course, setCourse] = useState<string | undefined>(undefined);
  const [tees, setTees] = useState<string>("");
  const [score, setScore] = useState<number | undefined>(undefined);
  const [currentMenu, setCurrentMenu] = useState<PostCreatorMenu>("date");

  const submitPost = async () => {
    console.log({ date, course, tees, score });
    // need to validate the inputs and submit.

    const { userId } = useAuth();
    if (!userId) throw new Error("User not found");

    // create the post
    // createPost({userId, date: date!, golfCourseId: course.id, score: score!, tees});
  };

  if (currentMenu === "date") {
    return (
      <div>
        <SelectDate
          date={date}
          setDate={setDate}
          setCurrentMenu={setCurrentMenu}
        />
      </div>
    );
  } else if (currentMenu === "course") {
    return (
      <div>
        <SelectCourse
          golfCourses={golfCourses}
          course={course}
          setCourse={setCourse}
          setCurrentMenu={setCurrentMenu}
        />
      </div>
    );
  } else if (currentMenu === "tees")
    return (
      <div>
        <SelectTees
          tees={tees}
          setTees={setTees}
          setCurrentMenu={setCurrentMenu}
        />
      </div>
    );
  else {
    return (
      <div>
        <SelectScore
          score={score}
          setScore={setScore}
          setCurrentMenu={setCurrentMenu}
          createPost={submitPost}
        />
      </div>
    );
  }
};
