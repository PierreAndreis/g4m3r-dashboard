import React, { Component } from "react";

import { AlertBoxIcon } from "mdi-react";
import { css, cx } from "emotion";

const inputWrapper = css`
  width: 100%;
  height: 40px;
  position: relative;
  box-sizing: border-box;
`;

const iconIn = css`
  position: absolute;
  width: 25px;
  height: 25px;
  top: 50%;
  margin-top: -13px;
  font-size: 25px;
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

const asButton = css`
  cursor: pointer;
  color: black;
`;

const errorInput = css`
  border: 2px solid red;
`;

const errorHighlight = css`
  position: absolute;
  bottom: -15px;
  left: 5;
  color: red;
  font-size: 0.9rem;
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

    if (!errorMessage && icon && icon.right) {
      icons.push(
        <div key="right-icon" className={iconIn} style={{ right: 5 }}>
          <icon.right color="grey" size="25px" />
        </div>
      );
    }

    return (
      <div className={inputWrapper} onClick={() => buttonMode && onClick()}>
        <input
          className={cx(input, { [errorInput]: errorMessage, [asButton]: buttonMode })}
          value={value || ""}
          onChange={this.onChange}
          disabled={disabled || buttonMode}
          {...other}
        />
        {icons}

        {errorMessage ? <div className={errorHighlight}>{errorMessage}</div> : null}
      </div>
    );
  }
}

export default Input;
