import React from "react";
import { css } from "emotion";
import { Transition, animated } from "react-spring";

import { BoxBase, BoxPadding } from "./Box";
import Portal from "./Portal";
import { mqmax } from "../global/breakpoints";

const modal = css`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const backdrop = css`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
`;

const modalContent = css`
  ${BoxBase};
  ${BoxPadding} width: auto;
  height: auto;
  max-height: 90%;
  max-width: 800px;
  padding-bottom: 20px;
  overflow-y: scroll;

  ${mqmax.medium(css`
    width: 100%;
    max-width: 100%;
    max-height: 80%;
    border-radius: 0;
  `)};
`;

const modalClose = css`
  position: absolute;
  top: 15px;
  right: 35px;
  color: #f1f1f1;
  font-size: 40px;
  font-weight: bold;
  transition: 0.3s;

  :hover,
  :focus {
    color: #bbb;
    text-decoration: none;
    cursor: pointer;
  }
`;

class Modal extends React.Component {
  onClose = e => {
    if (typeof this.props.onClose === "function") this.props.onClose(e);
  };

  onBodyClick = e => {
    if (this.props.disablePropagation) {
      e.preventDefault();
      e.stopPropagation();
    }
  };

  render() {
    return (
      <Portal>
        <Transition
          native
          items={this.props.open}
          from={{
            backdropOpacity: 0,
            opacity: 0,
            transform: "translateY(30px)",
          }}
          enter={[
            { backdropOpacity: 0.8 },
            { backdropOpacity: 1, opacity: 1, transform: "translateY(0)" },
          ]}
          leave={[
            {
              opacity: 0,
              transform: "translateY(-30px)",
            },
            {
              backdropOpacity: 0,
            },
          ]}
          config={{
            duration: 200,
            tension: 0.1,
          }}
        >
          {open =>
            open &&
            (styles => (
              <animated.div className={modal}>
                <animated.div
                  className={backdrop}
                  style={{ opacity: styles.backdropOpacity }}
                  onClick={this.onClose}
                />
                <span className={modalClose} onClick={this.onClose}>
                  &times;
                </span>
                <animated.div
                  className={modalContent}
                  style={styles}
                  onClick={this.onBodyClick}
                >
                  {this.props.children}
                </animated.div>
              </animated.div>
            ))
          }
        </Transition>
      </Portal>
    );
  }
}

export default Modal;
