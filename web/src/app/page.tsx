import { Feed } from "@/components/feed";
import { MostPlayed } from "@/components/most-played";
import { auth } from "@clerk/nextjs/server";

export default async function Home() {
  const { userId } = auth();

  if (!userId) {
    throw new Error("User not found");
  }

  return (
    <div className="px-12 py-8 flex flex-row justify-center">
      <MostPlayed userId={userId} />
      <Feed userId={userId} />
    </div>
  );
}
