import { css } from "emotion";

export const container = css`
  position: relative;
  display: flex;
  flex-direction: column;
  background-image: linear-gradient(0deg, #7aaeff 0%, #74e1eb 100%);
  &:after {
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
  }
`;

export const logoContainer = css`
  margin: 80px 0;
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
  width: 100px;
  height: 100px;
  border-radius: 100%;
`;

export const menu = css`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  & > a {
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
  height: 80px;
  margin-bottom: 15px;
  position: relative;
  z-index: 2;
  display: flex;
`;
