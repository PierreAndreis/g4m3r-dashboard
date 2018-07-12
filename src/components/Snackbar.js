import React from "react";
import ReactDOM from "react-dom";
import { CSSTransition } from "react-transition-group";
import { css } from "emotion";
import classNames from "classnames";

const snackbar = css`
  position: fixed;
  padding: 20px 24px;
  box-sizing: border-box;
  margin: 0;
  bottom: 0;
  left: 50%;
  background: black;
  background-color: rgb(49, 49, 49);
  box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14),
    0px 1px 18px 0px rgba(0, 0, 0, 0.12);
  color: white;
  transition: transform 225ms cubic-bezier(0, 0, 0.2, 1) 0ms;

  display: flex;
  align-items: center;

  transform: translateX(-50%) translateY(100%);

  &.slide-exit,
  &.slide-enter-active,
  &.slide-enter-done,
  &.fade-exit-active {
    transform: translateX(-50%) translateY(0%);
  }
  &.slide-enter,
  &.slide-exit-done {
    transform: translateX(-50%) translateY(100%);
  }
`;

const buttonContainer = css`
  display: flex;
  margin-left: auto;
  padding-left: 15px;
  align-items: center;
  justify-content: space-between;

  & > button {
    margin: 0 5px;
  }
`;

class Snackbar extends React.Component {
  static ButtonContainer = ({ children, className }) => (
    <div className={classNames(className, buttonContainer)}>{children}</div>
  );

  render() {
    const { open, className } = this.props;

    return ReactDOM.createPortal(
      <CSSTransition
        in={open}
        timeout={{
          enter: 300,
          exit: 900,
        }}
        classNames="slide"
        // unmountOnExit
      >
        <div className={classNames(className, snackbar)}>{this.props.children}</div>
      </CSSTransition>,
      document.getElementById("snackbar")
    );
  }
}

export default Snackbar;
