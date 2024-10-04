"use client";
import React, { useEffect, useState } from "react";
import { SelectCourse } from "./select-course";
import { CourseSelection } from "@/lib/types";
import { SelectTees } from "./select-tees";

interface PostCreatorProps {}

export const PostCreator: React.FC<PostCreatorProps> = ({}) => {
  const [course, setCourse] = useState<CourseSelection>(null);
  const [tees, setTees] = useState<string | null>(null);

  useEffect(() => {
    console.log("value: ", course);
  }, [course]);

  if (!course) {
    return (
      <div>
        <SelectCourse setCourse={setCourse} />
      </div>
    );
  }

  return (
    <div>
      <SelectTees setTees={setTees} />
    </div>
  );
};
