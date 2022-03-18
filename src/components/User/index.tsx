import React from "react";
import { Portrait, UserInfo, Username } from "./styles";

interface UserProps {
  username: string;
  photo: string;
}

const User: React.FC<UserProps> = ({ username, photo }) => {
  return (
    <UserInfo>
      <Portrait src={photo} />
      <Username>{username}</Username>
    </UserInfo>
  );
};

export default User;
