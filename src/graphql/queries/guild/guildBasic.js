import gql from "graphql-tag";

export default gql`
  query guild($guildId: ID) {
    guild(id: $guildId) {
      id
      name
      channels {
        id
        name
        type
      }
      roles {
        id
        name
        color
      }
      settings {
        settings {
          prefix
          events {
            advertiseAllEvents
            advertiseChannel
            defaultReminder
            defaultType
            duration
            game
            maxAttendees
            platform
            useDefault
          }
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
          menuTime
          moderation {
            status
            channel
            publicModlogChannel
            maxNoWarnings
            maxInactivityTime
            defaultInactivityRole
            mutedRoles {
              text
              voice
            }
          }
          autoAssignRoles {
            mainRole
          }
          serverLogs {
            status
            mainChannel
            roleDelete {
              status
              channel
              logPublically
            }
            roleUpdate {
              status
              channel
              logPublically
            }
            memberAdd {
              status
              channel
              logPublically
            }
            roleCreate {
              status
              channel
              logPublically
            }
            memberRemove {
              status
              channel
              logPublically
            }
            cmdRan {
              status
              channel
              logPublically
            }
            tagRan {
              status
              channel
              logPublically
            }
            storyRan {
              status
              channel
              logPublically
            }
            msgDeleted {
              status
              channel
              logPublically
            }
            msgUpdate {
              status
              channel
              logPublically
            }
            emojiCreate {
              status
              channel
              logPublically
            }
            emojiDelete {
              status
              channel
              logPublically
            }
            emojiUpdate {
              status
              channel
              logPublically
            }
            channelCreate {
              status
              channel
              logPublically
            }
            channelDelete {
              status
              channel
              logPublically
            }
            channelUpdate {
              status
              channel
              logPublically
            }
            serverDeaf {
              status
              channel
              logPublically
            }
            serverMute {
              status
              channel
              logPublically
            }
            nicknameChanged {
              status
              channel
              logPublically
            }
            memberRolePermissionsChanged {
              status
              channel
              logPublically
            }
            memberRoleUpdated {
              status
              channel
              logPublically
            }
            guildBanAdd {
              status
              channel
              logPublically
            }
            guildBanRemove {
              status
              channel
              logPublically
            }
          }
          stories {
            storyDeletion
          }
          tags {
            tagDeletion
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
