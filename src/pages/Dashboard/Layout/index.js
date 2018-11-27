import React, { Component } from "react";
import Sidebar from "./Sidebar";
import MobileHeader from "./MobileHeader/MobileHeader";
import { css } from "emotion";

import Media from "react-media";
import { mq, breakpoints } from "../../../util/breakpoints";
import classNames from "classnames";

const layout = css`
  display: grid;
  grid-template-columns: [sidebar] 250px [content] 1fr;
  height: 100%;

  ${mq.large(
    css`
      grid-template-columns: [content] 1fr;
      grid-template-rows: [MobileHeader] 50px [content] 1fr;
    `
  )}
`;

const content = css`
  background-color: #f8f8fd;
  overflow-x: auto;
  box-sizing: border-box;
  padding-top: 30px;
  & > section {
    box-sizing: border-box;
    margin: 20px 0;
    padding-left: 2%;
  }
`;

export const sidebarOverlay = css`
  width: 100%;
  height: 100%;
  position: absolute;
  background: #111;
  opacity: 0;
  z-index: 1;
  pointer-events: none;
  transition: all 300ms;
`;

export const sidebarOverlayOpen = css`
  opacity: 0.4;
`;

export const noScroll = css`
  overflow: hidden;
  filter: blur(5px);
`;

class Layout extends Component {
  state = {
    isMenuOpen: false,
  };

  toggleMenu = () => {
    if (!this.props.isMobile) return;

    this.setState(state => ({
      isMenuOpen: !state.isMenuOpen,
    }));
  };

  render() {
    const isMobile = this.props.isMobile;
    const { isMenuOpen } = this.state;

    const shouldMenuOpen = isMobile ? isMenuOpen : true;

    return (
      <div className={layout} style={this.props.style}>
        {isMobile && (
          <MobileHeader isMenuOpen={shouldMenuOpen} toggleMenu={this.toggleMenu} />
        )}
        <Sidebar isMenuOpen={shouldMenuOpen} toggleMenu={this.toggleMenu} />
        <div
          className={classNames(content, {
            [noScroll]: isMobile && isMenuOpen,
          })}
          onClick={() => shouldMenuOpen && this.toggleMenu}
        >
          {this.props.children}
        </div>
        {isMobile && (
          <div
            className={classNames(sidebarOverlay, {
              [sidebarOverlayOpen]: isMenuOpen,
            })}
          />
        )}
      </div>
    );
  }
}

export default props => (
  <Media query={`(max-width: ${breakpoints.large}px)`}>
    {isMobile => <Layout isMobile={isMobile} {...props} />}
  </Media>
);
