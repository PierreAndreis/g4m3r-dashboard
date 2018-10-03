import gql from "graphql-tag";

export default gql`
  query guild($guildId: ID) {
    guild(id: $guildId) {
      settings {
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
  }
`;
