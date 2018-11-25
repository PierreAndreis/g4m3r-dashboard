import React, { Component } from "react";

import { AlertBoxIcon } from "mdi-react";
import { css, cx } from "emotion";

import Button from "./Button";

const inputWrapper = css`
  width: 100%;
  box-sizing: border-box;
  height: 40px;
  position: relative;
  box-sizing: border-box;
  display: flex;
`;

const iconIn = css`
  position: absolute;
  width: 25px;
  height: 25px;
  top: 50%;
  margin-top: -12px;
  font-size: 25px;
`;

const labelIn = css`
  position: relative;
  height: 100%;
  & > button {
    cursor: normal !important;
    border-radius: 0 5px 5px 0 !important;
  }
`;

const input = css`
  width: 100%;
  height: 100%;
  background: #eaeaea;
  border-radius: 5px;
  outline: 0;
  border: 2px solid transparent;
  padding: 2px 10px;
  box-sizing: border-box;
  &:focus {
    background: white;
    border-color: #7aaeff;
    ${"" /* border-color: #83e0d7; */};
    box-shadow: 0 0 0 0.2rem rgba(122, 174, 255, 0.15);
  }
`;

const hasIconLeft = css`
  padding-left: 30px;
`;

const asButton = css`
  cursor: pointer;
  color: black;
`;

const errorInput = css`
  border: 2px solid red;
`;

const errorHighlight = css`
  position: absolute;
  display: none;
  bottom: 1px;
  left: 10px;
  color: red;
  font-size: 12px;
`;

class Input extends Component {
  onChange = e => {
    typeof this.props.onChange === "function" && this.props.onChange(e);
  };

  render() {
    const {
      className,
      icon,
      onChange,
      value,
      mutate,
      errorMessage,
      buttonMode,
      disabled,
      onClick,
      label,
      ...other
    } = this.props;

    let icons = [];
    if (errorMessage) {
      icons.push(
        <div key="right-icon" className={iconIn} style={{ right: 5 }}>
          <AlertBoxIcon color="red" size="25px" />
        </div>
      );
    }

    if (!errorMessage && icon && icon.left) {
      icons.push(
        <div key="left-icon" className={iconIn} style={{ left: 5 }}>
          <icon.left color="grey" size="25px" />
        </div>
      );
    }

    if (!errorMessage && icon && icon.right) {
      icons.push(
        <div key="right-icon" className={iconIn} style={{ right: 5 }}>
          <icon.right color="grey" size="25px" />
        </div>
      );
    }

    return (
      <div className={inputWrapper} onClick={() => buttonMode && onClick()}>
        <div style={{ position: "relative", width: "100%" }}>
          <input
            className={cx(input, {
              [errorInput]: errorMessage,
              [asButton]: buttonMode,
              [hasIconLeft]: icon && icon.left,
            })}
            value={value || ""}
            onChange={this.onChange}
            disabled={disabled || buttonMode}
            {...other}
          />
          {icons}
        </div>
        {label && (
          <div key="right-label" className={labelIn}>
            <Button disabled style={{ height: "100%", borderRadius: 0 }}>
              {label}
            </Button>
          </div>
        )}

        {errorMessage ? <div className={errorHighlight}>{errorMessage}</div> : null}
      </div>
    );
  }
}

export default Input;
