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
          }
        }
      }
    `}
  >
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error :(</p>;

      return (
        <div>
          Hello {data.me.username} <br />{" "}
          {JSON.stringify(data.me.serverList, null, 2)}
        </div>
      );
    }}
  </Query>
);

export default Test;
