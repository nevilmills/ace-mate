import React from "react";
import { Badge } from "./ui/badge";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ExistingUser } from "@/db/schema";
import { getMostPlayedCourseId } from "@/db/queries/post/select";
import { getGolfCourseById } from "@/db/queries/golf-course/select";

interface HomeCourseBadgeProps {
  user: ExistingUser;
}

export const HomeCourseBadge: React.FC<HomeCourseBadgeProps> = async ({
  user,
}) => {
  // find the most played course of the provided user
  const getMostPlayedCourse = async () => {
    const golfCourseId = await getMostPlayedCourseId(user.id);
    if (!golfCourseId) return;
    const golfCourse = await getGolfCourseById(golfCourseId.golfCourseId);
    return golfCourse?.name;
  };

  const courseName = await getMostPlayedCourse();

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>
          <Badge className="bg-muted-foreground hover:bg-muted-foreground">
            {courseName}
          </Badge>
        </TooltipTrigger>
        <TooltipContent>
          <p>Most played course</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};
