import React from "react";
import styled, { keyframes } from "styled-components";
import { Home } from "./Icons";

const Animation = keyframes`
  0%{
    opacity:0
  }
  50%{
    opacity:1
  }
  100%{
    opacity:0
  }
`;

const Load = styled.div`
  animation: ${Animation} 1s linear infinite;
`;

export default () => (
  <Load>
    <Home size={36} />
  </Load>
);
