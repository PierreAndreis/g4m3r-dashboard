import React, { Component } from "react";
import Sidebar from "./Sidebar";
import { css } from "emotion";

const layout = css`
  display: grid;
  grid-template-columns: [sidebar] 250px [content] 1fr;

  height: 100%;
`;

export default class Layout extends Component {
  render() {
    return (
      <div className={layout}>
        <Sidebar />
        <div style={{ backgroundColor: "#F8F8FD", padding: "15px", overflowX: "auto" }}>
          {this.props.children}
        </div>
      </div>
    );
  }
}
