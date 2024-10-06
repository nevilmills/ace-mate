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
import React, { useState } from "react";
import { Calendar } from "../ui/calendar";
import { PostCreatorMenu } from "@/lib/types";

interface SelectDateProps {
  setDate: React.Dispatch<React.SetStateAction<Date | undefined>>;
  setCurrentMenu: React.Dispatch<React.SetStateAction<PostCreatorMenu>>;
}

export const SelectDate: React.FC<SelectDateProps> = ({
  setDate,
  setCurrentMenu,
}) => {
  const [value, setValue] = useState<Date | undefined>(new Date());

  const handleSubmit = () => {
    if (!value) return;

    setDate(value);
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
          selected={value}
          onSelect={setValue}
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
