import gql from "graphql-tag";

export default gql`
  query client($clientId: ID) {
    client(id: $clientId) {
      id
      settings {
        permissionLevels {
          id
          value
        }
      }
      commands {
        id
        category
        permissionLevel
        isMaintainer
      }
    }
  }
`;
