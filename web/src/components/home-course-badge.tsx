import React from "react";
import { Badge } from "./ui/badge";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ExistingUser } from "@/db/schema";
import { getMostPlayedCourse } from "@/app/actions";

interface HomeCourseBadgeProps {
  user: ExistingUser;
}

export const HomeCourseBadge: React.FC<HomeCourseBadgeProps> = async ({
  user,
}) => {
  // find the most played course of the provided user
  const courseName = await getMostPlayedCourse(user.id);

  if (!courseName) return null;

  return (
    <div>
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
    </div>
  );
};
