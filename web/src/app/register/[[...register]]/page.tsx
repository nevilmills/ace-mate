"use client";

import React from "react";
import { SignUp } from "@clerk/nextjs";

interface pageProps {}

export const page: React.FC<pageProps> = ({}) => {
  return (
    <div className="w-full grow flex justify-center items-center">
      <SignUp />
    </div>
  );
};

export default page;
