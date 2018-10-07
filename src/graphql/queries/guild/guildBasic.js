import gql from "graphql-tag";

export default gql`
  query guild($guildId: ID) {
    guild(id: $guildId) {
      id
      name
      channels {
        id
        name
      }
      roles {
        id
        name
        color
      }
      settings {
        settings {
          prefix
          timezone
          menuTime
          general {
            militaryTimeFormat
            deleteBurnMessage
            deleteNotification
            deleteNotificationTime
            trackAnalytics
          }
          feedback {
            idea {
              channel
              color
              status
              thumbsDown
              thumbsUp
            }
            bug {
              channel
              color
              status
              thumbsDown
              thumbsUp
            }
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
          moderation {
            status
            channel
            publicModlogChannel
          }
          serverLogs {
            mainChannel
          }
        }
      }
    }
  }
`;
