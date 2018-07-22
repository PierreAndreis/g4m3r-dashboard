import React, { Component } from "react";
import { NavLink, withRouter } from "react-router-dom";
import { router } from "../router";
import classNames from "classnames";

import * as style from "./Sidebar.style";

const GenerateLink = ({ match, route, handleToggleHamburger }) => (
  <NavLink
    to={`/g/${match.params.guildId}/${route.path}`}
    activeClassName="active"
    onClick={handleToggleHamburger}
    exact={route.exact}
  >
    <route.icon /> {route.name}
  </NavLink>
);

class Sidebar extends Component {
  render() {
    const { isHamburgerOpen, handleToggleHamburger } = this.props
    return (
      <div className={classNames(style.container, { [style.showSideBar]: isHamburgerOpen })}>
        <div className={style.logoContainer}>
          <div className={style.logo} />
          <h3>G4M3R</h3>
        </div>
        <div className={style.menu}>
          {router.map(route => (
            <GenerateLink key={route.name}
              handleToggleHamburger={handleToggleHamburger}
              route={route}
              match={this.props.match} />
          ))}
        </div>
        <div className={style.guildSelector} />
      </div>
    );
  }
}

export default withRouter(Sidebar);
