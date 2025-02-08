"use client";
import React, { useState } from "react";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";
import { updateUserBio } from "@/db/queries/user/update";

interface BioProps {
  text: string;
  userId: string;
}

export const Bio: React.FC<BioProps> = ({ text, userId }) => {
  const [editing, setEditing] = useState(false);
  const [newText, setNewText] = useState(text);

  const handleCancel = () => {
    setEditing(!editing);
    setNewText(text);
  };

  const handleSave = () => {
    setEditing(!editing);
    updateUserBio(userId, newText);
  };

  return (
    <div>
      {editing ? (
        <div>
          <Textarea
            value={newText}
            onChange={(e) => setNewText(e.target.value)}
            placeholder="Tell us about yourself"
            className="text-muted-foreground text-[16px] resize-none"
          />
        </div>
      ) : (
        <p className="text-muted-foreground">{newText}</p>
      )}
      <div className="h-4" />
      {editing ? (
        <div>
          <Button
            onClick={handleCancel}
            size={"sm"}
            className="mr-2"
            variant={"destructive"}
          >
            Cancel
          </Button>
          <Button
            onClick={handleSave}
            size={"sm"}
            className="bg-green-700 text-white"
          >
            Save
          </Button>
        </div>
      ) : (
        <Button
          onClick={() => setEditing(!editing)}
          size={"sm"}
          className="self-end font-semibold"
        >
          Edit
        </Button>
      )}
    </div>
  );
};
