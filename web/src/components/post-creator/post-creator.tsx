"use client";
import React, { useEffect, useState } from "react";
import { SelectCourse } from "./select-course";
import { CourseSelection } from "@/lib/types";

interface PostCreatorProps {}

export const PostCreator: React.FC<PostCreatorProps> = ({}) => {
  const [course, setCourse] = useState<CourseSelection>(null);

  useEffect(() => {
    console.log("value: ", course);
  }, [course]);

  return (
    <div>
      <SelectCourse setCourse={setCourse} />
    </div>
  );
};
