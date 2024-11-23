import Chart from "@/components/chart";
import React from "react";

interface pageProps {}

export const page: React.FC<pageProps> = ({}) => {
  return (
    <div className="grow items-center justify-center flex">
      <div className="flex flex-col w-full h-full">
        <Chart />
        <div className="h-4" />
        <span>yo</span>
      </div>
    </div>
  );
};

export default page;
