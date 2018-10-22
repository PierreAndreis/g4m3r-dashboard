import gql from "graphql-tag";

export default gql`
  mutation editGuild($guildId: String!, $input: guildInput!) {
    set(id: $guildId, input: $input) {
      name
      id
      settings {
        settings {
          autoAssignRoles {
            mainRole
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
          verify {
            status
            category
            first
            role
          }
        }
      }
    }
  }
`;