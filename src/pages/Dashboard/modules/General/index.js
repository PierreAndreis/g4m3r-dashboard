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
  align-items: flex-start;

  & > div {
    margin-bottom: 20px;
    margin-right: 20px;
  }
`;

const feedbackData = [
  {
    title: "Bugs Status",
    query: "guild.settings.settings.feedback.bug.status",
    mutate: "bugStatus",
    options: [
      {
        optionTitle: "Channel",
        values: extractChannel,
        optionQuery: "guild.settings.settings.feedback.bug.channel",
        optionMutate: "bugChannel",
      },
    ],
  },
];

const cleanUpTimezone = timezones =>
  timezones.map(timezone => ({
    key: timezone,
    value: timezone,
  }));

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
              <div className={boxesHeader}>
                <Box padding>
                  <Box.Body>
                    <Box.Option>
                      <div>Prefix</div>
                      <div>
                        <Editor.Input
                          mutate="prefix"
                          query="guild.settings.settings.prefix"
                          type="string"
                        />
                      </div>
                    </Box.Option>
                    <Box.Option>
                      <div>Timezone</div>
                      <div>
                        <Query query={qTimezone}>
                          {({ loading, error, data }) => {
                            if (loading) return "Loading";
                            if (error) return "Error";
                            let values = cleanUpTimezone(data.listTimezones);

                            return (
                              <Editor.Select
                                autoComplete
                                values={values}
                                mutate="timezone"
                                query="guild.settings.settings.timezone"
                              />
                            );
                          }}
                        </Query>
                      </div>
                    </Box.Option>
                    <Box.Option>
                      <div>Menu Closing Time</div>
                      <div>
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
                      </div>
                    </Box.Option>
                    <Box.Option>
                      <div>Delete Notifications Delay</div>
                      <div>
                        <Editor.Input
                          mutate="deleteNotificationTime"
                          query="guild.settings.settings.general.deleteNotificationTime"
                          type="number"
                        />
                      </div>
                    </Box.Option>
                  </Box.Body>
                </Box>

                <Box padding>
                  <Box.Body>
                    {generalPageToggles.map((opt, index) => {
                      return (
                        <Box.Option>
                          <div>{opt.title}</div>
                          <div>
                            <Editor.Checkbox query={opt.query} mutate={opt.mutate} />
                          </div>
                        </Box.Option>
                      );
                    })}
                  </Box.Body>
                </Box>
              </div>
            </section>
          )}

          {this.state.category === "Feedback" && (
            <section>
              <div className={boxesHeader}>
                <Box padding>
                  <Box.Body>
                    <Editor.CheckboxCollapse
                      label={<Box.Title>Ideas Status</Box.Title>}
                      query="guild.settings.settings.feedback.idea.status"
                      mutate="ideaStatus"
                    >
                      <Box.Option>
                        <div>Channel</div>
                        <div>
                          <Editor.Select
                            values={extractChannel}
                            query="guild.settings.settings.feedback.idea.channel"
                            mutate="ideaChannel"
                          />
                        </div>
                      </Box.Option>

                      <Box.Option>
                        <div>Color</div>
                        <div>
                          <Editor.ColorPicker
                            mutate="ideaColor"
                            query="guild.settings.settings.feedback.idea.color"
                          />
                        </div>
                      </Box.Option>

                      <Box.Option>
                        <div>Thumbs Up</div>
                        <div>
                          <Editor.Input
                            mutate="ideaThumbsUp"
                            query="guild.settings.settings.feedback.idea.thumbsUp"
                            type="emoji"
                          />
                        </div>
                      </Box.Option>

                      <Box.Option>
                        <div>Thumbs Down</div>
                        <div>
                          <Editor.Input
                            mutate="ideaThumbsDown"
                            query="guild.settings.settings.feedback.idea.thumbsDown"
                            type="emoji"
                          />
                        </div>
                      </Box.Option>
                    </Editor.CheckboxCollapse>
                  </Box.Body>
                </Box>

                <Box padding>
                  <Box.Body>
                    <Editor.CheckboxCollapse
                      label={<Box.Title>Bug Status</Box.Title>}
                      query="guild.settings.settings.feedback.bug.status"
                      mutate="bugStatus"
                    >
                      <Box.Option>
                        <div>Channel</div>
                        <div>
                          <Editor.Select
                            values={extractChannel}
                            query="guild.settings.settings.feedback.bug.channel"
                            mutate="bugChannel"
                          />
                        </div>
                      </Box.Option>

                      <Box.Option>
                        <div>Color</div>
                        <div>
                          <Editor.ColorPicker
                            mutate="bugColor"
                            query="guild.settings.settings.feedback.bug.color"
                          />
                        </div>
                      </Box.Option>

                      <Box.Option>
                        <div>Thumbs Up</div>
                        <div>
                          <Editor.Input
                            mutate="bugThumbsUp"
                            query="guild.settings.settings.feedback.bug.thumbsUp"
                            type="emoji"
                          />
                        </div>
                      </Box.Option>

                      <Box.Option>
                        <div>Thumbs Down</div>
                        <div>
                          <Editor.Input
                            mutate="bugThumbsDown"
                            query="guild.settings.settings.feedback.bug.thumbsDown"
                            type="emoji"
                          />
                        </div>
                      </Box.Option>
                    </Editor.CheckboxCollapse>
                  </Box.Body>
                </Box>
              </div>
            </section>
          )}

          {this.state.category === "Events" && (
            <section>
              <div className={boxesHeader}>
                <Box padding>
                  <Box.Body>
                    <Editor.CheckboxCollapse
                      label={<Box.Title>Use Event Defaults</Box.Title>}
                      query="guild.settings.settings.events.useDefault"
                      mutate="useDefault"
                    >
                      <Box.Option>
                        <div>Duration</div>
                        <div>
                          <Editor.Input
                            mutate="eventDuration"
                            query="guild.settings.settings.events.duration"
                            type={"number"}
                          />
                        </div>
                      </Box.Option>

                      <Box.Option>
                        <div>Max Attendees Allowed</div>
                        <div>
                          <Editor.Input
                            mutate="maxAttendees"
                            query="guild.settings.settings.events.maxAttendees"
                            type={"number"}
                          />
                        </div>
                      </Box.Option>

                      <Box.Option>
                        <div>Game</div>
                        <div>
                          <Editor.Input
                            mutate="defaultEventGame"
                            query="guild.settings.settings.events.game"
                          />
                        </div>
                      </Box.Option>

                      <Box.Option>
                        <div>Reminder Time</div>
                        <div>
                          <Editor.Input
                            mutate="defaultReminder"
                            query="guild.settings.settings.events.defaultReminder"
                            type={"number"}
                          />
                        </div>
                      </Box.Option>

                      <Box.Option>
                        <div>Auto Advertise</div>
                        <div>
                          <Editor.Checkbox
                            query="guild.settings.settings.events.advertiseAllEvents"
                            mutate="advertiseAllEvents"
                          />
                        </div>
                      </Box.Option>

                      <Box.Option>
                        <div>Advertise Channel</div>
                        <div>
                          <Editor.Select
                            values={extractChannel}
                            mutate="advertiseChannel"
                            query="guild.settings.settings.events.advertiseChannel"
                          />
                        </div>
                      </Box.Option>
                    </Editor.CheckboxCollapse>
                  </Box.Body>
                </Box>

                <Box padding>
                  <Box.Body>
                    <Box.Title>Event Permissions</Box.Title>
                    <Box.Option>
                      <div>Create Events Permission</div>
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
                    </Box.Option>
                    <Box.Option>
                      <div>Add Member Permission</div>
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
                    </Box.Option>
                  </Box.Body>
                </Box>
              </div>
            </section>
          )}

          {this.state.category === "Tags/Stories" && (
            <section>
              <div className={boxesHeader}>
                <Box padding>
                  <Box.Title>Tag Permissions</Box.Title>
                  <Box.Body>
                    <Box.Option>
                      <div>Create</div>

                      <Query
                        query={qClientBasic}
                        variables={{ clientId: process.env.REACT_APP_CLIENT_ID }}
                      >
                        {({ loading, error, data }) => {
                          if (loading) return "Loading";
                          if (error) return "Error";
                          const values = data.client.settings.permissionLevels.map(
                            perm => ({
                              key: perm.id,
                              value: perm.value,
                            })
                          );

                          return (
                            <Editor.Select
                              values={values}
                              mutate={"tagsAllowCreation"}
                              query={"guild.settings.settings.tags.allowCreation"}
                            />
                          );
                        }}
                      </Query>
                    </Box.Option>
                    <Box.Option>
                      <div>Use</div>
                      <Query
                        query={qClientBasic}
                        variables={{ clientId: process.env.REACT_APP_CLIENT_ID }}
                      >
                        {({ loading, error, data }) => {
                          if (loading) return "Loading";
                          if (error) return "Error";
                          const values = data.client.settings.permissionLevels.map(
                            perm => ({
                              key: perm.id,
                              value: perm.value,
                            })
                          );
                          return (
                            <Editor.Select
                              values={values}
                              mutate="tagsAllowUsage"
                              query="guild.settings.settings.tags.allowUsage"
                            />
                          );
                        }}
                      </Query>
                    </Box.Option>

                    <Box.Option>
                      <div>Trigger Deletion</div>
                      <div>
                        <Editor.Checkbox
                          query="guild.settings.settings.tags.tagDeletion"
                          mutate="tagDeletion"
                        />
                      </div>
                    </Box.Option>
                  </Box.Body>
                </Box>

                <Box padding>
                  <Box.Title>Stories Permissions</Box.Title>
                  <Box.Body>
                    <Box.Option>
                      <div>Create</div>

                      <Query
                        query={qClientBasic}
                        variables={{ clientId: process.env.REACT_APP_CLIENT_ID }}
                      >
                        {({ loading, error, data }) => {
                          if (loading) return "Loading";
                          if (error) return "Error";
                          const values = data.client.settings.permissionLevels.map(
                            perm => ({
                              key: perm.id,
                              value: perm.value,
                            })
                          );

                          return (
                            <Editor.Select
                              values={values}
                              mutate="storiesAllowCreation"
                              type="Permission"
                              query="guild.settings.settings.stories.allowCreation"
                            />
                          );
                        }}
                      </Query>
                    </Box.Option>
                    <Box.Option>
                      <div>Use</div>
                      <Query
                        query={qClientBasic}
                        variables={{ clientId: process.env.REACT_APP_CLIENT_ID }}
                      >
                        {({ loading, error, data }) => {
                          if (loading) return "Loading";
                          if (error) return "Error";
                          const values = data.client.settings.permissionLevels.map(
                            perm => ({
                              key: perm.id,
                              value: perm.value,
                            })
                          );
                          return (
                            <Editor.Select
                              values={values}
                              mutate="storiesAllowCreation"
                              type="Permission"
                              query="guild.settings.settings.stories.allowCreation"
                            />
                          );
                        }}
                      </Query>
                    </Box.Option>

                    <Box.Option>
                      <div>Trigger Deletion</div>
                      <div>
                        <Editor.Checkbox
                          query="guild.settings.settings.stories.storyDeletion"
                          mutate="storyDeletion"
                        />
                      </div>
                    </Box.Option>
                  </Box.Body>
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
