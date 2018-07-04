import React from "react";

import "./global/normalize.css";
import Login from "./modules/Login";
import { css } from "emotion";

const Container = css`
  width: 100%;
  height: 100%;
`;

export default class App extends React.Component {
  render() {
    return (
      <div className={Container}>
        <Login />
      </div>
    );
  }
}
