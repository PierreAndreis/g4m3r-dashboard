import React, { Component } from "react";
import { css } from "emotion";
import { Heading, SubHeader, Heading2 } from "../../../../components/Typography";
import Box from "../../../../components/Box";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import Editor from "../../../../components/Editor";
import qGuildBasic from "../../../../graphql/queries/guild/guildBasic";

const boxesHeader = css`
  display: flex;
  flex-wrap: wrap;
  & > div {
    margin-bottom: 20px;
    margin-right: 20px;
  }
`;

const makeLineBreak = needBreak => {
  return needBreak ? <br /> : null;
};

const channelOrRoleSelector = props => {
  return (
    <div>
      {makeLineBreak(props.isChannel)}
      <Box.Title>
        {props.type} {props.isChannel ? "Channel" : "Role"}
      </Box.Title>
      {/*<Query query={qGuildBasic} variables={{ guildId: props.guildId }}>
        {({ loading, error, data }) => {
          if (loading) return "Loading";
          if (error) {
            console.log("it errored;");
            console.log(error);
            return "Error";
          }
          let values = data.guild[props.isChannel ? "channels" : "roles"];

          const channelType = props.needCategory ? "category" : "text";
          if (props.isChannel) {
            values = values.filter(channel => channel.type === channelType);
          } else values = values.filter(role => role.id !== props.guildId);
          values = values.sort((a, b) => a.name.localeCompare(b.name)).map(item => ({
            key: item.id,
            value: `${props.isChannel ? "#" : "@"}${item.name}`,
          }));
          return (
            <Editor.Select
              values={values}
              propKey={"id"}
              propFetch={"name"}
              findFromArray={true}
              mutate={props.mutateString}
              query={`guild.${props.isChannel ? "channels" : "roles"}`}
            />
          );
        }}
      </Query>*/}
    </div>
  );
};

const createStatusAndChannelsBoxes = props => {
  return (
    <div key={props.mutateString}>
      <Box padding style={{ width: "100%" }}>
        <Box.Title>{props.type} Log</Box.Title>
        <Box.Body>
          <Editor.Checkbox
            query={props.checkboxQuery}
            mutate={props.checkboxMutate}
            children={props.type}
          />
          {channelOrRoleSelector({
            isChannel: true,
            type: props.type,
            mutateString: props.mutateString,
            query: props.query,
            guildId: props.guildId,
          })}
        </Box.Body>
      </Box>
    </div>
  );
};

