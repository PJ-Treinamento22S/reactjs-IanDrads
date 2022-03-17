import styled from "styled-components";

import "../../assets/styles/global.css";

export const Container = styled.div`
  margin-left: 4.75rem;
  display: flex;
`;

export const Divisor = styled.div`
  width: 4px;
  height: 100%;
  margin-left: 1.5rem;
  margin-right: 1.5rem;
  background-color: var(--primary-light);
`;

export const Pius = styled.section`
  width: 36.25rem;
  display: flex;
  margin-top: 5.5rem;
  flex-direction: column;
`;

export const Piu = styled.div`
  margin-bottom: 3rem;
`;

export const Card = styled.div`
  width: 33.25rem;
  height: 21rem;
  margin-left: 2.75rem;
  background: var(--primary-light-linear);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  border-radius: 3rem;
`;

export const Text = styled.p`
  width: 28rem;
  height: 11.5rem;
`;

export const Interactions = styled.div`
  width: 28rem;
  display: flex;
  justify-content: space-between;
`;

export const Interaction = styled.button`
  display: flex;
  align-items: center;
`;

export const InteractionImg = styled.img``;

export const Likes = styled.h3``;
