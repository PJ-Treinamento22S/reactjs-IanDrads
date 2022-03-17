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
  Portrait,
  Text,
  User,
  Username,
} from "./styles";

import Like from "../../assets/images/Heart.svg";
import Favorite from "../../assets/images/Star.svg";
import Delete from "../../assets/images/Trash.svg";

const Feed: React.FC = () => {
  return (
    <Container>
      <Divisor />
      <Pius>
        <Piu>
          <User>
            <Portrait />
            <Username />
          </User>
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
