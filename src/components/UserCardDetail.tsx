"use client";

import { IconMailForward, IconMapPins } from "@tabler/icons-react";

interface UserCardDetailProps {
  email: string;
  address: string;
}

const UserCardDetail: React.FC<UserCardDetailProps> = ({ email, address }) => {
  return (
    <div className="text-center">
      <p>
        <IconMailForward /> {email}
      </p>
      <p>
        <IconMapPins /> {address}
      </p>
    </div>
  );
};

export default UserCardDetail;