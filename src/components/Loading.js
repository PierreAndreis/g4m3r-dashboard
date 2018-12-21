import React from "react";
import { css } from "emotion";

const loading = css`
  &:after {
    border-radius: 50%;
    width: 100%;
    height: 100%;
  }
  margin: 20px auto;
  font-size: 10px;
  position: relative;
  text-indent: -9999em;
  border: 8px solid rgba(106, 223, 213, 0.3);
  border-left: 8px solid rgba(106, 223, 213, 1);
  transform: translateZ(0);
  animation: rotating 1.2s infinite linear;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  position: relative;
  @-webkit-keyframes rotating {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  @keyframes rotating {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export default () => {
  return <div className={loading} />;
};
