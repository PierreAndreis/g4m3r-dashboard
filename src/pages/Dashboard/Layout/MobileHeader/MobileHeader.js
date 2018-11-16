import React, { Component } from "react";
import { css } from "emotion";
import HamburgerIcon from "./Hamburger";

export const mobileHeader = css`
  display: flex;
  align-items: center;
  padding: 0 10px;
  box-sizing: border-box;
  justify-content: space-between;
  background-image: linear-gradient(90deg, #92d8e0 0%, #8cc7eb 100%);
`;

export const logo = css`
  background-image: url("/images/logo.svg");
  background-size: 70%;
  background-position: center center;
  background-repeat: no-repeat;
  background-color: white;
  width: 40px;
  height: 40px;
  border-radius: 100%;
`;

class MobileHeader extends Component {
  state = {};
  render() {
    const { isMenuOpen, toggleMenu } = this.props;
    return (
      <div className={mobileHeader}>
        <HamburgerIcon isOpen={isMenuOpen} onClick={toggleMenu} />
        <div className={logo} />
      </div>
    );
  }
}

export default MobileHeader;
