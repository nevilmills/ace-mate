"use client";
import React, { useEffect, useState } from "react";
import { SelectCourse } from "./select-course";
import { CourseSelection, PostCreatorMenu } from "@/lib/types";
import { SelectTees } from "./select-tees";
import { SelectDate } from "./select-date";

interface PostCreatorProps {}

export const PostCreator: React.FC<PostCreatorProps> = ({}) => {
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [course, setCourse] = useState<string>("");
  const [tees, setTees] = useState<string>("");
  const [currentMenu, setCurrentMenu] = useState<PostCreatorMenu>("date");

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
  } else
    return (
      <div>
        <SelectTees
          tees={tees}
          setTees={setTees}
          setCurrentMenu={setCurrentMenu}
        />
      </div>
    );
};
