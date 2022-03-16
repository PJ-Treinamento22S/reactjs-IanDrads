import React from "react";
import { Container, Logo, Menu, Option, Options } from "./styles";

import HomeChosen from "../../assets/images/Home-chosen.svg";
import Emblem from "../../assets/images/Logo.svg";
import Profile from "../../assets/images/Profile.svg";

const Header: React.FC = () => {
  return (
    <Container>
      <Menu>
        <Logo src={Emblem} />
        <Options>
          <Option src={HomeChosen} />
          <Option src={Profile} />
        </Options>
      </Menu>
    </Container>
  );
};

export default Header;
