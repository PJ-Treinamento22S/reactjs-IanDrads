import React, { useState } from "react";
import User from "../User";
import {
  Card,
  Container,
  Enviar,
  EnviarImg,
  Pesquisa,
  Pesquisar,
  PesquisarImg,
  PesquisarTxt,
  Piar,
  Subtext,
  Text,
} from "./styles";

import Search from "../../assets/images/Search.svg";
import Arrow from "../../assets/images/Send.svg";
import MyPhoto from "../../assets/images/User.svg";
import api from "../../config/api";

const Send: React.FC = () => {
  const [text, setText] = useState("");
  const handleClick = async () => {
    await api.post("/pius", { text: text });
  };
  return (
    <Container>
      <Pesquisa>
        <Pesquisar>
          <PesquisarImg src={Search} />
        </Pesquisar>
        <PesquisarTxt />
      </Pesquisa>
      <Piar>
        <User  username={'Ian_Drades'} photo={MyPhoto}/>
        <Card>
          <Text onChange={(e) => setText(e.target.value)} />
          <Subtext />
          <Enviar onClick={handleClick}>
            <EnviarImg src={Arrow} />
          </Enviar>
        </Card>
      </Piar>
    </Container>
  );
};

export default Send;
