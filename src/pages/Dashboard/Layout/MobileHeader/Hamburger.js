import React, { Component } from "react";
import { css } from "emotion";
import classNames from "classnames";

const hamburgerBox = css`
  width: 35px;
  height: 35px;
  display: flex;
  align-items: center;
  position: relative;
  cursor: pointer;
  z-index: 3;
`;

const hamburgerInner = css`
  position: relative;
  width: 35px;
  height: 3px;
  background: #fff;
  position: absolute;
  opacity: 1;
  transition: 0.1s;
  &:before {
    content: "";
    width: 35px;
    height: 3px;
    background: #fff;
    position: absolute;
    top: -10px;
    transition: top 0.1s 0.1s, transform 0.1s;
  }
  &:after {
    content: "";
    width: 35px;
    height: 3px;
    background: #fff;
    position: absolute;
    top: 10px;
    transition: top 0.1s 0.1s, transform 0.1s;
  }
`;

const openedHamburger = css`
  width: 0;
  &:before {
    top: 0px;
    transition: top 0.1s, transform 0.2s 0.1s;
    transform: rotate(45deg);
  }
  &:after {
    top: 0px;
    transition: top 0.1s, transform 0.2s 0.1s;
    transform: rotate(-45deg);
  }
`;

class Hamburger extends Component {
  render() {
    const { isOpen, onClick } = this.props;
    return (
      <div className={classNames(Hamburger)} onClick={onClick}>
        <div className={hamburgerBox}>
          <div className={classNames(hamburgerInner, { [openedHamburger]: isOpen })} />
        </div>
      </div>
    );
  }
}
export default Hamburger;
