"use client";
import React, { useEffect, useState } from "react";
import { Person } from "./person";
import { AddFriendButton } from "./add-friend/add-friend-button";
import { ExistingUser } from "@/db/schema";

interface FriendsListProps {
  userId: string;
  friends: ExistingUser[];
}

export const FriendsList: React.FC<FriendsListProps> = ({
  userId,
  friends: initialFriends,
}) => {
  const [friends, setFriends] = useState<ExistingUser[]>(initialFriends);
  const [visibleFriends, setVisibleFriends] = useState<ExistingUser[]>([]);
  const [friendsShown, setFriendsShown] = useState<number>(3);

  useEffect(() => {
    setVisibleFriends(friends.slice(0, 3)); // Show only 3 friends initially
  }, []);

  // this will need to be changed when we implement the show more functionality
  // when show more is pressed and we are showing more than 3 friends, this will be resetting it to 3.
  // that may be okay.
  // trigger a re-render when friends are updated
  useEffect(() => {
    setVisibleFriends(friends.slice(0, friendsShown));
  }, [friends]);

  const showMoreFriends = () => {
    if (friendsShown >= friends.length) {
      return;
    }
    setFriendsShown(friendsShown + 3);
    setVisibleFriends(friends.slice(0, friendsShown + 3));
  };

  return (
    <div className="flex flex-col w-72">
      <h3 className="text-2xl font-bold">Friends</h3>
      <div className="h-8" />
      {friends.length > 0 && (
        <>
          <div className="flex justify-between">
            <span className="text-md font-semibold text-muted-foreground">
              ({friends.length})
            </span>
          </div>
          <div className="h-8" />
        </>
      )}

      <div className="flex flex-col space-y-4">
        {friends.length > 0 ? (
          visibleFriends.map((friend) => (
            <Person key={friend.id} user={friend} />
          ))
        ) : (
          <>
            <span className="font-semibold text-muted-foreground">
              No friends currently added.
            </span>
            <p className="text-muted-foreground">
              Use the button below to find and add a friend!
            </p>
          </>
        )}
      </div>
      <div className="h-8" />
      {friends.length >= 3 && friendsShown < friends.length && (
        <>
          <button
            className="font-bold underline text-muted-foreground hover:cursor-pointer self-start"
            onClick={showMoreFriends}
          >
            Show more
          </button>
          <div className="h-8" />
        </>
      )}
      <div>
        <AddFriendButton
          friends={friends}
          setFriends={setFriends}
          loggedInUser={userId}
        />
      </div>
    </div>
  );
};
