import gql from "graphql-tag";

export default gql`
  mutation editGuild($guildId: String!, $input: guildInput!) {
    set(id: $guildId, input: $input) {
      name
      id
      settings {
        settings {
          stories {
            allowCreation
            allowUsage
            storyDeletion
          }
          tags {
            allowCreation
            allowUsage
            tagDeletion
          }
          events {
            advertiseAllEvents
            advertiseChannel
            defaultReminder
            defaultType
            duration
            game
            maxAttendees
            platform
            permissions {
              add
              create
            }
            useDefault
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
          general {
            militaryTimeFormat
            trackAnalytics
            deleteBurnMessage
            deleteNotification
            deleteNotificationTime
          }
          prefix
          menuTime
          moderation {
            status
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
