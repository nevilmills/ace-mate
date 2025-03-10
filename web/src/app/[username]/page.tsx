import { PostHistory } from "@/components/post-history";
import { Profile } from "@/components/profile";
import { getUserByUsername } from "@/db/queries/user/select";
import React from "react";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ username: string }>;
}) {
  const username = (await params).username;

  return {
    title: `${username}'s profile | AceMate`,
    icons: "/images/favicon.ico",
  };
}

interface PageProps {
  params: Promise<{ username: string }>;
}

export default async function Page({ params }: PageProps) {
  const username = (await params).username;
  // find user with this username, if none exist, redirect to 404
  // const { id: userId } = await getUserByUsername(username);
  const user = await getUserByUsername(username);

  if (!user) {
    return <div>User not found</div>;
  }

  return (
    <div className="px-12 py-8 flex flex-row justify-center space-x-28">
      <PostHistory user={user} />
      <div className="flex flex-col space-y-8">
        <div className="h-[24px]" />
        <Profile editable={false} userId={user.id} />
      </div>
    </div>
  );
}
