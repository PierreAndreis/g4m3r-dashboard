import gql from "graphql-tag";

export const generalPageMutation = gql`
  mutation editGuild($guildId: String!, $input: guildInput!) {
    set(id: $guildId, input: $input) {
      name
      id
      settings {
        settings {
          prefix
          menuTime
          events {
            defaultReminder
            duration
            game
            maxAttendees
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
            militaryTimeFormat
            trackAnalytics
            deleteNotification
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