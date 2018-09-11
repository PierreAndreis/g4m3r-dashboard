import gql from "graphql-tag";

export default gql`
  query client($clientId: ID) {
    client(id: $clientId) {
      id
      commands {
        id
        category
      }
    }
  }
`;
