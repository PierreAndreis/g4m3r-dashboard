import React, { Component } from "react";
import classNames from "classnames";
import { css } from "emotion";

const heading1 = css`
  font-size: 36px;
  text-weight: 700;
  color: #4a4a4a;
  margin: 10px 0px;
`;

const heading2 = css`
  font-size: 18px;
  text-weight: 700;
  color: #4a4a4a;
  margin: 10px 0px;
`;

const subheader = css`
  font-size: 16px;
  font-spacing: 1px;
  text-weight: 400;
  color: #9ca5bc;
  margin: 5px 0px;
`;

export const Heading = ({ className, children, ...otherProps }) => (
  <h1 className={classNames(heading1, className)} {...otherProps}>
    {children}
  </h1>
);

export const Heading2 = ({ className, children, ...otherProps }) => (
  <h2 className={classNames(heading2, className)} {...otherProps}>
    {children}
  </h2>
);

export const SubHeader = ({ className, children, ...otherProps }) => (
  <h3 className={classNames(subheader, className)} {...otherProps}>
    {children}
  </h3>
);
