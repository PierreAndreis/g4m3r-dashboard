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
          menuTime
          events {
            useDefault
          }
          feedback {
            idea {
              color
              status
              channel
              thumbsUp
              thumbsDown
            }
            bug {
              color
              status
              channel
              thumbsUp
              thumbsDown
            }
          }
          general {
            deleteNotificationTime
          }
          tags {
            tagDeletion
          }
          stories {
            storyDeletion
          }
          xp {
            notification {
              server {
                channel
                dm
              }
              global {
                channel
              }
            }
          }
        }
      }
    }
  }
`;
