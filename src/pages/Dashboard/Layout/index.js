import React, { Component } from "react";
import Sidebar from "./Sidebar";
import { css } from "emotion";

const layout = css`
  display: grid;
  grid-template-columns: [sidebar] 250px [content] 1fr;

  height: 100%;
`;

const content = css`
  background-color: #f8f8fd;
  padding: 5% 30px 0;
  overflowx: auto;
  & > section {
    margin: 20px 0;
  }
`;

export default class Layout extends Component {
  render() {
    return (
      <div className={layout}>
        <Sidebar />
        <div className={content}>{this.props.children}</div>
      </div>
    );
  }
}
