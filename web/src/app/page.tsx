import { SignedIn, SignOutButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div>
      <h1>Home</h1>
      <SignedIn>
        <SignOutButton />
      </SignedIn>
    </div>
  );
}
