import { Feed } from "@/components/feed";
import { MostPlayed } from "@/components/most-played";
import { Profile } from "@/components/profile";
import { auth } from "@clerk/nextjs/server";

export default async function Home() {
  const { userId } = auth();

  if (!userId) {
    throw new Error("User not found");
  }

  return (
    <div className="px-12 py-8 flex flex-row justify-evenly ">
      <Feed userId={userId} />
      <div className="flex flex-col space-y-8">
        <div className="h-[24px]" />

        <Profile />
        <MostPlayed userId={userId} />
      </div>
    </div>
  );
}
