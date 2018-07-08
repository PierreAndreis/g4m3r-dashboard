import React, { Component } from "react";
import { NavLink, withRouter } from "react-router-dom";
import { router } from "../router";

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
    console.log(this.props);
    return (
      <div className={style.container}>
        <div className={style.logoContainer}>
          <div className={style.logo} />
          <h3>G4M3R</h3>
        </div>
        <div className={style.menu}>
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
