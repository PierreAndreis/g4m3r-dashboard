import React, { Component } from "react";
import { inject, observer } from "mobx-react";

import { AlertBoxIcon } from "mdi-react";
import { css } from "emotion";

import { validateInput } from '../global/validation';

const inputWrapper = css`
  width: 250px;
  height: 40px;
  position: relative;
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

const errorInput = css`
  width: 100%;
  height: 100%;
  background: #eaeaea;
  border-radius: 5px;
  outline: 0;
  border: 1px solid red;
  padding: 2px 10px;
  box-sizing: border-box;
  &:focus {
    background: white;
    box-shadow: 0 0 0 0.2rem rgba(122, 174, 255, 0.15);
  }
`;

const errorHighlight = css`
  color: red;
  margin: 5px 0px 0px 5px;
  font-size: 0.9rem;
`;

@inject('errorhandling')
@observer
class Input extends Component {

  onChange = e => {
    typeof this.props.onChange === "function" && this.props.onChange(e);
  };

  validate = e => {
    if (e && e.target) {
      const { noError, errorMessage } = validateInput(this.props.type, e.target.value, this.props.max, this.props.min);
      if (noError) {
        if (this.props.errorhandling.exists(this.props.mutate)) this.props.errorhandling.removeError(this.props.mutate)
        this.onChange(e);
      } else {
        this.props.errorhandling.saveError(this.props.mutate, errorMessage)
        this.onChange(e);
      }
      return noError;
    }
  };

  render() {
    const { className, icon, onChange, type, max, min, value, mutate, ...other } = this.props;

    let icons = [];
    const errorExists = this.props.errorhandling.exists(mutate);
    if (errorExists) {
      icons.push(
        <div key="right-icon" className={iconIn} style={{ right: 5 }}>
          <AlertBoxIcon color="red" size="25px" />
        </div>
      )
    }

    if (!errorExists && icon && icon.right) {
      if (icon.type === 'select') {
      icons.push(
        <div key="right-icon" className={iconIn} style={{ right: 5 }}>
          <icon.right color="grey" size="25px" />
          {/* x */}
        </div>
        );
      }
    }

    return (
      <React.Fragment>
        <div className={inputWrapper}>
          <input
            className={errorExists ? errorInput : input}
            value={value || ""}
            onChange={this.validate}
            {...other}
          />
          {icons}
        </div>
        {errorExists ? <div className={errorHighlight}>{errorExists}</div> : null}
      </React.Fragment>
    );
  }
}

export default Input;
