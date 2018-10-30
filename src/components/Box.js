import React, { Component } from "react";
import { css } from "emotion";
import classNames from "classnames";

const BoxBase = css`
  background: white;
  ${"" /* border-radius: 15px; */};
  width: 350px;
  ${"" /* box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 30px; */};
  ${"" /* box-shadow: 0 4px 9px -3px rgba(102, 136, 153, 0.15); */};
  box-shadow: 0 10px 40px 0 rgba(0, 0, 0, 0.1);
  border-radius: 3px;
  box-sizing: border-box;
  margin: 5px;
`;

const BoxCenter = css`
  margin: 0 auto;
  align-self: center;
  justify-self: center;
`;

const BoxPadding = css`
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

  .${BoxTitle} {
    margin: 0;
  }

  .${BoxPadding} & {
    & > div {
      padding: 5px 15px;
    }
  }
`;

const BoxOption = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;

  &:nth-child(odd) {
    background: rgba(0, 0, 0, 0.03);
  }
`;

export default class Box extends Component {
  static Title = ({ children, className, ...otherProps }) => (
    <h2 className={classNames(BoxTitle, className)} {...otherProps}>
      {children}
    </h2>
  );

  static Body = ({ children, className, ...otherProps }) => (
    <div className={classNames(BoxBody, className)} {...otherProps}>
      {children}
    </div>
  );

  static Option = ({ children, className, ...otherProps }) => (
    <div className={classNames(BoxOption, className)} {...otherProps}>
      {children}
    </div>
  );

  render() {
    const { className, center, padding, children, ...otherProps } = this.props;

    let classNameToUse = classNames(BoxBase, {
      [this.props.className]: !!className,
      [BoxCenter]: center,
      [BoxPadding]: padding,
    });

    return (
      <div className={classNameToUse} {...otherProps}>
        {children}
      </div>
    );
  }
}
