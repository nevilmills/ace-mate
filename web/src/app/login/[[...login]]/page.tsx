"use client";

import { SignIn } from "@clerk/nextjs";
import React from "react";

export default function Page() {
  return (
    <div className="w-full grow flex justify-center items-center">
      <SignIn />
    </div>
  );
}
