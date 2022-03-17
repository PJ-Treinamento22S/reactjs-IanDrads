import React from "react";
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

const Send: React.FC = () => {
  return (
    <Container>
      <Pesquisa>
        <Pesquisar>
          <PesquisarImg src={Search} />
        </Pesquisar>
        <PesquisarTxt />
      </Pesquisa>
      <Piar>
        <User />
        <Card>
          <Text />
          <Subtext />
          <Enviar>
            <EnviarImg src={Arrow} />
          </Enviar>
        </Card>
      </Piar>
    </Container>
  );
};

export default Send;
