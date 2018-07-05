import React from "react";
import { observer, inject } from "mobx-react";
import { css } from "emotion";
import { Wave } from "./wave";
import Box from "../../components/Box";

import Login from "./Login";
import ServerList from "./ServerList";
import LogoWithEffects from "./LogoWithEffects";

const background = css`
  background-image: linear-gradient(90deg, #74ebd5 0%, #7aaeff 100%);

  height: 100%;
  display: flex;
  position: relative;
  z-index: 0;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

// const backgroundLogo = css`
//   background-image: url("/images/logo.svg");
//   opacity: 0.3;
//   ${"" /* mask-image: url("/images/logo.svg") no-repeat 60% 60%; */};
//   background-repeat: no-repeat;
//   background-position: center right;
//   background-size: contain;

//   position: absolute;
//   right: 0;
//   align-self: center;
//   width: 60%;
//   height: 60%;
//   z-index: -1;
// `;

const BoxLogin = css`
  width: 300px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const waveTop = css`
  position: absolute;
  bottom: 100%;
  left: 0;
  width: 100%;
  height: 0px;
  background: white;
`;

const waveBottom = css`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  height: 0px;
  transform: rotate(180deg);
  background: white;
`;
@inject("authentication")
@observer
class HomeScreen extends React.Component {
  render() {
    console.log(this.props.authentication);
    return (
      <div className={background}>
        <div className={waveTop}>
          <Wave />
        </div>
        <LogoWithEffects />
        <h2 style={{ color: "white", margin: "10px 0" }}>
          Welcome to G4M3R{" "}
          <span role="img" aria-label="emoji hello">
            👋
          </span>
        </h2>
        <div className={BoxLogin}>{!this.props.authentication.isLoggedIn ? <Login /> : <ServerList />}</div>
        <div className={waveBottom}>
          <Wave />
        </div>
      </div>
    );
  }
}

export default HomeScreen;
