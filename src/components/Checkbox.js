import React, { Component } from "react";
import { css } from "emotion";

const inputWrapper = css`
  margin: 0;

  input[type="checkbox"] {
    height: 0;
    width: 0;
    margin: 0;
    visibility: hidden;
  }

  label {
    display: block;
    padding-right: 60px;
    position: relative;
  }

  span {
    right: 0;
    position: absolute;
    top: -5px;
    cursor: pointer;
    font-size: 16px;
    color: #9b9b9b;
    width: 50px;
    height: 26px;
    background: grey;
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
  // state = {
  //   checked: false,
  // };

  // // static getDerivedStateFromProps(props, state) {
  // //   if (props.value) {
  // //     return {
  // //       checked: props.value,
  // //     };
  // //   }
  // //   return null;
  // // }

  // // componentDidUpdate(prevState) {
  // //   if (prevState.checked !== this.state.checked) {
  // //     typeof this.props.onChange === "function" &&
  // //       this.props.onChange(this.state.checked);
  // //   }
  // // }

  onChange = () => {
    typeof this.props.onChange === "function" && this.props.onChange(!this.props.value);
  };

  render() {
    const { className, onChange, value, children, ...other } = this.props;

    return (
      <div className={inputWrapper} onClick={this.onChange}>
        <input type="checkbox" checked={value || false} {...other} />
        <label>
          {children} <span />
        </label>
      </div>
    );
  }
}

export default Checkbox;
