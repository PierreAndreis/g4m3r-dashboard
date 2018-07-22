import React, { Component } from "react";
import Sidebar from "./Sidebar";
import MobileHeader from "./MobileHeader/MobileHeader";
import { css } from "emotion";
import Media from "react-media";
import mq, { breakpoints } from "../../../global/breakpoints";
import classNames from "classnames";

const layout = css`
  display: grid;
  grid-template-columns: [sidebar] 250px [content] 1fr;
  height: 100%;

  ${mq.small(css`
    grid-template-columns: [content] 1fr;
    grid-template-rows: [MobileHeader] 50px [content] 1fr;
  `)};
`;

const content = css`
  background-color: #f8f8fd;
  overflowx: auto;
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
    return (
      <div className={layout}>
        {isMobile && (
          <MobileHeader isMenuOpen={isMenuOpen} toggleMenu={this.toggleMenu} />
        )}
        <Sidebar isMenuOpen={isMenuOpen} toggleMenu={this.toggleMenu} />
        <div
          className={classNames(content, {
            [noScroll]: isMenuOpen,
          })}
          onClick={() => isMobile && isMenuOpen && this.toggleMenu}
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
  <Media query={`(max-width: ${breakpoints.small}px)`}>
    {isMobile => <Layout isMobile={isMobile} {...props} />}
  </Media>
);
