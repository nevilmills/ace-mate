import { getPostsFrom30DaysAgo } from "@/db/queries/post/select";
import { ExistingUser } from "@/db/schema";
import { calculateHandicapFromPosts } from "@/lib/utils";
import { ArrowDownLeft, ArrowUpRight, FlagTriangleRight } from "lucide-react";
import React from "react";

interface HandicapProps {
  user: ExistingUser;
}

export const Handicap: React.FC<HandicapProps> = ({ user }) => {
  const { handicap } = user;

  const roundToDecimalPlace = (num: number, decimalPlaces: number) => {
    return Number(num.toFixed(decimalPlaces));
  };

  // we want to calculate the difference between the current handicap and handicap from 30 days ago.
  // we will need to first get the handicap from 30 days ago.
  // if the user handicap is null, do not call the function or render the trend
  const calculateHandicapDifference = async () => {
    if (!handicap) return;

    // fetch 20 most recent rounds prior to 30 days ago
    const posts = await getPostsFrom30DaysAgo(user.id);

    // calculate handicap from these posts
    const priorHandicap = calculateHandicapFromPosts(posts);

    // calculate difference from current handicap
    const difference = parseFloat(handicap!) - priorHandicap;

    return roundToDecimalPlace(difference, 1);
  };

  const renderHandicapDifference = async () => {
    const difference = await calculateHandicapDifference(); // can remove this when add proper ui for when handicap is null

    if (!difference) return;
    if (difference > 0) {
      return (
        <div>
          <span className="text-muted-foreground text-xs font-semibold flex items-center ">
            <ArrowUpRight size={"16px"} color="#f97316" className="mr-1" />
            <span className="text-white mr-1">
              +{await calculateHandicapDifference()}
            </span>
            vs previous month
          </span>
        </div>
      );
    } else {
      return (
        <div>
          <span className="text-muted-foreground text-xs font-semibold flex items-center ">
            <ArrowDownLeft size={"16px"} color="#22C55E" className="mr-1" />
            <span className="text-white mr-1">
              {await calculateHandicapDifference()}
            </span>
            vs previous month
          </span>
        </div>
      );
    }
  };
  return (
    <div className="flex flex-col space-y-1">
      <span className="text-xs text-muted-foreground font-semibold">HCP</span>
      <span className="font-bold text-xl">{handicap}</span>
      {renderHandicapDifference()}
    </div>
  );
};
