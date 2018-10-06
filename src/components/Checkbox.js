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
    text-indent: -60px;
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

    return <div className={inputWrapper} onClick={this.onChange}>
        <label htmlFor="switch">{children}</label>
        <input type="checkbox" checked={value || false} {...other} />
      </div>;
  }
}

export default Checkbox;
