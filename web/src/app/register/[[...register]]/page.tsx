"use client";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import React from "react";
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
import { createUser } from "@/db/queries/user/insert";
import { SignUp } from "@clerk/nextjs";

const formSchema = z.object({
  username: z
    .string()
    .min(2, { message: "Username must be at least 2 characters." })
    .max(25, { message: "Username must be less than 25 characters." }),

  email: z.string().email({ message: "Please enter a valid email address." }),
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
      email: "",
      password: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    console.log(values);

    await createUser(values);
  };

  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <SignUp />
    </div>
  );
};

export default page;
