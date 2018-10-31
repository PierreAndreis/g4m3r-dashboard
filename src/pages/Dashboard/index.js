import React from "react";
import { css } from "emotion";
import { Query } from "react-apollo";
import Layout from "./Layout";
import Router from "./router";
import guildBasic from "./../../graphql/queries/guild/guildBasic";
import { logo } from "../Login/LogoWithEffects";
import { Transition } from "react-spring";

const dashboardLoading = css`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #f8f8fd;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default class DashboardRouter extends React.Component {
  render() {
    let guildId = this.props.match.params.guildId;
    return (
      <Query query={guildBasic} variables={{ guildId: guildId }}>
        {({ loading, error, data }) => {
          if (error) return <p>Error :(</p>;
          return (
            <Transition
              items={loading}
              from={{ opacity: 0 }}
              enter={{ opacity: 1 }}
              leave={{ opacity: 0 }}
            >
              {isLoaded =>
                isLoaded
                  ? style => {
                      return (
                        <div className={dashboardLoading} style={style}>
                          <div className={logo} style={{ width: 150, height: 150 }} />
                          <p>Please wait while we prepare the dashboard for you</p>
                        </div>
                      );
                    }
                  : style => {
                      return (
                        <Layout style={style}>
                          <Router />
                        </Layout>
                      );
                    }
              }
            </Transition>
          );
        }}
      </Query>
    );
  }
}
