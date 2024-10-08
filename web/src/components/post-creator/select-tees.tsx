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

interface SelectTeesProps {
  tees: string;
  setTees: React.Dispatch<React.SetStateAction<string>>;
  setCurrentMenu: React.Dispatch<React.SetStateAction<PostCreatorMenu>>;
}

const teeBoxes = [
  {
    value: "Gold",
    label: "Gold",
  },
  {
    value: "Blue",
    label: "Blue",
  },
  {
    value: "White",
    label: "White",
  },
  {
    value: "Green",
    label: "Green",
  },
  {
    value: "Red",
    label: "Red",
  },
];

export const SelectTees: React.FC<SelectTeesProps> = ({
  tees,
  setTees,
  setCurrentMenu,
}) => {
  const [open, setOpen] = useState(false);

  const handleSubmit = () => {
    if (!tees) return;
  };

  const handleBackPress = () => {
    setCurrentMenu("course");
  };

  return (
    <Card className="w-96 h-52 flex flex-col justify-between">
      <CardHeader>
        <CardTitle>Select Tees</CardTitle>
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
              {tees
                ? teeBoxes.find((teeBox) => teeBox.value === tees)?.label
                : "Choose tees..."}
              <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-[250px] p-0">
            <Command>
              <CommandInput placeholder="Search tees..." />
              <CommandList>
                <CommandEmpty>No tees found.</CommandEmpty>
                <CommandGroup>
                  {teeBoxes.map((teeBox) => (
                    <CommandItem
                      key={teeBox.value}
                      value={teeBox.value}
                      onSelect={(currentValue) => {
                        setTees(currentValue === tees ? "" : currentValue);
                        setOpen(false);
                      }}
                    >
                      <Check
                        className={cn(
                          "mr-2 h-4 w-4",
                          tees === teeBox.value ? "opacity-100" : "opacity-0"
                        )}
                      />
                      {teeBox.label}
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
