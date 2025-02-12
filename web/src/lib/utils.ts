import { ExistingPost, GolfCourse } from "@/db/schema";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const calculateHandicapFromPosts = (
  posts: { post: ExistingPost; golf_course: GolfCourse }[]
) => {
  // get lowest 8 scores.
  const topScores = posts
    .map((item) => item.post.score - item.golf_course.par)
    .sort((a, b) => a - b)
    .slice(0, 8);

  // calculate average of these scores.
  const sum = topScores.reduce((acc, score) => acc + score, 0);
  const average = sum / topScores.length;
  return average;
};
