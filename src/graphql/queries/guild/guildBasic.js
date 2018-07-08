import gql from "graphql-tag";

export default gql`
  query guild($guildId: ID) {
    guild(id: $guildId) {
      id
      name
      configs {
        settings {
          prefix
          timezone
        }
      }
    }
  }
`;
