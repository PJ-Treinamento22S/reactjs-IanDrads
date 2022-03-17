import styled from "styled-components";

import "../../assets/styles/global.css";

export const Container = styled.div`
  width: 21.75rem;
  height: 41.5rem;
  margin-left: 0.75rem;
  margin-top: 5.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Pesquisa = styled.div`
  width: 21.375rem;
  height: 5.5rem;
  padding-left: 1.5rem;
  border-radius: 2rem;
  background: var(--secondary-light);
  display: flex;
  align-items: center;
`;

export const Pesquisar = styled.button``;

export const PesquisarImg = styled.img``;

export const PesquisarTxt = styled.input`
  margin-left: 2rem;
  width: 12rem;
`;

export const Piar = styled.div``;

export const Card = styled.div`
  width: 19rem;
  height: 25rem;
  margin-left: 2.75rem;
  background: var(--secondary);
  border-radius: 3rem;
`;

export const Text = styled.textarea`
  width: 13.5rem;
  height: 18rem;
  margin-left: 2.75rem;
  margin-top: 2rem;
`;

export const Subtext = styled.p`
  display: flex;
`;

export const Enviar = styled.button``;

export const EnviarImg = styled.img`
  width: 4rem;
  height: 4rem;
  margin-left: 14.5rem;
`;
