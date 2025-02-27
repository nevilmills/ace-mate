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

export const getLast12Months = () => {
  const months = [];
  const date = new Date(); // Get current date

  for (let i = 0; i < 12; i++) {
    months.unshift({
      month: date.getMonth(), // Zero-based month (0 = Jan, 11 = Dec)
      year: date.getFullYear(),
    });

    // Move back one month
    date.setMonth(date.getMonth() - 1);
  }
  return months;
};

// Format the months array to be displayed in the chart x-axis.
// result will be in ascending order of months.
export const formatMonthsArray = (monthsArray: { month: number }[]) => {
  return monthsArray.map(({ month }) => ({
    month: new Intl.DateTimeFormat("en-US", { month: "short" }).format(
      new Date(2000, month)
    ), // Using a fixed year
  }));
};
