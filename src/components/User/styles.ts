import styled from "styled-components";

import "../../assets/styles/global.css";

export const UserInfo = styled.div`
  width: 34.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Portrait = styled.img`
  width: 5.5rem;
  height: 5.5rem;
  object-fit: cover;
  border-radius: 50%;
  border: solid 0.2rem var(--primary-dark);
`;

export const Username = styled.h1`
  width: 28rem;
`;
