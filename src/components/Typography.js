import React, { Component } from "react";
import classNames from "classnames";
import { css } from "emotion";

const heading1 = css`
  font-size: 36px;
  text-weight: 700;
`;

export const Heading = ({ className, children, ...otherProps }) => (
  <h1 className={classNames(heading1, className)} {...otherProps}>
    {children}
  </h1>
);
