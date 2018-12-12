import React, { Component } from "react";
import { css } from "emotion";
import classNames from "classnames";

export const BoxBase = css`
  background: white;
  width: 350px;
  height: auto;
  box-shadow: 0 10px 40px 0 rgba(0, 0, 0, 0.1);
  border-radius: 3px;
  box-sizing: border-box;
  margin: 5px;
  position: relative;
`;

const BoxCenter = css`
  margin: 0 auto;
  align-self: center;
  justify-self: center;
`;

export const BoxPadding = css`
  padding: 15px 0;
`;

const BoxTitle = css`
  display: flex;
  font-size: 18px;
  color: #4a4a4a;
  margin: 0 10px 10px;
`;

const BoxBody = css`
  width: 100%;
  box-sizing: border-box;

  .${BoxPadding} & {
    & > div {
      padding: 5px 15px;
    }
  }
`;

const BoxBodyPadding = css`
  padding: 5px 15px;
`;

const BoxOption = css`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  padding: 20px;
  & > div:nth-child(1) {
    flex: 1.3;
    margin: 10px 0;
  }

  &:nth-child(even) {
    background: rgba(0, 0, 0, 0.03);
  }
`;

export default class Box extends Component {
  static Title = ({ children, className, ...otherProps }) => (
    <h2 className={classNames(BoxTitle, className)} {...otherProps}>
      {children}
    </h2>
  );

  static Body = ({ children, className, padding, ...otherProps }) => (
    <div
      className={classNames(BoxBody, { [BoxBodyPadding]: padding }, className)}
      {...otherProps}
    >
      {children}
    </div>
  );

  static Option = ({ children, className, ...otherProps }) => {
    React.Children.forEach(children, child => {
      if (child.type !== "div")
        throw new Error("Box.Option only accepts div as children!");
    });

    return (
      <div className={classNames(BoxOption, className)} {...otherProps}>
        {children}
      </div>
    );
  };

  render() {
    const { className, center, padding, children, ...otherProps } = this.props;

    let classNameToUse = classNames(BoxBase, {
      [BoxCenter]: center,
      [BoxPadding]: padding,
      [this.props.className]: !!className,
    });

    return (
      <div className={classNameToUse} {...otherProps}>
        {children}
      </div>
    );
  }
}
