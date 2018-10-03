import gql from "graphql-tag";

export default gql`
  query guild($guildId: ID) {
    guild(id: $guildId) {
      commands {
        name
        msgDelete
        permission {
          disabled
          disabledChannels {
            id
          }
          disabledRoles {
            id
          }
          enabledChannels {
            id
          }
          enabledRoles {
            id
          }
        }
      }
    }
  }
`;
