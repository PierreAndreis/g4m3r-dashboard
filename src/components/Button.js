import React, { Component } from "react";
import { css } from "emotion";
import classNames from "classnames";
import { LoadingIcon, AlertIcon, CheckIcon } from "mdi-react";

const ButtonBase = css`
  position: relative;
  overflow: hidden;
  background: #007aff;
  border: 0;
  color: white;
  border-radius: 3px;

  margin-right: 5px;
  /* box-shadow: 0 0 6px rgba(50, 50, 93, 0.11);*/
  padding: 10px 16px;
  font-size: 14px;
  transition: all 300ms;
  outline: 0;
  text-transform: uppercase;
  cursor: pointer;

  &.disabled {
    opacity: 0.5;
    color: rgba(58, 58, 58, 1);
    background: rgb(169, 169, 169);
    cursor: no-drop;
  }
  &.active {
    border-color: transparent;
    color: white;
    background-image: linear-gradient(90deg, #92d8e0 0%, #8cc7eb 100%);
  }
`;

const ButtonSimple = css`
  background: transparent;
  border: 1px solid rgba(0, 0, 0, 0.4);
  color: #9b9b9b;
  &:hover:not(.active) {
    background: rgba(0, 0, 0, 0.1);
  }

  &.active:hover {
    opacity: 0.6;
  }

  &:focus:not(.active) {
    background: rgba(0, 0, 0, 0.05);
  }

  &.disabled {
    opacity: 0.5;
    color: #9b9b9b;
    background: transparent;
  }
`;

const ButtonBig = css`
  padding: 15px 30px;
`;

const ButtonSmall = css`
  padding: 5px 15px;
`;

const ButtonHover = css`
  &:hover,
  &:focus {
    background-color: #87b9ff;
    color: white;
  }

  &:active:focus {
    box-shadow: 0 0 0 0.2rem #74ebd5;
  }
`;

const ButtonRound = css`
  border-radius: 17px;
`;

const ButtonOverlay = css`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ButtonLoading = css`
  & > * {
    animation: spinner 0.6s linear infinite;
  }
  background: #7aaeff;
  /* Color conflicts with disabled */
  color: white !important;
`;

const ButtonError = css`
  background: #e45858;
`;
const ButtonSuccess = css`
  background: green;
`;

export default class Button extends Component {
  state = {
    status: "normal",
  };

  buttonActions = {
    loading: () => this.setState({ status: "loading" }),
    success: () => this.setState({ status: "success" }),
    error: () => this.setState({ status: "error" }),
  };

  onClick = () => {
    if (typeof this.props.onClick === "function" && !this.props.disabled) {
      this.props.onClick(this.buttonActions);
    }
  };

  componentDidUpdate(_, prevState) {
    if (
      (this.state.status === "success" && prevState.status !== "success") ||
      (this.state.status === "error" && prevState.status !== "error")
    ) {
      this.timeout = setTimeout(
        () => this.setState({ status: "normal" }),
        this.state.status === "error" ? 4000 : 2000
      );
    }
  }

  componentWillUnmount() {
    clearTimeout(this.timeout);
  }

  render() {
    const {
      onClick,
      className,
      active,
      big,
      small,
      rounded,
      simple,
      disabled,

      loading,
      error,
      success,

      children,

      ...propsToInject
    } = this.props;

    const status = this.state.status;

    let mixedClassName = classNames(
      {
        [ButtonBig]: big,
        [ButtonSmall]: small,
        [ButtonHover]: !!onClick && !simple && !disabled,
        [ButtonRound]: rounded,
        [ButtonSimple]: simple,
        active: !!active,
        disabled: disabled,
        [this.props.className]: !!this.props.className,
      },
      ButtonBase
    );

    return (
      <button
        className={mixedClassName}
        disabled={disabled}
        onClick={this.onClick}
        {...propsToInject}
      >
        {children}

        {(loading || status === "loading") && (
          <div className={classNames(ButtonOverlay, ButtonLoading)}>
            <LoadingIcon size={20} />
          </div>
        )}

        {(success || status === "success") && (
          <div className={classNames(ButtonOverlay, ButtonSuccess)}>
            <CheckIcon size={20} />
          </div>
        )}

        {(error || status === "error") && (
          <div className={classNames(ButtonOverlay, ButtonError)}>
            <AlertIcon size={20} />
          </div>
        )}
      </button>
    );
  }
}
