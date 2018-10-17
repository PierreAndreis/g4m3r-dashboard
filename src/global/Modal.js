import React, { Component } from "react";
import { css } from "emotion";
import classNames from "classnames";

const modalContainer = css`
  width: 100vw;
  height: 100vh;
  position: absolute;
  pointer-events: none;
  top: 0;
  left: 0;
`;

const modal = css`
  width: 800px;
  height: 650px;
  ${"" /* background-image: linear-gradient(0deg, #7aaeff 0%, #74e1eb 100%); */};
  position: absolute;
  top: 50%;
  left: 50%;

  z-index: 2;
  border-radius: 3px;
  padding: 5px;
  box-sizing: border-box;

  transition: all 300ms;
  transform: translate(-50%, -50%);
  opacity: 0;
`;

const modalContent = css`
  width: 100%;
  height: 100%;
  background: #fff;
  border-radius: 3px;
  display: flex;
  flex-direction: column;
  position: relative;
  box-sizing: border-box;
  padding: 15px;
`;
const close = css`
  position: absolute;
  right: 10px;
  top: 10px;
  cursor: pointer;
`;

const closeContent = css`
  width: 35px;
  height: 35px;
  box-sizing: border-box;
  &:after {
    content: "";
    position: absolute;
    top: 0;
    width: 100%;
    height: 3px;
    background: #111;
    top: 50%;
    transform: rotate(-45deg);
  }
  &:before {
    content: "";
    position: absolute;
    top: 50%;
    width: 100%;
    height: 3px;
    background: #111;
    transform: rotate(45deg);
  }
`;

const openModal = css`
  transform: translate(-50%, -45%);
  opacity: 1;
  pointer-events: visible;
`;

const modalBg = css`
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 1;
  pointer-events: initial;
  background: rgba(0, 0, 0, 0.3);
`;

export default class Modal extends Component {
  render() {
    const { open, onClose } = this.props;
    return (
      <div className={modalContainer}>
        {open && <div onClick={onClose} className={modalBg} />}
        <div className={classNames(modal, { [openModal]: open })}>
          <div className={modalContent}>
            <div className={close} onClick={onClose}>
              <div className={closeContent} />
            </div>
            {this.props.render()}
          </div>
        </div>
      </div>
    );
  }
}
