"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import React from "react";
import { Label } from "@/components/ui/label";
import {
  FormLabel,
  FormItem,
  FormControl,
  FormField,
  Form,
  FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import Link from "next/link";
import { SignIn } from "@clerk/nextjs";

const formSchema = z.object({
  username: z
    .string()
    .min(2, { message: "Username must be at least 2 characters." })
    .max(25, { message: "Username must be less than 25 characters." }),
  password: z
    .string()
    .min(3, { message: "Password must be at least 3 characters." })
    .max(25, { message: "Password must be less than 25 characters." }),
});

interface pageProps {}

export const page: React.FC<pageProps> = ({}) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <div className="w-full grow flex justify-center items-center">
      <SignIn />
    </div>
  );
};

export default page;
