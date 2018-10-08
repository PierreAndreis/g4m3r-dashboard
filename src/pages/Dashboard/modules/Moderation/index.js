import React, { Component } from "react";
import { css } from "emotion";

import { Heading, SubHeader, Heading2 } from "../../../../components/Typography";
import Box from "../../../../components/Box";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import Checkbox from "../../../../components/Checkbox";
import Editor from "../../../../components/Editor";
import qClientBasic from "../../../../graphql/queries/client/clientBasic";
import qChannels from "../../../../graphql/queries/guild/channels";
import qGuildBasic from "../../../../graphql/queries/guild/guildBasic";
// import qPermissions from "../../../../graphql/queries/client/permissions";

const serverLogsStatus = true;
const currentModMailStatus = true;
const currentCapitalSpamStatus = true;
const currentNaughtyWordFilterStatus = true;

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
      <Editor query={qGuildBasic} mutation={mutationQuery}>
        {makeLineBreak(props.isChannel)}
        <Box.Title>
          {props.type} {props.isChannel ? "Channel" : "Role"}
        </Box.Title>
        <Query query={qGuildBasic} variables={{ guildId: props.guildId }}>
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
        </Query>
      </Editor>
    </div>
  );
};

const createStatusAndChannelsBoxes = props => {
  return (
    <div key={props.mutateString}>
      <Editor query={qChannels} mutation={mutationQuery}>
        <Box padding style={{ width: "100%" }}>
          <Box.Title>{props.type} Log</Box.Title>
          <Box.Body>
            <Checkbox>Status</Checkbox>
            {channelOrRoleSelector({
              isChannel: true,
              type: props.type,
              mutateString: props.mutateString,
              query: props.query,
              guildId: props.guildId,
            })}
          </Box.Body>
        </Box>
      </Editor>
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
    mutate: "guild.settings.settings.moderation.channel",
  },
  {
    name: "Public",
    status: false,
    query: "guild.channels",
    mutate: "guild.settings.settings.moderation.publicModlogChannel",
  },
  {
    name: "Server",
    status: true,
    query: "guild.channels",
    mutate: "guild.settings.settings.serverLogs.mainChannel",
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
      <Editor query={qGuildBasic} mutation={mutationQuery}>
        <Heading2>Individual Server Logs</Heading2>
        <div className={boxesHeader}>
          {serverLogs.map((opt, index) => {
            return (
              <div>
                <Box padding style={{ width: "100%" }}>
                  <Box.Title>{opt.name} Log</Box.Title>
                  <Box.Body>
                    {makeServerLogToggles({
                      key: index,
                      title: "Status",
                      query: `guild.settings.settings.serverLogs.${opt.mutate}.status`,
                      mutate: `guild.settings.settings.serverLogs.${opt.mutate}.status`,
                    })}
                    {makeServerLogToggles({
                      key: index,
                      title: "Log Publically",
                      query: `guild.settings.settings.serverLogs.${
                        opt.mutate
                      }.logPublically`,
                      mutate: `guild.settings.settings.serverLogs.${
                        opt.mutate
                      }.logPublically`,
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
      </Editor>
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
        <section>
          <Heading2>Moderation Logs</Heading2>
          // TODO: Fix the queries to actually edit the settings when toggled.
          <div className={boxesHeader}>
            {mainLogs.map((opt, index) => {
              return createStatusAndChannelsBoxes({
                key: index,
                type: opt.name,
                currentStatus: opt.status,
                query: opt.query,
                mutateString: opt.mutate,
                guildId,
              });
            })}
            {serverLogsStatus ? makeIndividualServerLogs({ guildId }) : null}
          </div>
        </section>

        <section>
          <Heading2>Moderation Values</Heading2>
          <div className={boxesHeader}>
            <Editor query={qGuildBasic} mutation={mutationQuery}>
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
            </Editor>
          </div>
        </section>

        <section>
          <Heading2>Mute Roles</Heading2>
          <div className={boxesHeader}>
            <Editor query={qGuildBasic} mutation={mutationQuery}>
              <Box padding>
                {channelOrRoleSelector({
                  isChannel: false,
                  type: "Text Muted",
                  mutateString: "guild.settings.settings.moderation.mutedRoles.text",
                  guildId,
                })}

                {channelOrRoleSelector({
                  isChannel: false,
                  type: "Voice Muted",
                  mutateString: "guild.settings.settings.moderation.mutedRoles.voice",
                  guildId,
                })}
              </Box>
            </Editor>
          </div>
        </section>

        <section>
          <Heading2>Mod Mails</Heading2>
          <div className={boxesHeader}>
            <Editor query={qGuildBasic} mutation={mutationQuery}>
              <Box padding>
                <Box.Title>Mod Mails</Box.Title>
                <Editor.Checkbox
                  query="guild.settings.settings.mail.activated"
                  mutate="activated"
                  children="Status"
                />

                <Box.Title>Permission To Reply</Box.Title>
                <Query query={qClientBasic}>
                  {({ loading, error, data }) => {
                    if (loading) return "Loading";
                    if (error) return "Error";
                    const values = data.client.settings.settings.permissionLevels;
                    console.log("perms levels", data);
                    return (
                      <Editor.Select
                        values={values}
                        mutate="permissionToReply"
                        query="guild.settings.settings.mail.permissionToReply"
                      />
                    );
                  }}
                </Query>
              </Box>
              <Box padding>
                {currentModMailStatus
                  ? makeInputSettings({
                      title: "Max Mails Per Guild",
                      query: "guild.settings.settings.mail.maxMailsTotal",
                      mutate: "maxMailsTotal",
                    })
                  : null}
                {currentModMailStatus
                  ? makeInputSettings({
                      title: "Max Mails Per User",
                      query: "guild.settings.settings.mail.maxMailPerUser",
                      mutate: "maxMailPerUser",
                    })
                  : null}
              </Box>
            </Editor>
          </div>
        </section>

        <section>
          <Heading2>Auto Moderation</Heading2>
          <div className={boxesHeader}>
            <Editor query={qGuildBasic} mutation={mutationQuery}>
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
                  query="guild.settings.settings.mail.activated"
                  mutate="activated"
                  children="Status"
                />
                {currentCapitalSpamStatus
                  ? makeInputSettings({
                      title: "Max Allowed Percentage",
                      query:
                        "guild.settings.settings.moderation.capitalPercentage.amount",
                      mutate: "amount",
                    })
                  : null}
              </Box>

              <Box padding>
                <Box.Title>Naughty Words</Box.Title>
                <Editor.Checkbox
                  query="guild.settings.settings.naughtyWords.status"
                  mutate="activated"
                  children="Status"
                />

                {currentNaughtyWordFilterStatus
                  ? makeInputSettings({
                      title: "Naughty Words",
                      query: "guild.settings.settings.moderation.naughtyWords.words",
                      mutate: "words",
                    })
                  : null}
              </Box>
            </Editor>
            {/*

              */}
            // TODO: Unique Role Sets are missing need to think how to do it.
          </div>
        </section>

        <section>
          <Heading2>Welcome/Goodbye</Heading2>
          <div className={boxesHeader}>
            <Editor query={qGuildBasic} mutation={mutationQuery}>
              <Box padding>
                <Box.Title>Welcome Status</Box.Title>
                <Box.Body>
                  <Editor.Checkbox
                    query="guild.settings.settings.hibye.welcome.channel"
                    mutate="channel"
                    children="Channel"
                  />
                  <br />
                  <Editor.Checkbox
                    query="guild.settings.settings.hibye.welcome.dm"
                    mutate="dm"
                    children="DM"
                  />
                </Box.Body>
              </Box>
              <Box padding>
                <Box.Title>Goodbye Status</Box.Title>
                <Box.Body>
                  <Editor.Checkbox
                    query="guild.settings.settings.hibye.goodbye.channel"
                    mutate="channel"
                    children="Channel"
                  />
                  <br />
                  <Editor.Checkbox
                    query="guild.settings.settings.hibye.goodbye.dm"
                    mutate="dm"
                    children="DM"
                  />
                </Box.Body>
              </Box>
              // TODO: Welcome and goodbye messages need to be done
            </Editor>
          </div>
        </section>

        <section>
          <Heading2>Verification</Heading2>
          <div className={boxesHeader}>
            <Editor query={qGuildBasic} mutation={mutationQuery}>
              <Box padding>
                <Box.Title>Verification Status</Box.Title>
                <Box.Body>
                  <Editor.Checkbox
                    query="guild.settings.settings.verify.status"
                    mutate="status"
                    children="Status"
                  />
                </Box.Body>
              </Box>

              <Box padding>
                {channelOrRoleSelector({
                  isChannel: true,
                  type: "Verification Category",
                  mutateString: `guild.settings.settings.verify.category`,
                  needCategory: true,
                  guildId,
                })}
              </Box>

              <Box padding>
                <Box.Title>Verification First Message</Box.Title>
                <Box.Body>
                  // TODO: validate this is a embed
                  <Editor.Input
                    mutate="first"
                    query="guild.settings.settings.verify.first"
                  />
                </Box.Body>
              </Box>

              <Box padding>
                {channelOrRoleSelector({
                  isChannel: false,
                  type: "Verification",
                  mutateString: `guild.settings.settings.verify.role`,
                  guildId,
                })}
              </Box>

              <Box padding>
                <Box.Title>Reset Verification</Box.Title>
                <Box.Body>
                  // TODO: Add some button here to reset the verification settings.
                </Box.Body>
              </Box>
            </Editor>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default ModerationEditor;
