"use client";

import React from "react";
import { SignUp } from "@clerk/nextjs";

export default function Page({}) {
  return (
    <div className="w-full grow flex justify-center items-center">
      <SignUp />
    </div>
  );
}
