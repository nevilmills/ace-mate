import { getRoundsPlayedCountsByUser } from "@/db/queries/post/select";
import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "./ui/card";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";

interface MostPlayedProps {
  userId: string;
}

export const MostPlayed: React.FC<MostPlayedProps> = async ({ userId }) => {
  const data = await getRoundsPlayedCountsByUser(userId);

  console.log("Rounds played: ", data);

  return (
    <div>
      <h3 className="text-2xl font-bold pl-6">Most Played Courses</h3>
      <div className="h-4" />

      <Card className="min-w-[320px] flex items-center justify-center">
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow className="justify-between">
                <TableHead className="w-[175px]">Golf Course</TableHead>
                <TableHead className="text-right">Rounds Played</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {data.map((item) => (
                <TableRow>
                  <TableCell className="font-medium">{item.value}</TableCell>
                  <TableCell className="text-right">{item.count}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};
