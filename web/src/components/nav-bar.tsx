import { SignedIn, UserButton, SignedOut, SignInButton } from "@clerk/nextjs";
import Image from "next/image";
import React from "react";

interface NavBarProps {}

export const NavBar: React.FC<NavBarProps> = ({}) => {
  return (
    <header className="p-4 px-16 text-primary fixed w-screen h-[92px] z-10 flex items-center">
      <nav className="flex flex-row justify-between items-center grow">
        <div className="flex space-x-4 items-center">
          <div className="h-[50px] w-[50px] rounded-lg overflow-hidden">
            <Image src="/images/2nd.png" width={50} height={50} alt="Logo" />
          </div>

          <a href="/" className="text-xl font-bold">
            Golf Companion
          </a>
        </div>
        <div>
          <SignedIn>
            <UserButton
              showName
              appearance={{
                elements: {
                  userButtonAvatarBox: "h-8 w-8",
                },
              }}
            />
          </SignedIn>
          <SignedOut>
            <SignInButton />
          </SignedOut>
        </div>
      </nav>
    </header>
  );
};
