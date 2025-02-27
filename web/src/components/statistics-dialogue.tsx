"use client";
import React, { useEffect, useState } from "react";
import { DialogContent } from "./ui/dialog";
import {
  ChartContainer,
  ChartConfig,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";
import { Button } from "./ui/button";
import { formatMonthsArray, getLast12Months } from "@/lib/utils";
interface StatisticsDialogueProps {}

const config = {
  desktop: {
    label: "Desktop",
    color: "#2563eb",
  },
  mobile: {
    label: "Mobile",
    color: "#60a5fa",
  },
} satisfies ChartConfig;

const chartData = [
  { month: "Jan 2, 2024", desktop: 186, mobile: 80 },
  { date: "Jan 14", month: "Jan 14, 2024", desktop: 100, mobile: 25 },
  { month: "Jan 28, 2024", desktop: 150, mobile: 150 },
  { month: "February", desktop: 305, mobile: 200 },
  { month: "March", desktop: 237, mobile: 120 },
  { month: "April", desktop: 73, mobile: 190 },
  { month: "May", desktop: 209, mobile: 130 },
  { month: "June", desktop: 214, mobile: 140 },
];

export const StatisticsDialogue: React.FC<StatisticsDialogueProps> = ({}) => {
  const [data, setData] = useState<{ month: string }[]>([]);
  useEffect(() => {
    const loadData = async () => {
      const months = getLast12Months();
      const formattedMonths = formatMonthsArray(months);
      setData(formattedMonths);
      console.log(formattedMonths);
    };
    loadData();
  }, []);

  return (
    <DialogContent className="bg-[#0a0a0a] max-w-[900px] h-[600px] overflow-hidden flex flex-row items-center justify-center">
      <ChartContainer config={config} className="min-h-[200px] w-3/4">
        <BarChart accessibilityLayer data={chartData}>
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey="date"
            tickLine={false}
            tickMargin={10}
            axisLine={false}
            // tickFormatter={(value) => value.slice(0, 3)}
          />
          <ChartTooltip content={<ChartTooltipContent />} />
          <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
          <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
        </BarChart>
      </ChartContainer>
      <Button onClick={() => getLast12Months()}>months</Button>
    </DialogContent>
  );
};
