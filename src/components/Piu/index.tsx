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
import Fav from "../../assets/images/Star.svg";
import FavChosen from "../../assets/images/Star-chosen.svg";
import Delete from "../../assets/images/Trash.svg";
import * as Interfaces from "../../interfaces/interfaces";
import api from "../../config/api";

const Piu: React.FC<Interfaces.Piu> = ({ id, user, text, likes }) => {
  const [vlike, setVlike] = useState(false);
  const [vfav, setVfav] = useState(false);
  const handleClickLike = () => {
    if (vlike == false) {
      setVlike(true);
      likes.length++;
    } else {
      setVlike(false);
      likes.length--;
    }
  };
  const handleClickFavorite = () => {
    if (vfav == false) {
      setVfav(true);
    } else {
      setVfav(false);
    }
  };
  const handleClickDelete = async () => {
    await api.delete("/pius", { data: { piu_id: id } });
  };
  const LikeSrc = vlike ? LikeChosen : Like;
  const FavSrc = vfav ? FavChosen : Fav;
  return (
    <Container>
      <User username={user.username} photo={user.photo} />
      <Card>
        <Text>{text}</Text>
        <Interactions>
          <Interaction onClick={handleClickLike}>
            <InteractionImg src={LikeSrc} />
            <Likes>{likes.length}</Likes>
          </Interaction>
          <Interaction onClick={handleClickFavorite}>
            <InteractionImg src={FavSrc} />
          </Interaction>
          <Interaction onClick={handleClickDelete}>
            <InteractionImg src={Delete} />
          </Interaction>
        </Interactions>
      </Card>
    </Container>
  );
};

export default Piu;
