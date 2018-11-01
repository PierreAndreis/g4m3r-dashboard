import React, { Component } from "react";
import { NavLink, withRouter } from "react-router-dom";
import { router } from "../router";
import classNames from "classnames";

import * as style from "./Sidebar.style";

const GenerateLink = ({ match, route }) => (
  <NavLink
    to={`/g/${match.params.guildId}/${route.path}`}
    activeClassName="active"
    exact={route.exact}
  >
    <route.icon /> {route.name}
  </NavLink>
);

class Sidebar extends Component {
  render() {
    const { isMenuOpen, toggleMenu } = this.props;
    return (
      <div className={classNames(style.container, { [style.showSideBar]: isMenuOpen })}>
        <div className={style.logoContainer}>
          <div className={style.logo} />
          <h3>G4M3R</h3>
        </div>
        <div className={style.menu} onClick={toggleMenu}>
          {router.map(route => (
            <GenerateLink key={route.name} route={route} match={this.props.match} />
          ))}
        </div>
        <div className={style.guildSelector} />
      </div>
    );
  }
}

export default withRouter(Sidebar);
