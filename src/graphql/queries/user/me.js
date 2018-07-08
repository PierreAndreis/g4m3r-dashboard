import gql from "graphql-tag";

// With serverlist
export default gql`
  {
    me {
      id
      username
      tag
      displayAvatarURL
      serverList {
        id
        name
        icon
      }
    }
  }
`;
