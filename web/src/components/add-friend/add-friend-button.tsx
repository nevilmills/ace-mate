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
import { UserCard } from "./user-card";
import { ScrollArea } from "../ui/scroll-area";

interface AddFriendButtonProps {}

export const AddFriendButton: React.FC<AddFriendButtonProps> = ({}) => {
  const [golfers, setGolfers] = useState<any[]>([]);

  const fetchGolfers = async (partialUsername: string) => {
    // if (partialUsername.length < 3) {
    //   setGolfers([]);
    //   return;
    // }
    const data = await getUserSuggestions(partialUsername);
    setGolfers(data);
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
      <DialogContent className="bg-[#0a0a0a] max-w-[900px] h-[600px] p-0 overflow-hidden">
        <ScrollArea className="w-full h-full flex flex-col">
          <div className="flex items-center justify-center h-28 p-8 sticky top-0 bg-card border-b-[1px] border-[rgb(41 37 36)]">
            <Input onChange={handleChange} placeholder="Find golfers" />
          </div>
          <div className="grow p-8 px-16 space-y-4">
            {golfers.length > 0
              ? golfers.map((golfer) => (
                  <UserCard key={golfer.id} data={golfer} />
                ))
              : null}
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};
