import React from "react";
import { SketchPicker } from "react-color";
import Input from "./Input";

class ColorPicker extends React.Component {
  state = {
    pickerOpen: false,
  };

  togglePicker = () =>
    this.setState(state => ({
      pickerOpen: !state.pickerOpen,
    }));

  onChange = color => {
    if (typeof this.props.onChange === "function") {
      this.props.onChange(color.hex);
    }
  };

  render() {
    return (
      <div>
        <Input
          buttonMode
          onClick={this.togglePicker}
          value={this.props.value}
          onChange={() => null}
        />
        {this.state.pickerOpen && (
          <div style={{ position: "absolute", zIndex: 10 }}>
            <div
              style={{
                position: "fixed",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
              }}
              onClick={this.togglePicker}
            />
            <SketchPicker color={this.props.value} onChangeComplete={this.onChange} />
          </div>
        )}
      </div>
    );
  }
}

export default ColorPicker;
