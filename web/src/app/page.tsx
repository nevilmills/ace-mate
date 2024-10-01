import { SignedIn, SignOutButton } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs/server";

export default async function Home() {
  const user = await currentUser();

  return (
    <div>
      <h1>Welcome to your feed, {user?.username}.</h1>
    </div>
  );
}
