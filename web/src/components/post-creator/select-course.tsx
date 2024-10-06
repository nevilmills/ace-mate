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
import { CourseSelection, PostCreatorMenu } from "@/lib/types";

interface SelectCourseProps {
  setCourse: React.Dispatch<React.SetStateAction<CourseSelection>>;
  setCurrentMenu: React.Dispatch<React.SetStateAction<PostCreatorMenu>>;
}

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

export const SelectCourse: React.FC<SelectCourseProps> = ({
  setCourse,
  setCurrentMenu,
}) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState<CourseSelection>(null);

  const handleSubmit = () => {
    if (!value) return;

    setCourse(value);
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
              {value
                ? courses.find((course) => course.value === value)?.label
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
                  {courses.map((course) => (
                    <CommandItem
                      key={course.value}
                      value={course.value}
                      onSelect={(currentValue) => {
                        setValue(currentValue === value ? "" : currentValue);
                        setOpen(false);
                      }}
                    >
                      <Check
                        className={cn(
                          "mr-2 h-4 w-4",
                          value === course.value ? "opacity-100" : "opacity-0"
                        )}
                      />
                      {course.label}
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
          Cancel
        </Button>
        <Button className="font-semibold" onClick={handleSubmit}>
          Next
        </Button>
      </CardFooter>
    </Card>
  );
};
