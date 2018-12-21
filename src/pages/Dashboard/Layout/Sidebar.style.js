import { css } from "emotion";
import { mq } from "../../../util/breakpoints";

export const container = css`
  position: relative;
  display: flex;
  flex-direction: column;
  background-image: linear-gradient(
    0deg,
    hsl(217, 100%, 74%) 0%,
    hsl(205, 100%, 74%) 100%
  );
  overflow: hidden;
  width: 250px;

  &:before {
    content: "";
    display: block;
    position: absolute;
    background: url("/images/gamer_logo_bg_two.png");
    background-size: 350px;
    background-repeat: no-repeat;
    width: 220px;
    height: 350px;
    bottom: 0;
    left: 30px;
    pointer-events: none;
  }

  ${mq.large(
    css`
      height: 100%;
      position: absolute;
      top: 0;
      &:before {
        width: 100%;
        left: 0px;
      }
    `
  )};
`;

export const logoContainer = css`
  margin: 80px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  align-self: center;

  & > h3 {
    margin: 5px;
    font-size: 21px;
    color: white;
    text-align: center;
  }
`;

export const logo = css`
  background-image: url("/images/logo.svg");
  background-size: 70%;
  background-position: center center;
  background-repeat: no-repeat;
  background-color: white;
  width: 68px;
  height: 68px;
  border-radius: 100%;
`;

export const menu = css`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  & a {
    flex-grow: 0;
    flex-shrink: 0;
    padding: 10px;
    width: 180px;
    height: 20px;
    font-size: 18px;
    color: white;
    margin: 5px 0;
    border-radius: 8px;
    font-weight: 700;
    display: flex;
    align-items: center;
    cursor: pointer;
    transition: all 300ms;
    &.active {
      background: rgba(255, 255, 255, 0.1);
    }
    & > svg {
      margin-right: 10px;
    }
    &:hover {
      background: rgba(255, 255, 255, 0.3);
    }
    &:active {
      background: rgba(255, 255, 255, 0.2);
    }
  }
`;

export const guildSelector = css`
  width: 100%;
  margin-bottom: 15px;
  position: relative;
`;

export const showSideBar = css`
  transform: translateX(0%);
`;
