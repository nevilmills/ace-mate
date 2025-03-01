import { ExistingPost, GolfCourse } from "@/db/schema";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { format } from "date-fns";

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

export const addXAxisLabels = (
  posts: { date: Date; differenceFromPar: number }[]
) => {
  if (posts.length === 0) return [];

  // Sort by date (Date objects can be compared directly)
  const sortedPosts = posts.sort((a, b) => a.date.getTime() - b.date.getTime());
  const totalPosts = sortedPosts.length;

  // Select 9 evenly spaced indices
  const labelIndices = Array.from({ length: 6 }, (_, i) =>
    Math.round((i * (totalPosts - 1)) / 5)
  );

  // Add labels to the selected indices
  return sortedPosts.map((post, index) => {
    if (labelIndices.includes(index)) {
      return {
        ...post,
        label: format(post.date, "MMM d"),
      };
    } else {
      return post;
    }
  });
};
