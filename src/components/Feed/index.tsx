import React, { useEffect, useState } from "react";
import { Container, Divisor, Pius } from "./styles";

import User from "../User";
import { appendFile } from "fs";
import api from "../../config/api";
import Piu from "../Piu";
import * as Interfaces from "../../interfaces/interfaces";

const Feed: React.FC = () => {
  const [pius, setPius] = useState<Interfaces.Piu[]>([] as Interfaces.Piu[]);
  useEffect(() => {
    async function getData() {
      const response = await api.get("/pius");
      setPius(response.data);
    }
    getData();
    console.log(pius);
  }, []);
  return (
    <Container>
      <Divisor />
      <Pius>
        {pius.map((piu) => {
          return <Piu key={piu.id} {...piu} />;
        })}
      </Pius>
      <Divisor />
    </Container>
  );
};

export default Feed;
