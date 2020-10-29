import styled from "styled-components";

import { TitleProps } from "./types";

export const Title = styled.h1<TitleProps>`
  text-align: center;
  padding-top: 5%;
  padding-bottom: 5%;
  color: ${(props) => props.color};
`;
