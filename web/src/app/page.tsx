import { Feed } from "@/components/feed";
import { FriendsList } from "@/components/friends-list";
import { Profile } from "@/components/profile";
import { auth } from "@clerk/nextjs/server";
import { fetchUsersFriends } from "./actions";
import { StatisticsButton } from "@/components/statistics-button";

export const Home = async ({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) => {
  const { userId } = await auth();

  if (!userId) {
    throw new Error("User not found");
  }

  const friends = await fetchUsersFriends(userId);

  return (
    <div className="px-12 py-8 flex flex-row justify-evenly">
      <FriendsList userId={userId} friends={friends} />
      <Feed userId={userId} friends={friends} searchParams={searchParams} />
      <div className="flex flex-col space-y-8">
        <div className="h-[24px]" />
        <Profile editable={true} userId={userId} />
        <StatisticsButton />
      </div>
    </div>
  );
};

export default Home;
