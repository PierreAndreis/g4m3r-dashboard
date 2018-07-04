import React from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";

const Test = () => (
  <Query
    query={gql`
      {
        me {
          id
          username
          serverList {
            name
            icon
          }
        }
      }
    `}
  >
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error :(</p>;

      let guilds = data.me.serverList;

      return (
        <div>
          Hello {data.me.username} <br />{" "}
          {guilds.map(guild => (
            <div>
              <img src={guild.icon} />
              <h3>{guild.name}</h3>
            </div>
          ))}
        </div>
      );
    }}
  </Query>
);

export default Test;
