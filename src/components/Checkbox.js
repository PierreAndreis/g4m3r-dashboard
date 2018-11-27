import React, { Component } from "react";
import { css } from "emotion";

const checkboxCss = css`
  padding: 0;
  margin: 5px 0;
  width: 100%;
  height: 32px;
  box-sizing: border-box;
  white-space: pre-wrap;
  position: relative;

  input[type="checkbox"] {
    height: 0;
    width: 0;
    margin: 0;
    visibility: hidden;
  }

  label {
    margin-top: -18px;
    box-sizing: border-box;
    padding-right: 60px;
    position: relative;
    height: 32px;
    display: flex;
    align-items: center;
    & > h2 {
      margin: 0;
    }
  }

  span {
    right: 0;
    position: absolute;
    cursor: pointer;
    font-size: 16px;
    color: #c6c6c6;
    width: 50px;
    height: 26px;
    background: #c6c6c6;
    display: block;
    border-radius: 100px;
  }

  span:after {
    content: "";
    position: absolute;
    top: 2px;
    left: 2px;
    width: 22px;
    height: 22px;
    background: #fff;
    border-radius: 90px;
    transition: 0.3s;
  }

  input:checked + label > span {
    background-image: linear-gradient(90deg, #74ebd5 0%, #7aaeff 100%);
  }

  input:checked + label > span:after {
    left: calc(100% - 2px);
    transform: translateX(-100%);
  }

  span:active:after {
    width: 30px;
  }
`;

class Checkbox extends Component {
  onChange = () => {
    typeof this.props.onChange === "function" && this.props.onChange(!this.props.value);
  };

  render() {
    const { className, onChange, value, children, ...other } = this.props;

    return (
      <div className={checkboxCss} onClick={this.onChange}>
        {/* On change handler is needed to surpress props type error */}
        <input
          type="checkbox"
          checked={value || false}
          {...other}
          onChange={() => null}
        />
        <label>
          {children} <span />
        </label>
      </div>
    );
  }
}

export default Checkbox;
