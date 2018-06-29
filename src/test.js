import React from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";

const Test = () => (
  <Query
    query={gql`
      {
        user(id: "99755417541828608") {
          id
          username
          avatarURL
          configs {
            games {
              id
            }
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
          <img src={data.user.avatarURL} />
          {data.user.username}
        </div>
      );
    }}
  </Query>
);

export default Test;
