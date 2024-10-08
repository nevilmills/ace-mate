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
import React, { useEffect, useState } from "react";
import { Check, ChevronsUpDown } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { PostCreatorMenu } from "@/lib/types";

const courses = [
  {
    value: "Chilliwack Golf Club",
    label: "Chilliwack Golf Club",
  },
  {
    value: "Royalwood Golf Course",
    label: "Royalwood Golf Course",
  },
  {
    value: "Cheam Mountain Golf Course",
    label: "Cheam Mountain Golf Course",
  },
  {
    value: "The Falls Golf Club",
    label: "The Falls Golf Club",
  },
  {
    value: "Cultus Lake Golf Club",
    label: "Cultus Lake Golf Club",
  },
  {
    value: "Kinkora Golf Course",
    label: "Kinkora Golf Course",
  },
];

interface SelectCourseProps {
  course: string;
  setCourse: React.Dispatch<React.SetStateAction<string>>;
  setCurrentMenu: React.Dispatch<React.SetStateAction<PostCreatorMenu>>;
}

export const SelectCourse: React.FC<SelectCourseProps> = ({
  course,
  setCourse,
  setCurrentMenu,
}) => {
  const [open, setOpen] = useState(false);

  const handleSubmit = () => {
    if (!course) return;

    setCurrentMenu("tees");
  };

  const handleBackPress = () => {
    setCurrentMenu("date");
  };

  return (
    <Card className="w-96 h-52 flex flex-col justify-between">
      <CardHeader>
        <CardTitle>Select Course</CardTitle>
      </CardHeader>
      <CardContent>
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              role="combobox"
              aria-expanded={open}
              className="w-full justify-between"
            >
              {course
                ? courses.find((courseObj) => courseObj.value === course)?.label
                : "Choose golf course..."}
              <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-[250px] p-0">
            <Command>
              <CommandInput placeholder="Search courses..." />
              <CommandList>
                <CommandEmpty>No course found.</CommandEmpty>
                <CommandGroup>
                  {courses.map((courseObj) => (
                    <CommandItem
                      key={courseObj.value}
                      value={courseObj.value}
                      onSelect={(currentValue) => {
                        setCourse(currentValue === course ? "" : currentValue);
                        setOpen(false);
                      }}
                    >
                      <Check
                        className={cn(
                          "mr-2 h-4 w-4",
                          course === courseObj.value
                            ? "opacity-100"
                            : "opacity-0"
                        )}
                      />
                      {courseObj.label}
                    </CommandItem>
                  ))}
                </CommandGroup>
              </CommandList>
            </Command>
          </PopoverContent>
        </Popover>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant={"outline"} onClick={handleBackPress}>
          Back
        </Button>
        <Button className="font-semibold" onClick={handleSubmit}>
          Next
        </Button>
      </CardFooter>
    </Card>
  );
};
