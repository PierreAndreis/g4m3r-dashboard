import React from "react";

import Input from "./Input";

export const Masks = {
  secondsToMs: {
    in: value => {
      if (isNaN(Number(value))) return 0;
      // seconds to ms
      return value / 1000;
    },
    out: value => {
      if (isNaN(Number(value))) return 0;
      // ms to seconds
      return value * 1000;
    },
  },
};

class InputMask extends React.Component {
  onChange = e => {
    const value = e.target.value;
    this.props.onChange(this.props.mask.out(value));
  };

  render() {
    const { mask, value, ...props } = this.props;

    return (
      <Input
        {...props}
        // The order here matters. value and onChange can't be overwritten
        value={this.props.mask.in(this.props.value)}
        onChange={this.onChange}
      />
    );
  }
}

export default InputMask;
