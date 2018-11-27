import gql from "graphql-tag";

export default gql`
  query guild($guildId: ID) {
    guild(id: $guildId) {
      channels {
        id
        type
        name
        nsfw
        position
        permissions
        parentID
      }
    }
  }
`;
