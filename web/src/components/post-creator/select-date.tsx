"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import React from "react";
import { Calendar } from "../ui/calendar";
import { PostCreatorMenu } from "@/lib/types";

interface SelectDateProps {
  date: Date | undefined;
  setDate: React.Dispatch<React.SetStateAction<Date | undefined>>;
  setCurrentMenu: React.Dispatch<React.SetStateAction<PostCreatorMenu>>;
}

export const SelectDate: React.FC<SelectDateProps> = ({
  date,
  setDate,
  setCurrentMenu,
}) => {
  const handleSubmit = () => {
    if (!date) return;

    setCurrentMenu("course");
  };

  return (
    <Card className="min-w-96 min-h-52 flex flex-col justify-between">
      <CardHeader>
        <CardTitle>Select Date</CardTitle>
      </CardHeader>
      <CardContent>
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          className="rounded-md border"
        />
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button asChild variant={"outline"}>
          <Link href="/">Cancel</Link>
        </Button>
        <Button className="font-semibold" onClick={handleSubmit}>
          Next
        </Button>
      </CardFooter>
    </Card>
  );
};
