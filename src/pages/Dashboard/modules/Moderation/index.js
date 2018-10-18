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

const channelOrRoleSelector = props => {
  return (
    <div>
      {props.type}
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
      <br />
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
    name: "Mod Logs",
    query: "guild.channels",
    mutate: "guild.settings.settings.moderation.channel",
    checkboxMutate: "modlogStatus",
    checkboxQuery: "guild.settings.settings.moderation.status",
  },
  {
    name: "Public Logs",
    query: "guild.channels",
    mutate: "guild.settings.settings.moderation.publicModlogChannel",
    checkboxMutate: "publiclogStatus",
    checkboxQuery: "guild.settings.settings.moderation.publicModlogStatus",
  },
  {
    name: "Server Logs",
    query: "guild.channels",
    mutate: "guild.settings.settings.serverLogs.mainChannel",
    checkboxMutate: "serverlogStatus",
    checkboxQuery: "guild.settings.settings.serverLogs.status",
  },
];

const serverLogs = [
  { name: "Role Create", mutate: "roleCreate" },
  { name: "Role Delete", mutate: "roleDelete" },
  { name: "Role Update", mutate: "roleUpdate" },
  { name: "Member Add", mutate: "memberAdd" },
  { name: "Member Remove", mutate: "memberRemove" },
  { name: "Command Ran", mutate: "cmdRan" },
  { name: "Tag Ran", mutate: "tagRan" },
  { name: "Story Ran", mutate: "storyRan" },
  { name: "Message Delete", mutate: "msgDeleted" },
  { name: "Message Edit", mutate: "msgUpdate" },
  { name: "Emoji Create", mutate: "emojiCreate" },
  { name: "Emoji Delete", mutate: "emojiDelete" },
  { name: "Emoji Update", mutate: "emojiUpdate" },
  { name: "Channel Create", mutate: "channelCreate" },
  { name: "Channel Delete", mutate: "channelDelete" },
  { name: "Channel Update", mutate: "channelUpdate" },
  { name: "Server Deaf", mutate: "serverDeaf" },
  { name: "Server Mute", mutate: "serverMute" },
  { name: "Nickname Change", mutate: "nicknameChanged" },
  { name: "Member Perms", mutate: "memberRolePermissionsChanged" },
  { name: "Member Roles", mutate: "memberRoleUpdated" },
  { name: "Member Ban", mutate: "guildBanAdd" },
  { name: "Member Unban", mutate: "guildBanRemove" },
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

const modFeatureToggles = [
  {
    query: "guild.settings.settings.mail.activated",
    mutate: "modMailStatus",
    children: "Mod Mail Status",
  },
  {
    query: "guild.settings.settings.moderation.capitalPercentage.status",
    mutate: "capitalPercentageStatus",
    children: "Capital Spam Filter Status",
  },
  {
    query: "guild.settings.settings.moderation.naughtyWords.status",
    mutate: "naughtyWordStatus",
    children: "Naughty Word Filter Status",
  },
  {
    query: "guild.settings.settings.hibye.welcome.channel",
    mutate: "welcomeChannelStatus",
    children: "Welcome Channel Status",
  },
  {
    query: "guild.settings.settings.hibye.welcome.dm",
    mutate: "welcomeDmStatus",
    children: "Welcome DM Status",
  },
  {
    query: "guild.settings.settings.hibye.goodbye.channel",
    mutate: "goodbyeChannelStatus",
    children: "Goodbye Channel Status",
  },
  {
    query: "guild.settings.settings.hibye.goodbye.dm",
    mutate: "goodbyeDmStatus",
    children: "Goodbye DM Status",
  },
  {
    query: "guild.settings.settings.verify.status",
    mutate: "verifyStatus",
    children: "Verification System Status",
  },
];

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
              <Box padding>
                <Box.Title>Log Toggles</Box.Title>
                <Box.Body>
                  <br />
                  {mainLogs.map((opt, index) => {
                    return (
                      <div>
                        <Editor.Checkbox
                          key={index}
                          query={opt.checkboxQuery}
                          mutate={opt.checkboxMutate}
                          children={opt.name}
                        />
                        <br />
                        <br />
                      </div>
                    );
                  })}
                </Box.Body>
              </Box>

              <Box padding>
                <Box.Title>Log Channel Selector</Box.Title>
                <Box.Body>
                  {mainLogs.map((opt, index) => {
                    return (
                      <div key={index}>
                        {channelOrRoleSelector({
                          isChannel: true,
                          type: opt.name,
                          mutateString: opt.mutate,
                          query: opt.query,
                          guildId,
                        })}
                      </div>
                    );
                  })}
                </Box.Body>
              </Box>

              <Box padding>
                <Box.Title>Moderation Feature Toggles</Box.Title>
                <Box.Body>
                  {modFeatureToggles.map((opt, index) => {
                    return (
                      <div key={index}>
                        <Editor.Checkbox
                          query={opt.query}
                          mutate={opt.mutate}
                          children={opt.children}
                        />
                      </div>
                    );
                  })}
                </Box.Body>
              </Box>
            </div>

            <Heading2>Individual Server Logs</Heading2>
            <div className={boxesHeader}>
              <div className={boxesHeader}>
                <Box padding>
                  <Box.Title>Server Log Status Toggles</Box.Title>
                  <Box.Body>
                    {serverLogs.map((opt, index) => {
                      return (
                        <div key={index}>
                          <Editor.Checkbox
                            query={`guild.settings.settings.serverLogs.${
                              opt.mutate
                            }.status`}
                            mutate={`${opt.mutate}Status`}
                            children={opt.name}
                          />
                          <Editor.Checkbox
                            query={`guild.settings.settings.serverLogs.${
                              opt.mutate
                            }.logPublically`}
                            mutate={`${opt.mutate}LogPublically`}
                            children={`${opt.name} Public Log`}
                          />
                          <br />
                          <br />
                        </div>
                      );
                    })}
                  </Box.Body>
                </Box>

                <Box padding>
                  <Box.Title>Server Logs Channel Selector</Box.Title>
                  <Box.Body>
                    {serverLogs.map((opt, index) => {
                      return (
                        <div key={index}>
                          {channelOrRoleSelector({
                            isChannel: true,
                            type: opt.name,
                            mutateString: `guild.settings.settings.serverLogs.${
                              opt.mutate
                            }.channel`,
                            guildId,
                          })}
                          <br />
                          <br />
                        </div>
                      );
                    })}
                  </Box.Body>
                </Box>
              </div>
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
                {makeInputSettings({
                  title: "Max Allowed Percentage",
                  query: "guild.settings.settings.moderation.capitalPercentage.amount",
                  mutate: "capitalPercentageAmount",
                })}
              </Box>
              <Box padding>
                <Box.Title>Naughty Words</Box.Title>
                {/*makeInputSettings({
                  title: "Naughty Words",
                  query: "guild.settings.settings.moderation.naughtyWords.words",
                  mutate: "naughtyWordWords",
                })*/}
              </Box>
            </div>
          </section>

          <section>
            <Heading2>Verification</Heading2>
            <div className={boxesHeader}>
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
