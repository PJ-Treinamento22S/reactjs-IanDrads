import React from "react";
import {
  Card,
  Container,
  Divisor,
  Interaction,
  InteractionImg,
  Interactions,
  Likes,
  Piu,
  Pius,
  Text,
} from "./styles";

import Like from "../../assets/images/Heart.svg";
import Favorite from "../../assets/images/Star.svg";
import Delete from "../../assets/images/Trash.svg";
import User from "../User";

const Feed: React.FC = () => {
  return (
    <Container>
      <Divisor />
      <Pius>
        <Piu>
          <User />
          <Card>
            <Text />
            <Interactions>
              <Interaction>
                <InteractionImg src={Like} />
                <Likes />
              </Interaction>
              <Interaction>
                <InteractionImg src={Favorite} />
              </Interaction>
              <Interaction>
                <InteractionImg src={Delete} />
              </Interaction>
            </Interactions>
          </Card>
        </Piu>
      </Pius>
      <Divisor />
    </Container>
  );
};

export default Feed;
