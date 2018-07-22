import React, { Component } from 'react';
import { css } from "emotion";
import classNames from "classnames";

const hamburger = css`
    width: 35px;
    height: 35px;
    cursor: pointer;
`;

const hamburgerBox = css`
    width: 35px;
    height: 35px;
    display:flex;
    align-items:center;
    position:relative;
    cursor: pointer;
    z-index:3;
`;

const hamburgerInner = css`
    position: relative;
    width: 35px;
    height: 3px;
    background:#fff;
    position:absolute;
    opacity:1;
    transition:.1s;
    &:before {
        content: "";
        width: 35px;
        height: 3px;
        background:#fff;
        position:absolute;
        top:-10px;
        transition:top .1s .1s, transform .1s;
      }
    &:after {
        content: "";
        width: 35px;
        height: 3px;
        background:#fff;
        position:absolute;
        top:10px;
        transition:top .1s .1s, transform .1s;
      }
`

const openedHamburger = css`
        width:0;
        &:before{
        top:0px;
        transition:top .1s, transform .2s .1s;
        transform:rotate(45deg)
      }
      &:after{
        top:0px;
        transition:top .1s, transform .2s .1s;
        transform:rotate(-45deg)
      }
`

class Hamburger extends Component {
    render() {
        const { isHamburgerOpen, handleToggleHamburger } = this.props
        return (
            <div className={classNames(Hamburger)} onClick={handleToggleHamburger}>
                <div className={hamburgerBox} >
                    <div className={classNames(hamburgerInner, { [openedHamburger]: isHamburgerOpen })}></div>
                </div>
            </div>
        );
    }
}
export default Hamburger;