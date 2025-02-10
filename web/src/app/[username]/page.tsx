import React from "react";

interface PageProps {
  params: Promise<{ username: string }>;
}

export const Page: React.FC<PageProps> = async ({ params }) => {
  const username = (await params).username;
  return <div>{username}</div>;
};

export default Page;
