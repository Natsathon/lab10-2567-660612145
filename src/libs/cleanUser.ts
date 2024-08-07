import { UserCardProps } from "./types";

export const cleanUser = (user: any): UserCardProps => {
  return {
    name: `${user.name.first} ${user.name.last}`,
    email: user.email,
    imgUrl: user.picture.large,
    address: `${user.location.city}, ${user.location.state}`,
  };
};