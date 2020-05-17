import gql from "graphql-tag";

export default gql`
  mutation editGuild($guildId: String!, $input: guildInput!) {
    set(id: $guildId, input: $input) {
      name
      id
      settings {
        settings {
          allowAfkResponses
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
              logPublicly
            }
            roleUpdate {
              status
              channel
              logPublicly
            }
            memberAdd {
              status
              channel
              logPublicly
            }
            roleCreate {
              status
              channel
              logPublicly
            }
            memberRemove {
              status
              channel
              logPublicly
            }
            cmdRan {
              status
              channel
              logPublicly
            }
            tagRan {
              status
              channel
              logPublicly
            }
            storyRan {
              status
              channel
              logPublicly
            }
            msgDeleted {
              status
              channel
              logPublicly
            }
            msgUpdate {
              status
              channel
              logPublicly
            }
            emojiCreate {
              status
              channel
              logPublicly
            }
            emojiDelete {
              status
              channel
              logPublicly
            }
            emojiUpdate {
              status
              channel
              logPublicly
            }
            channelCreate {
              status
              channel
              logPublicly
            }
            channelDelete {
              status
              channel
              logPublicly
            }
            channelUpdate {
              status
              channel
              logPublicly
            }
            serverDeaf {
              status
              channel
              logPublicly
            }
            serverMute {
              status
              channel
              logPublicly
            }
            nicknameChanged {
              status
              channel
              logPublicly
            }
            memberRolePermissionsChanged {
              status
              channel
              logPublicly
            }
            memberRoleUpdated {
              status
              channel
              logPublicly
            }
            guildBanAdd {
              status
              channel
              logPublicly
            }
            guildBanRemove {
              status
              channel
              logPublicly
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
