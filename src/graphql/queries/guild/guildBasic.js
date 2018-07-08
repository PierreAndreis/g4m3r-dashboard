import gql from "graphql-tag";

export default gql`
  query guild($guildId: String) {
    guild(id: $guildId) {
      id
      name
      configs {
        settings {
          admins {
            id
            username
            displayAvatarURL
            configs {
              accounts {
                id
                name
              }
            }
          }
        }
      }
    }
  }
`;
