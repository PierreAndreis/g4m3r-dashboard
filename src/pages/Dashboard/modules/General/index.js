import React, { Component } from "react";
import { css } from "emotion";
import mutationQuery from "../../../../graphql/queries/mutations/general";
import { Heading, SubHeader, Heading2 } from "../../../../components/Typography";
import Box from "../../../../components/Box";
import { Query } from "react-apollo";
import Editor from "../../../../components/Editor";
import qGuildBasic from "../../../../graphql/queries/guild/guildBasic";
import qTimezone from "../../../../graphql/queries/utils/timezone";
import Button from "../../../../components/Button";
import { generalPageToggles } from "../../../../constants/general";
import qClientBasic from "../../../../graphql/queries/client/clientBasic";
import { extractChannel } from "../../../../util/transformers";
import Validation from "./../../../../global/validation";

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

const makeGeneralPageToggle = props => {
  return (
    <div key={props.query}>
      <Editor.Checkbox query={props.query} mutate={props.mutate} children={props.title} />
    </div>
  );
};

class GeneralEditor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpenModal: false,
      category: "Basic",
      categories: ["Basic", "Feedback", "Events", "Tags/Stories"],
    };
  }

  changeCategory = category => e => {
    this.setState({
      category,
    });
  };

  render() {
    return (
      <React.Fragment>
        <section>
          <Heading>General</Heading>
          <SubHeader>
            Welcome to the general settings page for G4M3R. You can find other features by
            clicking on the pages in the sidebar.
            <br />
            <br />
            Thank you for choosing G4M3R!
          </SubHeader>
        </section>

        <section>
          {this.state.categories.map(category => {
            return (
              <Button
                key={category}
                onClick={this.changeCategory(category)}
                simple
                active={this.state.category === category}
              >
                {category}
              </Button>
            );
          })}
        </section>

        <Editor query={qGuildBasic} mutation={mutationQuery}>
          {this.state.category === "Basic" && (
            <section>
              <Heading2>Overview</Heading2>
              <div className={boxesHeader}>
                <Box padding>
                  <Box.Title>Prefix</Box.Title>
                  <Box.Body>
                    <Editor.Input
                      mutate="prefix"
                      query="guild.settings.settings.prefix"
                      type="string"
                    />
                  </Box.Body>
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
                  <Box.Title>Menu Closing Time</Box.Title>
                  <Box.Body>
                    <Editor.Input
                      mutate="menuTime"
                      query="guild.settings.settings.menuTime"
                      type="number"
                      validate={Validation.all(
                        Validation.isNumber(),
                        Validation.numberMin(10),
                        Validation.numberMax(91)
                      )}
                    />
                  </Box.Body>
                  <Box.Title>Delete Notifications Delay</Box.Title>
                  <Box.Body>
                    <Editor.Input
                      mutate="deleteNotificationTime"
                      query="guild.settings.settings.general.deleteNotificationTime"
                      type="number"
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
              </div>
            </section>
          )}

          {this.state.category === "Feedback" && (
            <section>
              <Heading2>Overview</Heading2>

              <div className={boxesHeader}>
                <Box padding>
                  <Box.Title>Idea Status</Box.Title>
                  <Box.Body>
                    <Editor.Checkbox
                      query="guild.settings.settings.feedback.idea.status"
                      mutate="ideaStatus"
                      children="Feedback Idea Status"
                    />
                  </Box.Body>

                  <Box.Title>Bug Status</Box.Title>
                  <Box.Body>
                    <Editor.Checkbox
                      query="guild.settings.settings.feedback.idea.status"
                      mutate="bugStatus"
                      children="Feedback Bug Status"
                    />
                  </Box.Body>
                </Box>
                <Box padding>
                  <Box.Title>Idea Channel</Box.Title>
                  <Box.Body>
                    <Editor.Select
                      values={extractChannel}
                      mutate="ideaChannel"
                      query="guild.settings.settings.feedback.idea.channel"
                    />
                  </Box.Body>

                  <Box.Title>Bugs Channel</Box.Title>
                  <Box.Body>
                    <Editor.Select
                      values={extractChannel}
                      mutate="bugChannel"
                      query="guild.settings.settings.feedback.bug.channel"
                    />
                  </Box.Body>
                </Box>
                <Box padding>
                  <Box.Title>Feedback Idea Color</Box.Title>
                  <Box.Body>
                    <Editor.Input
                      mutate="ideaColor"
                      query="guild.settings.settings.feedback.idea.color"
                      type="hexcolor"
                    />
                  </Box.Body>

                  <Box.Title>Feedback Bug Color</Box.Title>
                  <Box.Body>
                    <Editor.Input
                      mutate="bugColor"
                      query="guild.settings.settings.feedback.bug.color"
                      type="hexcolor"
                    />
                  </Box.Body>
                </Box>
                <Box padding>
                  <Box.Title>Feedback Idea Thumbs Up</Box.Title>
                  <Box.Body>
                    <Editor.Input
                      mutate="ideaThumbsUp"
                      query="guild.settings.settings.feedback.idea.thumbsUp"
                      type="emoji"
                    />
                  </Box.Body>

                  <Box.Title>Feedback Idea Thumbs Down</Box.Title>
                  <Box.Body>
                    <Editor.Input
                      mutate="ideaThumbsDown"
                      query="guild.settings.settings.feedback.idea.thumbsDown"
                      type="emoji"
                    />
                  </Box.Body>
                </Box>

                <Box padding>
                  <Box.Title>Feedback Bug Thumbs Up</Box.Title>
                  <Box.Body>
                    <Editor.Input
                      mutate="bugThumbsUp"
                      query="guild.settings.settings.feedback.bug.thumbsUp"
                      type="emoji"
                    />
                  </Box.Body>

                  <Box.Title>Feedback Bug Thumbs Down</Box.Title>
                  <Box.Body>
                    <Editor.Input
                      mutate="bugThumbsDown"
                      query="guild.settings.settings.feedback.bug.thumbsDown"
                      type="emoji"
                    />
                  </Box.Body>
                </Box>
              </div>
            </section>
          )}

          {this.state.category === "Events" && (
            <section>
              <Heading2>Event Settings</Heading2>
              <div className={boxesHeader}>
                <Box padding>
                  <Box.Title>Event Defaults</Box.Title>
                  <Editor.Checkbox
                    query="guild.settings.settings.events.useDefault"
                    mutate="useDefault"
                    children="Use Default Event Settings"
                  />
                </Box>
                <Box padding>
                  <Box.Title>Duration</Box.Title>
                  <Box.Body>
                    <Editor.Input
                      mutate="eventDuration"
                      query="guild.settings.settings.events.duration"
                      type={"number"}
                    />
                  </Box.Body>
                </Box>

                <Box padding>
                  <Box.Title>Max Attendees Allowed</Box.Title>
                  <Box.Body>
                    <Editor.Input
                      mutate="maxAttendees"
                      query="guild.settings.settings.events.maxAttendees"
                      type={"number"}
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
                      type={"number"}
                    />
                  </Box.Body>
                </Box>

                <Box padding>
                  <Box.Title>Event Advertisements</Box.Title>
                  <Editor.Checkbox
                    query="guild.settings.settings.events.advertiseAllEvents"
                    mutate="advertiseAllEvents"
                    children="Auto Advertise Events"
                  />
                  <br />
                  <Box.Title>Advertise Channel</Box.Title>
                  <Box.Body>
                    <Editor.Select
                      values={extractChannel}
                      mutate="advertiseChannel"
                      query="guild.settings.settings.events.advertiseChannel"
                    />
                  </Box.Body>
                </Box>

                <Box padding>
                  <Box.Title>Create Events Permission</Box.Title>
                  <Query
                    query={qClientBasic}
                    variables={{ clientId: process.env.REACT_APP_CLIENT_ID }}
                  >
                    {({ loading, error, data }) => {
                      if (loading) return "Loading";
                      if (error) return "Error";
                      const values = data.client.settings.permissionLevels;
                      console.log("perms levels", data);
                      return (
                        <Editor.Select
                          values={values}
                          mutate={"eventsAllowCreation"}
                          query={"guild.settings.settings.events.permissions.create"}
                        />
                      );
                    }}
                  </Query>
                  <Box.Title>Use Stories Permission</Box.Title>
                  <Query
                    query={qClientBasic}
                    variables={{ clientId: process.env.REACT_APP_CLIENT_ID }}
                  >
                    {({ loading, error, data }) => {
                      if (loading) return "Loading";
                      if (error) return "Error";
                      const values = data.client.settings.permissionLevels;

                      return (
                        <Editor.Select
                          values={values}
                          mutate={"eventsAllowAddMember"}
                          query={"guild.settings.settings.events.permissions.add"}
                        />
                      );
                    }}
                  </Query>
                </Box>
              </div>
            </section>
          )}

          {this.state.category === "Tags/Stories" && (
            <section>
              <div className={boxesHeader}>
                <Box padding>
                  <Box.Title>Create Tags Permission</Box.Title>
                  <Query
                    query={qClientBasic}
                    variables={{ clientId: process.env.REACT_APP_CLIENT_ID }}
                  >
                    {({ loading, error, data }) => {
                      if (loading) return "Loading";
                      if (error) return "Error";
                      const values = data.client.settings.permissionLevels.map(perm => ({
                        key: perm.id,
                        value: perm.value,
                      }));

                      return (
                        <Editor.Select
                          values={values}
                          mutate={"tagsAllowCreation"}
                          query={"guild.settings.settings.tags.allowCreation"}
                        />
                      );
                    }}
                  </Query>

                  <Box.Title>Use Tags Permission</Box.Title>
                  <Query
                    query={qClientBasic}
                    variables={{ clientId: process.env.REACT_APP_CLIENT_ID }}
                  >
                    {({ loading, error, data }) => {
                      if (loading) return "Loading";
                      if (error) return "Error";
                      const values = data.client.settings.permissionLevels.map(perm => ({
                        key: perm.id,
                        value: perm.value,
                      }));
                      return (
                        <Editor.Select
                          values={values}
                          mutate={"tagsAllowUsage"}
                          query={"guild.settings.settings.tags.allowUsage"}
                        />
                      );
                    }}
                  </Query>
                </Box>

                <Box padding>
                  <Box.Title>Create Stories Permission</Box.Title>
                  <Query
                    query={qClientBasic}
                    variables={{ clientId: process.env.REACT_APP_CLIENT_ID }}
                  >
                    {({ loading, error, data }) => {
                      if (loading) return "Loading";
                      if (error) return "Error";
                      const values = data.client.settings.permissionLevels;
                      console.log("perms levels", data);
                      return (
                        <Editor.Select
                          values={values}
                          mutate={"storiesAllowCreation"}
                          type={"Permission"}
                          query={"guild.settings.settings.stories.allowCreation"}
                        />
                      );
                    }}
                  </Query>

                  <Box.Title>Use Stories Permission</Box.Title>
                  <Query
                    query={qClientBasic}
                    variables={{ clientId: process.env.REACT_APP_CLIENT_ID }}
                  >
                    {({ loading, error, data }) => {
                      if (loading) return "Loading";
                      if (error) return "Error";
                      const values = data.client.settings.permissionLevels;
                      console.log("perms levels", data);
                      return (
                        <Editor.Select
                          values={values}
                          mutate={"storiesAllowCreation"}
                          type={"Permission"}
                          query={"guild.settings.settings.stories.allowCreation"}
                        />
                      );
                    }}
                  </Query>
                </Box>
              </div>
            </section>
          )}
        </Editor>
      </React.Fragment>
    );
  }
}

export default GeneralEditor;
