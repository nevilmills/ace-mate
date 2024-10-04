import { SignedIn, UserButton, SignedOut, SignInButton } from "@clerk/nextjs";
import React from "react";

interface NavBarProps {}

export const NavBar: React.FC<NavBarProps> = ({}) => {
  return (
    <header className="p-4 px-12 text-primary fixed w-screen h-[68px] z-10">
      <nav className="flex flex-row justify-between">
        <div>
          <a href="/" className="text-lg font-bold">
            Golf Companion
          </a>
        </div>
        <div>
          <SignedIn>
            <UserButton />
          </SignedIn>
          <SignedOut>
            <SignInButton />
          </SignedOut>
        </div>
      </nav>
    </header>
  );
};
