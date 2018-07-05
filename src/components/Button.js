import React, { Component } from "react";
import { css } from "emotion";
import classNames from "classnames";

const ButtonBase = css`
  background: transparent;
  padding: 2px 15px;
  border-radius: 17px;
  border: 1px solid grey;
  font-size: 14px;
  color: #4a4a4a;
  transition: all 300ms;
  outline: 0;
  text-transform: uppercase;
`;

const BoxBig = css`
  padding: 7px 20px;
`;

const BoxHover = css`
  cursor: pointer;
  &:hover {
    border: 1px solid transparent;
    background-color: #74ebd5;
    color: white;
  }
  &:focus {
    opacity: 0.7;
  }
`;

const BoxActive = css`
  background-image: linear-gradient(90deg, #74ebd5 0%, #7aaeff 100%);
`;

export default class Button extends Component {
  render() {
    const { className, active, big, ...propsToInject } = this.props;

    let mixedClassName = classNames(ButtonBase, {
      [BoxBig]: big,
      [BoxHover]: !!this.props.onClick,
      [BoxActive]: !!active,
      [this.props.className]: !!this.props.className,
    });

    return (
      <button className={mixedClassName} {...propsToInject}>
        {this.props.children}
      </button>
    );
  }
}
