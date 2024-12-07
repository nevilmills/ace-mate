"use client";
import React, { useCallback, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Search } from "lucide-react";
import { getUserSuggestions } from "@/db/queries/user/select";

interface AddFriendButtonProps {}

export const AddFriendButton: React.FC<AddFriendButtonProps> = ({}) => {
  const fetchGolfers = async (partialUsername: string) => {
    const golfers = await getUserSuggestions(partialUsername);
    console.log("golfers: ", golfers);
  };

  const debounce = (fn: Function, ms = 300) => {
    let timeoutId: ReturnType<typeof setTimeout>;
    return function (this: any, ...args: any[]) {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => fn.apply(this, args), ms);
    };
  };

  const debouncedFetchGolfers = useCallback(debounce(fetchGolfers), []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    debouncedFetchGolfers(e.target.value);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size="sm" className="font-bold">
          + Add friend
        </Button>
      </DialogTrigger>
      <DialogContent className="bg-card max-w-[900px] h-[600px] p-0 overflow-hidden">
        <div className="w-full h-full flex flex-col">
          <div className="flex items-center justify-center h-28 p-8">
            <Input onChange={handleChange} placeholder="Find golfers" />
          </div>
          <div className="bg-[#0a0a0a] grow"></div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
