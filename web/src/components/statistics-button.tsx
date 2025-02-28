"use client";
import React from "react";
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";
import { Button } from "./ui/button";
import {
  ChartColumnIncreasing,
  ChartNoAxesColumnIncreasing,
} from "lucide-react";
import { StatisticsDialogue } from "./statistics-dialogue";

interface StatisticsButtonProps {
  userId: string;
}

export const StatisticsButton: React.FC<StatisticsButtonProps> = ({
  userId,
}) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="font-bold w-1/3">
          View stats <ChartNoAxesColumnIncreasing size={16} className="ml-1" />
        </Button>
      </DialogTrigger>
      <StatisticsDialogue userId={userId} />
    </Dialog>
  );
};
