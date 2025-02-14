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
import { PostCreatorMenu } from "@/lib/types";
import { Input } from "../ui/input";

interface SelectScoreProps {
  score: number | undefined;
  setScore: React.Dispatch<React.SetStateAction<number | undefined>>;
  setCurrentMenu: React.Dispatch<React.SetStateAction<PostCreatorMenu>>;
  createPost: () => void;
}

export const SelectScore: React.FC<SelectScoreProps> = ({
  score,
  setScore,
  setCurrentMenu,
  createPost,
}) => {
  const handleSubmit = () => {
    if (!score) return;

    createPost();
  };

  const handleBackPress = () => {
    setCurrentMenu("tees");
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setScore(value ? parseInt(value, 10) : undefined);
  };

  return (
    <Card className="min-w-96 min-h-52 flex flex-col justify-between">
      <CardHeader>
        <CardTitle>Enter Score</CardTitle>
      </CardHeader>
      <CardContent>
        <Input
          type="number"
          min={0}
          max={100}
          step={1}
          value={score}
          onChange={handleChange}
        />
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant={"outline"} onClick={handleBackPress}>
          Back
        </Button>
        <Button asChild className="font-semibold" onClick={handleSubmit}>
          <Link href="/?postSubmit=true">Post Score</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};
