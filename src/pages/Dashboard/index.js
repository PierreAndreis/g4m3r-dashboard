import React from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import Layout from "./Layout";
import Router from "./router";

const guildQuery = gql`
  query guild($guildId: String) {
    guild(id: $guildId) {
      id
      name
      configs {
        settings {
          admins {
            id
            username
            displayAvatarURL
            configs {
              accounts {
                id
                name
              }
            }
          }
        }
      }
    }
  }
`;

export default class DashboardRouter extends React.Component {
  render() {
    return (
      <Query query={guildQuery} variables={{ guildId: this.props.match.params.guildId }}>
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
