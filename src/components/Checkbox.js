import React, { Component } from "react";
import { css } from "emotion";

const inputWrapper = css`
  margin: 0;
  padding-left: 50px;
  input[type="checkbox"] {
    height: 0;
    width: 0;
    margin: 0;
    visibility: hidden;
  }

  label {
    cursor: pointer;
    text-indent: -50px;
    font-size: 16px;
    color: #9b9b9b;
    line-height: 25px;
    width: 50px;
    height: 26px;
    background: grey;
    display: block;
    border-radius: 100px;
    position: relative;
    margin-top: -15px;
  }

  label:after {
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

  input:checked + label {
    background-image: linear-gradient(90deg, #74ebd5 0%, #7aaeff 100%);
  }

  input:checked + label:after {
    left: calc(100% - 2px);
    transform: translateX(-100%);
  }

  label:active:after {
    width: 30px;
  }
`;

class Checkbox extends Component {
  // just for tests... components here should be stateless
  state = {
    checked: false,
  };

  render() {
    const { className, children, ...other } = this.props;

    return (
      <div
        className={inputWrapper}
        onClick={() => this.setState({ checked: !this.state.checked })}
      >
        <input type="checkbox" checked={this.state.checked} />
        <label for="switch">{children}</label>
      </div>
    );
  }
}

export default Checkbox;
