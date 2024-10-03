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

const page: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");

  useEffect(() => {
    console.log("value: ", value);
  }, [value]);

  return (
    <div className="absolute top-0 flex flex-col w-screen h-screen items-center justify-center">
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
                  ? courses.find((framework) => framework.value === value)
                      ?.label
                  : "Choose golf course..."}
                <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-[250px] p-0">
              <Command>
                <CommandInput placeholder="Search courses..." />
                <CommandList>
                  <CommandEmpty>No framework found.</CommandEmpty>
                  <CommandGroup>
                    {courses.map((framework) => (
                      <CommandItem
                        key={framework.value}
                        value={framework.value}
                        onSelect={(currentValue) => {
                          setValue(currentValue === value ? "" : currentValue);
                          setOpen(false);
                        }}
                      >
                        <Check
                          className={cn(
                            "mr-2 h-4 w-4",
                            value === framework.value
                              ? "opacity-100"
                              : "opacity-0"
                          )}
                        />
                        {framework.label}
                      </CommandItem>
                    ))}
                  </CommandGroup>
                </CommandList>
              </Command>
            </PopoverContent>
          </Popover>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button asChild variant={"outline"}>
            <Link href="/">Cancel</Link>
          </Button>
          <Button className="font-semibold">Next</Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default page;
