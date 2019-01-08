import React from "react";
import { observer, inject } from "mobx-react";
import { css } from "emotion";
import { Wave } from "./wave";

import Login from "./Login";
import ServerList from "./ServerList";
import LogoWithEffects from "./LogoWithEffects";

const background = css`
  background-image: linear-gradient(90deg, #74ebd5 0%, #7aaeff 100%);
  box-sizing: border-box;
  width: 100%;
  height: auto;
  min-height: 100%;
  padding-top: 150px;
  display: flex;
  flex-direction: column;
  position: absolute;
  align-items: center;
  @media screen and (max-width: 500px) {
    padding-top: 60px;
  }
`;

const BoxLogin = css`
  width: 100%;
  max-width: 500px;

  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const waveTop = css`
  position: absolute;
  bottom: 100%;
  left: 0;
  width: 100%;
  height: 0px;
  background: white;
`;

// const waveBottom = css`
//   position: absolute;
//   top: 100%;
//   left: 0;
//   width: 100%;
//   height: 0px;
//   transform: rotate(180deg);
//   background: white;
// `;
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
        {/* <div className={waveBottom}>
          <Wave />
        </div> */}
      </div>
    );
  }
}

export default HomeScreen;
