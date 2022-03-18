import React, { useState } from "react";
import User from "../User";
import {
  Card,
  Container,
  Interaction,
  InteractionImg,
  Interactions,
  Likes,
  Text,
} from "./styles";

import Like from "../../assets/images/Heart.svg";
import LikeChosen from "../../assets/images/Heart-chosen.svg";
import Favorite from "../../assets/images/Star.svg";
import Delete from "../../assets/images/Trash.svg";
import * as Interfaces from "../../interfaces/interfaces";

const Piu: React.FC<Interfaces.Piu> = ({ user, text, likes }) => {
  const [vlike, setVlike] = useState(false);
  const handleClick = () => {
    if (vlike == false) {
      setVlike(true);
      likes.length++;
    } else {
      setVlike(false);
      likes.length--;
    }
  };
  const LikeSrc = vlike ? LikeChosen : Like;
  return (
    <Container>
      <User username={user.username} photo={user.photo} />
      <Card>
        <Text>{text}</Text>
        <Interactions>
          <Interaction onClick={handleClick}>
            <InteractionImg src={LikeSrc} />
            <Likes>{likes.length}</Likes>
          </Interaction>
          <Interaction>
            <InteractionImg src={Favorite} />
          </Interaction>
          <Interaction>
            <InteractionImg src={Delete} />
          </Interaction>
        </Interactions>
      </Card>
    </Container>
  );
};

export default Piu;
