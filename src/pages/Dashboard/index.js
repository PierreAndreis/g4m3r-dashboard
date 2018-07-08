import React from "react";
import { Query } from "react-apollo";
import Layout from "./Layout";
import Router from "./router";
import guildBasic from "./../../graphql/queries/guild/guildBasic";

export default class DashboardRouter extends React.Component {
  render() {
    let guildId = this.props.match.params.guildId;
    return (
      <Query query={guildBasic} variables={{ guildId: guildId }}>
        {({ loading, error, data }) => {
          if (loading) return <p>Loading...</p>;
          if (error) return <p>Error :(</p>;
          return (
            <Layout>
              <div>{data.guild.name}</div>
              <Router />
            </Layout>
          );
        }}
      </Query>
    );
  }
}
