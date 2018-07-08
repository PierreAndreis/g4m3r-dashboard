import React from "react";
import { observer, inject } from "mobx-react";
import { css } from "emotion";
import { Wave } from "./wave";

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

const BoxLogin = css`
  max-width: 500px;
  min-height: 200px;
  width: 100%;
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
        <div className={BoxLogin}>
          {!this.props.authentication.isLoggedIn ? <Login /> : <ServerList />}
        </div>
        <div className={waveBottom}>
          <Wave />
        </div>
      </div>
    );
  }
}

export default HomeScreen;
