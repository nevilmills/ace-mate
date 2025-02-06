"use client";
import React, { useEffect, useState } from "react";
import { Person } from "./person";
import { AddFriendButton } from "./add-friend/add-friend-button";
import { getUsersFriends } from "@/db/queries/user_friends/select";
import { getUsersByIds } from "@/db/queries/user/select";
import { fetchUsersFriends } from "@/app/actions";
import { ExistingUser } from "@/db/schema";

interface FriendsListProps {
  userId: string;
}

export const FriendsList: React.FC<FriendsListProps> = ({ userId }) => {
  const [friends, setFriends] = useState<ExistingUser[]>([]);

  useEffect(() => {
    const fetchFriends = async () => {
      const friends = await fetchUsersFriends(userId);
      setFriends(friends);
    };
    fetchFriends();
  }, []);

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
          friends.map((friend) => <Person key={friend.id} user={friend} />)
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
      {friends.length >= 3 && (
        <>
          <span className="font-bold underline text-muted-foreground hover:cursor-pointer">
            Show more
          </span>
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
