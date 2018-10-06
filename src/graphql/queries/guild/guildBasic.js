import gql from "graphql-tag";

export default gql`
  query guild($guildId: ID) {
    guild(id: $guildId) {
      id
      name
      settings {
        settings {
          prefix
          timezone
          general {
            militaryTimeFormat
          }
          commands {
            category
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
