import React from "react";
import ReactDOM from "react-dom";
import { Transition, animated } from "react-spring";

import { css } from "emotion";
import classNames from "classnames";
import { mq } from "../util/breakpoints";

const snackbar = css`
  width: 100%;
  position: fixed;
  padding: 12px 24px;
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

  ${mq.medium(css`
    width: auto;
  `)};
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
  & > div {
    margin: 0 10px;
  }

  margin: auto;
`;

class Snackbar extends React.Component {
  static ButtonContainer = ({ children, className }) => (
    <div className={classNames(className, buttonContainer)}>{children}</div>
  );

  render() {
    const { open, className } = this.props;

    return ReactDOM.createPortal(
      <Transition
        native
        items={open}
        from={{ transform: "translateX(-50%) translateY(100%)" }}
        enter={{ transform: "translateX(-50%) translateY(0%);" }}
        leave={{ transform: "translateX(-50%) translateY(100%);" }}
      >
        {show =>
          show &&
          (style => (
            <animated.div className={classNames(className, snackbar)} style={style}>
              {this.props.children}
            </animated.div>
          ))
        }
      </Transition>,
      document.getElementById("snackbar")
    );
  }
}

export default Snackbar;
