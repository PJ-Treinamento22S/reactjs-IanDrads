import React from "react";
import { Portrait, UserInfo, Username } from "./styles";

const User: React.FC = () => {
  return (
    <UserInfo>
      <Portrait />
      <Username />
    </UserInfo>
  );
};

export default User;
