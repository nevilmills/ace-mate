import React from "react";

interface StaticBioProps {
  bio: string | null;
}

export const StaticBio: React.FC<StaticBioProps> = ({ bio }) => {
  if (!bio) {
    return (
      <div>
        <p className="text-muted-foreground italic">Bio not set.</p>
      </div>
    );
  }

  return (
    <div>
      <p className="text-muted-foreground">{bio}</p>
    </div>
  );
};
