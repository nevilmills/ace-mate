"use client";
import React, { useEffect, useState } from "react";
import { SelectCourse } from "./select-course";
import { CourseSelection, PostCreatorMenu } from "@/lib/types";
import { SelectTees } from "./select-tees";
import { SelectDate } from "./select-date";

interface PostCreatorProps {}

export const PostCreator: React.FC<PostCreatorProps> = ({}) => {
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [course, setCourse] = useState<CourseSelection>(null);
  const [tees, setTees] = useState<string | null>(null);
  const [currentMenu, setCurrentMenu] = useState<PostCreatorMenu>("date");

  if (currentMenu === "date") {
    return (
      <div>
        <SelectDate setDate={setDate} setCurrentMenu={setCurrentMenu} />
      </div>
    );
  } else if (currentMenu === "course") {
    return (
      <div>
        <SelectCourse setCourse={setCourse} setCurrentMenu={setCurrentMenu} />
      </div>
    );
  } else
    return (
      <div>
        <SelectTees setTees={setTees} setCurrentMenu={setCurrentMenu} />
      </div>
    );
};
