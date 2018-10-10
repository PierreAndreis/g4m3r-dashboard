import React, { Component } from "react";
import { css } from "emotion";

import { Heading, SubHeader, Heading2 } from "../../../../components/Typography";
import Box from "../../../../components/Box";
// import Input from "../../../../components/Input";
// import Select from "../../../../components/Select";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import Checkbox from "../../../../components/Checkbox";
import SettingsToggler from "../../../../components/SettingsToggler";
import Editor from "../../../../components/Editor";
import qGuildBasic from "../../../../graphql/queries/guild/guildBasic";
import qTimezone from "../../../../graphql/queries/utils/timezone";
import qChannels from "../../../../graphql/queries/guild/channels";
import guildBasic from "../../../../graphql/queries/guild/guildBasic";

const boxesHeader = css`
  display: flex;
  flex-wrap: wrap;

  & > div {
    margin-bottom: 20px;
    margin-right: 20px;
  }
`;

const cleanUpTimezone = timezones =>
  timezones.map(timezone => ({
    key: timezone,
    value: timezone,
  }));

// todo: remove from here, put on graphql folder
const mutationQuery = gql`
  mutation editGuild($guildId: String!, $input: guildInput!) {
    set(id: $guildId, input: $input) {
      name
      id
      settings {
        settings {
          stories {
            storyDeletion
          }
          tags {
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

const makeGeneralPageToggle = props => {
  return (
    <div key={props.query}>
      <Editor.Checkbox query={props.query} mutate={props.mutate} children={props.title} />
      <br />
      <br />
    </div>
  );
};

const generalPageToggles = [
  {
    query: "guild.settings.settings.general.militaryTimeFormat",
    mutate: "militaryTimeFormat",
    title: "24 Hour Time Format",
  },
  {
    query: "guild.settings.settings.general.trackAnalytics",
    mutate: "trackAnalytics",
    title: "Enable Server Analytics",
  },
  {
    query: "guild.settings.settings.general.deleteNotification",
    mutate: "deleteNotification",
    title: "Delete All Notifications",
  },
  {
    query: "guild.settings.settings.feedback.idea.status",
    mutate: "ideaStatus",
    title: "Feedback Idea",
  },
  {
    query: "guild.settings.settings.feedback.bug.status",
    mutate: "bugStatus",
    title: "Feedback Bug",
  },
  {
    query: "guild.settings.settings.xp.notification.server.channel",
    mutate: "xpNotificationServerChannel",
    title: "In Channel Server Level Up Notifications",
  },
  {
    query: "guild.settings.settings.xp.notification.server.dm",
    mutate: "xpNotificationServerDM",
    title: "In DM Server Level Up Notifications",
  },
  {
    query: "guild.settings.settings.xp.notification.global.channel",
    mutate: "xpNotificationGlobalChannel",
    title: "In Channel Global Level Up Notifications",
  },
  {
    query: "guild.settings.settings.events.useDefault",
    mutate: "useDefault",
    title: "Use Default Event Settings",
  },
  {
    query: "guild.settings.settings.tags.tagDeletion",
    mutate: "tagDeletion",
    title: "Tag Trigger Deletion",
  },
  {
    query: "guild.settings.settings.stories.storyDeletion",
    mutate: "storyDeletion",
    title: "Story Trigger Deletion",
  },
  {
    query: "guild.settings.settings.events.advertiseAllEvents",
    mutate: "advertiseAllEvents",
    title: "Auto Advertise Events",
  },
];

class GeneralEditor extends Component {
  render() {
    let guildId = this.props.match.params.guildId;
    return (
      <React.Fragment>
        <section>
          <Heading>General</Heading>
          <SubHeader>
            Welcome to the G4M3R dashboard. Here you can edit any and all settings of your
            bot easily.
            <br />
            <br />
            This is the general settings page for your discord server. You can find other
            settings and features to edit on the other pages on the sidebar.
            <br />
            <br />
            Thank you for using G4M3R!
          </SubHeader>
        </section>
        <section>
          <Heading2>Overview</Heading2>
          <div className={boxesHeader}>
            <Editor query={qGuildBasic} mutation={mutationQuery}>
              <Box padding>
                <Box.Title>Prefix</Box.Title>
                <Box.Body>
                  <Editor.Input mutate="prefix" query="guild.settings.settings.prefix" />
                </Box.Body>
              </Box>
              <Box padding>
                <Box.Title>Timezone</Box.Title>
                <Box.Body>
                  <Query query={qTimezone}>
                    {({ loading, error, data }) => {
                      if (loading) return "Loading";
                      if (error) return "Error";
                      let values = cleanUpTimezone(data.listTimezones);

                      return (
                        <Editor.Select
                          values={values}
                          mutate="timezone"
                          query="guild.settings.settings.timezone"
                        />
                      );
                    }}
                  </Query>
                </Box.Body>
              </Box>
              <Box padding>
                <Box.Title>Menu Closing Time</Box.Title>
                <Box.Body>
                  <Editor.Input
                    mutate="menuTime"
                    query="guild.settings.settings.menuTime"
                  />
                </Box.Body>
              </Box>

              <Box padding>
                <Box.Title>Delete Notifications Delay</Box.Title>
                <Box.Body>
                  <Editor.Input
                    mutate="deleteNotificationTime"
                    query="guild.settings.settings.general.deleteNotificationTime"
                  />
                </Box.Body>
              </Box>

              <Box padding>
                <Box.Title>Feedback Idea Color</Box.Title>
                <Box.Body>
                  <Editor.Input
                    mutate="ideaColor"
                    query="guild.settings.settings.feedback.idea.color"
                  />
                </Box.Body>

                <Box.Title>Feedback Bug Color</Box.Title>
                <Box.Body>
                  <Editor.Input
                    mutate="bugColor"
                    query="guild.settings.settings.feedback.bug.color"
                  />
                </Box.Body>
              </Box>
              <Box padding>
                <Box.Title>Feedback Channels</Box.Title>
                <Box.Body>
                  Ideas Channel
                  <Query query={qGuildBasic} variables={{ guildId: guildId }}>
                    {({ loading, error, data }) => {
                      if (loading) return "Loading";
                      if (error) return "Error";
                      const values = data.guild.channels
                        .filter(channel => channel.type === "text")
                        .sort((a, b) => a.name.localeCompare(b.name))
                        .map(channel => ({
                          key: channel.id,
                          value: channel.name,
                        }));
                      return (
                        <Editor.Select
                          propKey={"id"}
                          propFetch={"name"}
                          findFromArray={true}
                          values={values}
                          mutate="ideaChannel"
                          query="guild.channels"
                        />
                      );
                    }}
                  </Query>
                  <br />
                  Bugs Channel
                  <Query query={qGuildBasic} variables={{ guildId: guildId }}>
                    {({ loading, error, data }) => {
                      if (loading) return "Loading";
                      if (error) return "Error";
                      const values = data.guild.channels
                        .filter(channel => channel.type === "text")
                        .sort((a, b) => a.name.localeCompare(b.name))
                        .map(channel => ({
                          key: channel.id,
                          value: channel.name,
                        }));
                      return (
                        <Editor.Select
                          propKey={"id"}
                          propFetch={"name"}
                          findFromArray={true}
                          values={values}
                          mutate="bugChannel"
                          query="guild.channels"
                        />
                      );
                    }}
                  </Query>
                </Box.Body>
              </Box>
              <Box padding>
                <Box.Title>Feedback Idea Thumbs Up</Box.Title>
                <Box.Body>
                  <Editor.Input
                    mutate="ideaThumbsUp"
                    query="guild.settings.settings.feedback.idea.thumbsUp"
                  />
                </Box.Body>

                <Box.Title>Feedback Idea Thumbs Down</Box.Title>
                <Box.Body>
                  <Editor.Input
                    mutate="ideaThumbsDown"
                    query="guild.settings.settings.feedback.idea.thumbsDown"
                  />
                </Box.Body>

                <Box.Title>Feedback Bug Thumbs Up</Box.Title>
                <Box.Body>
                  <Editor.Input
                    mutate="bugThumbsUp"
                    query="guild.settings.settings.feedback.bug.thumbsUp"
                  />
                </Box.Body>

                <Box.Title>Feedback Bug Thumbs Down</Box.Title>
                <Box.Body>
                  <Editor.Input
                    mutate="bugThumbsDown"
                    query="guild.settings.settings.feedback.bug.thumbsDown"
                  />
                </Box.Body>
              </Box>

              <Box padding>
                <Box.Title>General Settings</Box.Title>
                <Box.Body>
                  {generalPageToggles.map((opt, index) => {
                    return makeGeneralPageToggle({
                      query: opt.query,
                      mutate: opt.mutate,
                      title: opt.title,
                      key: index,
                    });
                  })}
                </Box.Body>
              </Box>
            </Editor>
          </div>
        </section>

        <section>
          <Heading2>Event Settings</Heading2>
          <div className={boxesHeader}>
            <Editor query={qGuildBasic} mutation={mutationQuery}>
              <Box padding>
                <Box.Title>Duration</Box.Title>
                <Box.Body>
                  <Editor.Input
                    mutate="eventDuration"
                    query="guild.settings.settings.events.duration"
                  />
                </Box.Body>
              </Box>

              <Box padding>
                <Box.Title>Max Attendees Allowed</Box.Title>
                <Box.Body>
                  <Editor.Input
                    mutate="maxAttendees"
                    query="guild.settings.settings.events.maxAttendees"
                  />
                </Box.Body>
              </Box>

              <Box padding>
                <Box.Title>Game</Box.Title>
                <Box.Body>
                  <Editor.Input
                    mutate="defaultEventGame"
                    query="guild.settings.settings.events.game"
                  />
                </Box.Body>
              </Box>

              <Box padding>
                <Box.Title>Reminder Time</Box.Title>
                <Box.Body>
                  <Editor.Input
                    mutate="defaultReminder"
                    query="guild.settings.settings.events.defaultReminder"
                  />
                </Box.Body>
              </Box>

              <Box padding>
                <Box.Title>Advertise Channels</Box.Title>
                <Box.Body>
                  <Query query={qGuildBasic} variables={{ guildId: guildId }}>
                    {({ loading, error, data }) => {
                      if (loading) return "Loading";
                      if (error) return "Error";
                      const values = data.guild.channels
                        .filter(channel => channel.type === "text")
                        .sort((a, b) => a.name.localeCompare(b.name))
                        .map(channel => ({
                          key: channel.id,
                          value: channel.name,
                        }));
                      return (
                        <Editor.Select
                          propKey={"id"}
                          propFetch={"name"}
                          findFromArray={true}
                          values={values}
                          mutate="advertiseChannel"
                          query="guild.channels"
                        />
                      );
                    }}
                  </Query>
                </Box.Body>
              </Box>
            </Editor>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default GeneralEditor;
