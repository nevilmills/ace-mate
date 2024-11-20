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
import { GolfCourse } from "@/db/schema";

interface SelectCourseProps {
  golfCourses: GolfCourse[];
  course: GolfCourse | undefined;
  setCourse: React.Dispatch<React.SetStateAction<GolfCourse | undefined>>;
  setCurrentMenu: React.Dispatch<React.SetStateAction<PostCreatorMenu>>;
}

export const SelectCourse: React.FC<SelectCourseProps> = ({
  golfCourses,
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
                ? golfCourses.find(
                    (golfCourse) => golfCourse.name === course.name
                  )?.name
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
                  {golfCourses.map((golfCourse) => (
                    <CommandItem
                      key={golfCourse.name}
                      value={golfCourse.name}
                      onSelect={(currentValue) => {
                        setCourse(
                          currentValue === course?.name ? undefined : golfCourse
                        );
                        setOpen(false);
                      }}
                    >
                      <Check
                        className={cn(
                          "mr-2 h-4 w-4",
                          course?.name === golfCourse.name
                            ? "opacity-100"
                            : "opacity-0"
                        )}
                      />
                      {golfCourse.name}
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
