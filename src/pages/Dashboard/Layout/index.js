import React, { Component } from "react";
import Sidebar from "./Sidebar";
import MobileHeader from './MobileHeader/MobileHeader'
import { css } from "emotion";
import mq from '../../../global/breakpoints'
import { breakpoints } from '../../../global/breakpoints'
import classNames from 'classnames'


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
  padding: 5% 30px 0;
  overflowx: auto;
  & > section {
    margin: 20px 0;
  }
`;

export const sidebarOverlay = css`
    width:100%;
    height:100%;
    position:absolute;
    background:#111;
    opacity:0;
    z-index:1;
    pointer-events:none;
`
export const sidebarOverlayOpen = css`
    opacity: 0.4;
`

export const noScroll = css`
  overflow:hidden;
  filter: blur(5px);
`

export default class Layout extends Component {
  state = {
    isHamburgerOpen: false
  }

  handleToggleHamburger = () => {
    if (window.innerWidth <= breakpoints.small) {
      this.setState({
        isHamburgerOpen: !this.state.isHamburgerOpen
      })
    }
  }

  render() {
    const { isHamburgerOpen } = this.state
    return (
      <div className={layout}>
        <MobileHeader
          isHamburgerOpen={isHamburgerOpen}
          handleToggleHamburger={this.handleToggleHamburger} />
        <Sidebar isHamburgerOpen={isHamburgerOpen}
          handleToggleHamburger={this.handleToggleHamburger} />
        <div className={classNames(content, { [noScroll]: isHamburgerOpen })}
          onClick={isHamburgerOpen && this.handleToggleHamburger}
        >
          {this.props.children}
        </div>
        <div className={classNames(sidebarOverlay, { [sidebarOverlayOpen]: isHamburgerOpen })}></div>
      </div >
    );
  }
}