// todo: remove from here, put on graphql folder
const mutationQuery = gql`
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

const mainLogs = [
  {
    name: "Mod",
    status: true,
    query: "guild.channels",
    mutate: "modlogChannel",
    checkboxMutate: "modlogStatus",
    checkboxQuery: "guild.settings.settings.moderation.status",
  },
  {
    name: "Public",
    status: false,
    query: "guild.channels",
    mutate: "publiclogChannel",
    checkboxMutate: "publiclogStatus",
    checkboxQuery: "guild.settings.settings.moderation.publicModlogStatus",
  },
  {
    name: "Server",
    status: true,
    query: "guild.channels",
    mutate: "serverlogMainChannel",
    checkboxMutate: "serverlogStatus",
    checkboxQuery: "guild.settings.settings.serverLogs.status",
  },
];

const serverLogs = [
  { name: "Role Create", status: false, mutate: "roleCreate" },
  { name: "Role Delete", status: true, mutate: "roleDelete" },
  { name: "Role Update", status: true, mutate: "roleUpdate" },
  { name: "Member Add", status: true, mutate: "memberAdd" },
  {
    name: "Member Remove",
    status: true,
    mutate: "memberRemove",
  },
  { name: "Command Ran", status: true, mutate: "cmdRan" },
  { name: "Tag Ran", status: true, mutate: "tagRan" },
  { name: "Story Ran", status: true, mutate: "storyRan" },
  {
    name: "Message Delete",
    status: true,
    mutate: "msgDeleted",
  },
  { name: "Message Edit", status: true, mutate: "msgUpdate" },
  { name: "Emoji Create", status: true, mutate: "emojiCreate" },
  { name: "Emoji Delete", status: true, mutate: "emojiDelete" },
  { name: "Emoji Update", status: true, mutate: "emojiUpdate" },
  {
    name: "Channel Create",
    status: true,
    mutate: "channelCreate",
  },
  {
    name: "Channel Delete",
    status: true,
    mutate: "channelDelete",
  },
  {
    name: "Channel Update",
    status: true,
    mutate: "channelUpdate",
  },
  { name: "Server Deaf", status: true, mutate: "serverDeaf" },
  { name: "Server Mute", status: true, mutate: "serverMute" },
  {
    name: "Nickname Change",
    status: true,
    mutate: "nicknameChanged",
  },
  {
    name: "Member Perms",
    status: true,
    mutate: "memberRolePermissionsChanged",
  },
  {
    name: "Member Roles",
    status: true,
    mutate: "memberRoleUpdated",
  },
  { name: "Member Ban", status: true, mutate: "guildBanAdd" },
  {
    name: "Member Unban",
    status: true,
    mutate: "guildBanRemove",
  },
];

const makeServerLogToggles = props => {
  return (
    <div key={props.query}>
      <Editor.Checkbox query={props.query} mutate={props.mutate} children={props.title} />
    </div>
  );
};

const makeIndividualServerLogs = props => {
  return (
    <div>
      <Heading2>Individual Server Logs</Heading2>
      <div className={boxesHeader}>
        {serverLogs.map((opt, index) => {
          return (
            <div key={index}>
              <Box padding style={{ width: "100%" }}>
                <Box.Title>{opt.name} Log</Box.Title>
                <Box.Body>
                  {makeServerLogToggles({
                    key: index,
                    title: "Status",
                    query: `guild.settings.settings.serverLogs.${opt.mutate}.status`,
                    mutate: `${opt.mutate}Status`,
                  })}
                  {makeServerLogToggles({
                    key: index,
                    title: "Log Publically",
                    query: `guild.settings.settings.serverLogs.${
                      opt.mutate
                    }.logPublically`,
                    mutate: `${opt.mutate}LogPublically`,
                  })}
                  {channelOrRoleSelector({
                    isChannel: true,
                    type: opt.name,
                    mutateString: `guild.settings.settings.serverLogs.${
                      opt.mutate
                    }.channel`,
                    guildId: props.guildId,
                  })}
                </Box.Body>
              </Box>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const makeInputSettings = props => {
  return (
    <div>
      <Box.Title>{props.title}</Box.Title>
      <Box.Body>
        <Editor.Input mutate={props.mutate} query={props.query} />
      </Box.Body>
    </div>
  );
};

class ModerationEditor extends Component {
  render() {
    let guildId = this.props.match.params.guildId;
    return (
      <React.Fragment>
        <section>
          <Heading>Moderation</Heading>
          <SubHeader>
            Are you ready to set up all the moderation tools you need for your server?
            <br />
            <br />
            Our bots moderation tools help run Official gaming servers for servers like
            Arena of Valor Official Discord Server.
            <br />
            <br />
            Learning to master the moderation tools on G4M3R, can make your server just as
            amazing!
          </SubHeader>
        </section>
        <Editor query={qGuildBasic} mutation={mutationQuery}>
          <section>
            <Heading2>Moderation Logs</Heading2>
            <div className={boxesHeader}>
              {mainLogs.map((opt, index) => {
                return createStatusAndChannelsBoxes({
                  key: index,
                  type: opt.name,
                  currentStatus: opt.status,
                  query: opt.query,
                  mutateString: opt.mutate,
                  checkboxMutate: opt.checkboxMutate,
                  checkboxQuery: opt.checkboxQuery,
                  guildId,
                });
              })}
              {makeIndividualServerLogs({ guildId })}
            </div>
          </section>

          <section>
            <Heading2>Moderation Values</Heading2>
            <div className={boxesHeader}>
              <Box padding>
                {makeInputSettings({
                  title: "Max Warnings",
                  query: "guild.settings.settings.moderation.maxNoWarnings",
                  mutate: "maxNoWarnings",
                })}

                {channelOrRoleSelector({
                  isChannel: false,
                  type: "Max Warnings",
                  mutateString: "defaultMaxWarningsRole",
                  guildId,
                })}
              </Box>

              <Box padding>
                {makeInputSettings({
                  title: "Max Inactive Time",
                  query: "guild.settings.settings.moderation.maxInactivityTime",
                  mutate: "maxInactivityTime",
                })}

                {channelOrRoleSelector({
                  isChannel: false,
                  type: "Inactive",
                  mutateString: "defaultInactivityRole",
                  guildId,
                })}
              </Box>
            </div>
          </section>

          <section>
            <Heading2>Mute Roles</Heading2>
            <div className={boxesHeader}>
              <Box padding>
                {channelOrRoleSelector({
                  isChannel: false,
                  type: "Text Muted",
                  mutateString: "muteRoleText",
                  guildId,
                })}

                {channelOrRoleSelector({
                  isChannel: false,
                  type: "Voice Muted",
                  mutateString: "muteRoleVoice",
                  guildId,
                })}
              </Box>
            </div>
          </section>

          <section>
            <Heading2>Mod Mails</Heading2>
            <div className={boxesHeader}>
              <Box padding>
                <Box.Title>Mod Mails</Box.Title>
                <Editor.Checkbox
                  query="guild.settings.settings.mail.activated"
                  mutate="modMailStatus"
                  children="Status"
                />

                {/*<Box.Title>Permission To Reply</Box.Title>
                <Query query={qClientBasic} variables={{ clientId: "287128811961843712" }}>
                  {({ loading, error, data }) => {
                    if (loading) return "Loading";
                    if (error) return "Error";
                    const values = data.client.settings.permissionLevels;
                    console.log("perms levels", data);
                    return (
                      <Editor.Select
                        values={values}
                        mutate="permissionToReply"
                        query="guild.settings.settings.mail.permissionToReply"
                      />
                    );
                  }}
                </Query>*/}
              </Box>
              <Box padding>
                {makeInputSettings({
                  title: "Max Mails Per Guild",
                  query: "guild.settings.settings.mail.maxMailsTotal",
                  mutate: "maxMailsTotal",
                })}
                {makeInputSettings({
                  title: "Max Mails Per User",
                  query: "guild.settings.settings.mail.maxMailPerUser",
                  mutate: "maxMailPerUser",
                })}
              </Box>
            </div>
          </section>

          <section>
            <Heading2>Auto Moderation</Heading2>
            <div className={boxesHeader}>
              <Box padding>
                {channelOrRoleSelector({
                  isChannel: false,
                  type: "Auto Assign",
                  mutateString: "mainRole",
                  guildId,
                })}
              </Box>
              <Box padding>
                <Box.Title>Capital Spam</Box.Title>
                <Editor.Checkbox
                  query="guild.settings.settings.moderation.capitalPercentage.status"
                  mutate="capitalPercentageStatus"
                  children="Status"
                />
                {makeInputSettings({
                  title: "Max Allowed Percentage",
                  query: "guild.settings.settings.moderation.capitalPercentage.amount",
                  mutate: "capitalPercentageAmount",
                })}
              </Box>
              <Box padding>
                <Box.Title>Naughty Words</Box.Title>
                <Editor.Checkbox
                  query="guild.settings.settings.moderation.naughtyWords.status"
                  mutate="naughtyWordStatus"
                  children="Status"
                />

                {/*makeInputSettings({
                  title: "Naughty Words",
                  query: "guild.settings.settings.moderation.naughtyWords.words",
                  mutate: "naughtyWordWords",
                })*/}
              </Box>
            </div>
          </section>

          <section>
            <Heading2>Welcome/Goodbye</Heading2>
            <div className={boxesHeader}>
              <Box padding>
                <Box.Title>Welcome Status</Box.Title>
                <Box.Body>
                  <Editor.Checkbox
                    query="guild.settings.settings.hibye.welcome.channel"
                    mutate="welcomeChannelStatus"
                    children="Channel"
                  />
                  <br />
                  <Editor.Checkbox
                    query="guild.settings.settings.hibye.welcome.dm"
                    mutate="welcomeDmStatus"
                    children="DM"
                  />
                </Box.Body>
              </Box>
              <Box padding>
                <Box.Title>Goodbye Status</Box.Title>
                <Box.Body>
                  <Editor.Checkbox
                    query="guild.settings.settings.hibye.goodbye.channel"
                    mutate="goodbyeChannelStatus"
                    children="Channel"
                  />
                  <br />
                  <Editor.Checkbox
                    query="guild.settings.settings.hibye.goodbye.dm"
                    mutate="goodbyeDmStatus"
                    children="DM"
                  />
                </Box.Body>
              </Box>
            </div>
          </section>

          <section>
            <Heading2>Verification</Heading2>
            <div className={boxesHeader}>
              <Box padding>
                <Box.Title>Verification Status</Box.Title>
                <Box.Body>
                  <Editor.Checkbox
                    query="guild.settings.settings.verify.status"
                    mutate="verifyStatus"
                    children="Status"
                  />
                </Box.Body>
              </Box>

              <Box padding>
                {channelOrRoleSelector({
                  isChannel: true,
                  type: "Verification Category",
                  mutateString: "verifyCategory",
                  needCategory: true,
                  guildId,
                })}
              </Box>

              <Box padding>
                <Box.Title>Verification First Message</Box.Title>
                <Box.Body>
                  <Editor.Input
                    mutate="verifyFirst"
                    query="guild.settings.settings.verify.first"
                  />
                </Box.Body>
              </Box>

              <Box padding>
                {channelOrRoleSelector({
                  isChannel: false,
                  type: "Verification",
                  mutateString: "verifyRole",
                  guildId,
                })}
              </Box>

              <Box padding>
                <Box.Title>Reset Verification</Box.Title>
                <Box.Body />
              </Box>
            </div>
          </section>
        </Editor>
      </React.Fragment>
    );
  }
}

export default ModerationEditor;
