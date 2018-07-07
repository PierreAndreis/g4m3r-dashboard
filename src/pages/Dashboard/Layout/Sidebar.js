import React, { Component } from "react";
import { NavLink, withRouter } from "react-router-dom";
import { css } from "emotion";
import { router } from "../router";

const container = css`
  position: relative;
  display: flex;
  flex-direction: column;
  background-image: linear-gradient(0deg, #7aaeff 0%, #74e1eb 100%);
  &:after {
    content: "";
    display: block;
    position: absolute;
    background: url("/images/gamer_logo_bg_two.png");
    background-size: 350px;
    background-repeat: no-repeat;
    width: 220px;
    height: 350px;
    bottom: 0;
    left: 30px;
  }
`;

const logoContainer = css`
  margin: 80px 0;
  align-self: center;

  & > h3 {
    margin: 5px;
    font-size: 21px;
    color: white;
    text-align: center;
  }
`;

const logo = css`
  background-image: url("/images/logo.svg");
  background-size: 70%;
  background-position: center center;
  background-repeat: no-repeat;
  background-color: white;
  width: 100px;
  height: 100px;
  border-radius: 100%;
`;

const menu = css`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  & > a {
    padding: 10px;
    width: 180px;
    height: 20px;
    font-size: 18px;
    color: white;
    margin: 5px 0;
    border-radius: 8px;
    font-weight: 700;
    display: flex;
    align-items: center;
    cursor: pointer;
    transition: all 300ms;
    &.active {
      background: rgba(255, 255, 255, 0.1);
    }
    & > svg {
      margin-right: 10px;
    }
    &:hover {
      background: rgba(255, 255, 255, 0.3);
    }
    &:active {
      background: rgba(255, 255, 255, 0.2);
    }
  }
`;

const GenerateLink = withRouter(({ match, route }) => (
  <NavLink
    to={`/g/${match.params.guildId}/${route.path}`}
    activeClassName="active"
    exact={route.exact}
  >
    <route.icon /> {route.name}
  </NavLink>
));

export class Sidebar extends Component {
  render() {
    return (
      <div className={container}>
        <div className={logoContainer}>
          <div className={logo} />
          <h3>G4M3R</h3>
        </div>
        <div className={menu}>
          {router.map(route => <GenerateLink key={route.name} route={route} />)}
        </div>
      </div>
    );
  }
}

export default Sidebar;
