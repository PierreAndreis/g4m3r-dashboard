import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "./global/normalize.css";
import "./global/style.css";
import Login from "./modules/Login";
import { css } from "emotion";
import { inject, observer } from "mobx-react";
import DashboardRouter from "./modules/Dashboard";

const Container = css`
  width: 100%;
  height: 100%;
`;

export default class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className={Container}>
          <Switch>
            <AuthRoute path="/g/:guildId" component={DashboardRouter} />
            <Route path="/" component={Login} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

@inject("authentication")
@observer
class AuthRoute extends React.Component {
  render() {
    const { component: Component, authentication: auth, ...rest } = this.props;

    return (
      <Route
        {...rest}
        render={props =>
          auth.isLoggedIn ? (
            <Component {...props} />
          ) : (
            <Redirect
              to={{
                pathname: "/",
                state: { from: props.location },
              }}
            />
          )
        }
      />
    );
  }
}
