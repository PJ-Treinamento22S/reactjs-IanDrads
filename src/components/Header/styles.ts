import styled from "styled-components";

import "../../assets/styles/global.css";

export const Container = styled.div`
  width: 6rem;
  height: 46.5rem;
  margin-left: 7rem;
  background-color: var(--secondary-light);
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 0 0 3rem 3rem;
`;

export const Menu = styled.div`
  height: 29.5rem;
  width: 4.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled.img`
  width: 4.5rem;
  height: 4.5rem;
  margin-top: 1.5rem;
`;

export const Options = styled.div`
  height: 15rem;
  width: 7rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const Option = styled.img`
  width: 4.5rem;
  height: 4.5rem;
`;
