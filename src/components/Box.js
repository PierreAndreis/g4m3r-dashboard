import React, { Component } from "react";
import { css } from "emotion";
import classNames from "classnames";

const BoxBase = css`
  background: white;
  ${"" /* border-radius: 15px; */};
  width: 350px;
  ${"" /* box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 30px; */};
  box-shadow: 0 4px 9px -3px rgba(102, 136, 153, 0.15);
  border-radius: 3px;
  box-sizing: border-box;
`;

const BoxCenter = css`
  margin: 0 auto;
  align-self: center;
  justify-self: center;
`;

export default class Box extends Component {
  render() {
    let className = classNames(BoxBase, {
      [this.props.className]: !!this.props.className,
      [BoxCenter]: this.props.center,
    });

    return <div className={className}>{this.props.children}</div>;
  }
}
