"use client";
import React, { useEffect, useState } from "react";
import { SelectCourse } from "./select-course";
import { CourseSelection, PostCreatorMenu } from "@/lib/types";
import { SelectTees } from "./select-tees";
import { SelectDate } from "./select-date";
import { SelectScore } from "./select-score";

interface PostCreatorProps {}

export const PostCreator: React.FC<PostCreatorProps> = ({}) => {
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [course, setCourse] = useState<string>("");
  const [tees, setTees] = useState<string>("");
  const [score, setScore] = useState<number | undefined>(undefined);
  const [currentMenu, setCurrentMenu] = useState<PostCreatorMenu>("date");

  const createPost = async () => {
    console.log({ date, course, tees });
    // need to validate the inputs and submit.
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
          createPost={createPost}
        />
      </div>
    );
  }
};
