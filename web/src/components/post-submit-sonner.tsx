"use client";
import React, { useEffect, useRef } from "react";
import { toast } from "sonner";
import { Toaster } from "@/components/ui/sonner";

interface PostSubmitSonnerProps {}

export const PostSubmitSonner: React.FC<PostSubmitSonnerProps> = ({}) => {
  const hasRendered = useRef<boolean>(false);

  useEffect(() => {
    if (hasRendered.current) return;
    toast("Score has been submitted", {
      action: {
        label: "Close",
        onClick: () => null,
      },
      actionButtonStyle: {
        backgroundColor: "#FACC15",
      },
    });
    hasRendered.current = true;
  }, []);

  return <Toaster />;
};
