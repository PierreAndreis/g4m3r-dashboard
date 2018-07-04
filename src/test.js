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
            id
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
          <div>
            <h3>Servers</h3>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
              {guilds.map(guild => (
                <div
                  key={guild.id}
                  style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}
                >
                  <img src={guild.icon} alt={guild.name} width="50" height="50" />
                  <b>{guild.name}</b>
                </div>
              ))}
            </div>
          </div>
        </div>
      );
    }}
  </Query>
);

export default Test;
