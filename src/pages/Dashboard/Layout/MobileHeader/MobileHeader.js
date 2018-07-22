import React, { Component } from 'react';
import { css } from "emotion";
import mq from '../../../../global/breakpoints'
import Hamburger from "../../../../components/Hamburger";


export const mobileHeader = css`
     display:none;
     background-image: linear-gradient(0deg, #7aaeff 0%, #74e1eb 100%);
     ${mq.small(css`
     display:flex;  
     align-items:center; 
     padding:0 10px;
     justify-content:space-between;
  `)};
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
    state = {}
    render() {
        const { isHamburgerOpen, handleToggleHamburger } = this.props
        return (
            <div className={mobileHeader}>
                <Hamburger
                    isHamburgerOpen={isHamburgerOpen}
                    handleToggleHamburger={handleToggleHamburger}
                />
                <div className={logo}></div>
            </div>
        );
    }
}

export default MobileHeader;