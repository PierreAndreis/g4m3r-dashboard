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
          allowAfkResponses
          prefix
          events {
            advertiseAllEvents
            advertiseChannel
            defaultReminder
            defaultType
            duration
            game
            maxAttendees
            permissions {
              add
              create
            }
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
          hibye {
            welcome {
              dm
              channel
            }
            goodbye {
              dm
              channel
            }
          }
          mail {
            activated
            permissionToReply
            maxMailPerUser
            maxMailsTotal
          }
          menuTime
          moderation {
            capitalPercentage {
              status
              amount
            }
            naughtyWords {
              status
              words
            }
            status
            channel
            publicModlogChannel
            publicModlogStatus
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
            allowCreation
            allowUsage
            storyDeletion
          }
          tags {
            allowCreation
            allowUsage
            tagDeletion
          }
          verify {
            status
            category
            first
            role
          }
          vip {
            isVIP
            vainglory {
              guildNotificationChannel
              maxInactiveTime
            }
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
