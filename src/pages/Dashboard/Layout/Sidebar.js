import React, { Component } from "react";
import { NavLink, withRouter } from "react-router-dom";
import { router } from "../router";

import * as style from "./Sidebar.style";
import { animated, Keyframes, Transition } from "react-spring";

const GenerateLink = ({ match, route }) => (
  <NavLink
    to={`/g/${match.params.guildId}/${route.path}`}
    activeClassName="active"
    exact={route.exact}
  >
    <route.icon /> {route.name}
  </NavLink>
);

const MenuAnimation = Keyframes.Trail({
  open: { transform: "translateX(0px)", opacity: 1, delay: 300 },
  close: { transform: "translateX(-100px)", opacity: 0 },
});

class Sidebar extends Component {
  render() {
    const { isMenuOpen, toggleMenu } = this.props;

    console.log("xd=", isMenuOpen);
    return (
      <Transition
        items={isMenuOpen}
        native
        from={{ transform: "translateX(-100%)" }}
        enter={{ transform: "translateX(0)" }}
        leave={{ transform: "translateX(-100%)", delay: 300 }}
      >
        {open =>
          open
            ? props => (
                <animated.div className={style.container} style={props}>
                  <div className={style.logoContainer}>
                    <div className={style.logo} />
                    <h3>G4M3R</h3>
                  </div>
                  <div className={style.menu} onClick={toggleMenu}>
                    <MenuAnimation
                      native
                      from={{ transform: "translateX(-100px)", opacity: 0 }}
                      items={router}
                      keys={route => route.name}
                      reverse={!isMenuOpen}
                      state={isMenuOpen ? "open" : "close"}
                    >
                      {route => style => (
                        <animated.div style={style}>
                          <GenerateLink
                            key={route.name}
                            route={route}
                            match={this.props.match}
                          />
                        </animated.div>
                      )}
                    </MenuAnimation>
                  </div>
                  <div className={style.guildSelector} />
                </animated.div>
              )
            : null
        }
      </Transition>
    );
  }
}

export default withRouter(Sidebar);
