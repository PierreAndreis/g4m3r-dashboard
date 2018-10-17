import gql from "graphql-tag";

export default gql`
  query guild($guildId: ID) {
    guild(id: $guildId) {
      id
      settings {
        settings {
          commands {
            name
            msgDelete
            permission {
              disabled
              disabledChannels
              disabledRoles
              enabledChannels
              enabledRoles
            }
          }
        }
      }
    }
  }
`;
