import React, { Component } from "react";
import { css } from "emotion";
import mutationQuery from "../../../../graphql/queries/mutations/general";
import { Heading, SubHeader } from "../../../../components/Typography";
import Box from "../../../../components/Box";
import { Query } from "react-apollo";
import Editor from "../../../../components/Editor";
import qGuildBasic from "../../../../graphql/queries/guild/guildBasic";
import qTimezone from "../../../../graphql/queries/utils/timezone";
import { generalPageToggles } from "../../../../constants/general";
import qClientBasic from "../../../../graphql/queries/client/clientBasic";
import { extractChannel } from "../../../../util/transformers";
import Validation from "./../../../../global/validation";
import TabsManager from "../../../../components/Tabs";
import HelpModal from "../../../../components/HelpModal";
import PrefixHelp from "../../../../constants/help/general/basic/PrefixHelp";
import TimezoneHelp from "../../../../constants/help/general/basic/TimezoneHelp";
import MenuClosingTimeHelp from "../../../../constants/help/general/basic/MenuClosingTimeHelp";
import DeleteNotificationsDelayHelp from "../../../../constants/help/general/basic/DeleteNotificationsDelayHelp";
import BugChannelHelp from "../../../../constants/help/general/feedback/BugChannelHelp";
import BugColorHelp from "../../../../constants/help/general/feedback/BugColorHelp";
import BugStatusHelp from "../../../../constants/help/general/feedback/BugStatusHelp";
import BugThumbsDownHelp from "../../../../constants/help/general/feedback/BugThumbsDownHelp";
import BugThumbsUpHelp from "../../../../constants/help/general/feedback/BugThumbsUpHelp";
import IdeasChannelHelp from "../../../../constants/help/general/feedback/IdeasChannelHelp";
import IdeasColorHelp from "../../../../constants/help/general/feedback/IdeasColorHelp";
import IdeasStatusHelp from "../../../../constants/help/general/feedback/IdeasStatusHelp";
import IdeasThumbsDownHelp from "../../../../constants/help/general/feedback/IdeasThumbsDownHelp";
import IdeasThumbsUpHelp from "../../../../constants/help/general/feedback/IdeasThumbsUpHelp";
import UseEventDefaultsHelp from "../../../../constants/help/general/events/UseEventDefaultsHelp";
import EventDurationHelp from "../../../../constants/help/general/events/EventDurationHelp";
import MaxAttendeesAllowedHelp from "../../../../constants/help/general/events/MaxAttendeesAllowedHelp";
import EventGameHelp from "../../../../constants/help/general/events/EventGameHelp";
import EventReminderTimeHelp from "../../../../constants/help/general/events/EventReminderTimeHelp";
import EventAutoAdvertiseHelp from "../../../../constants/help/general/events/EventAutoAdvertiseHelp";
import EventAdvertiseChannelHelp from "../../../../constants/help/general/events/EventAdvertiseChannelHelp";
import EventCreatePermissionHelp from "../../../../constants/help/general/events/EventCreatePermissionHelp";
import EventAddMemberPermissionHelp from "../../../../constants/help/general/events/EventAddMemberPermissionHelp";
import TagCreatePermissionHelp from "../../../../constants/help/general/tags-stories/TagCreatePermissionHelp";
import TagUsePermissionHelp from "../../../../constants/help/general/tags-stories/TagUsePermissionHelp";
import TagTriggerDeletionHelp from "../../../../constants/help/general/tags-stories/TagTriggerDeletionHelp";
import StoriesCreatePermissionHelp from "../../../../constants/help/general/tags-stories/StoriesCreatePermissionHelp";
import StoriesUsePermissionHelp from "../../../../constants/help/general/tags-stories/StoriesUsePermissionHelp";
import StoriesTriggerDeletionHelp from "../../../../constants/help/general/tags-stories/StoriesTriggerDeletionHelp";

const boxesHeader = css`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;

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

class GeneralEditor extends Component {
  constructor(props) {
    super(props);
    this.state = {
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

        <Editor query={qGuildBasic} mutation={mutationQuery}>
          <TabsManager>
            <TabsManager.Section name="Basic">
              <div className={boxesHeader}>
                <Box padding>
                  <Box.Body>
                    <Box.Option>
                      <div>Prefix</div>
                      <div>
                        <Editor.Input
                          mutate="prefix"
                          query="guild.settings.settings.prefix"
                        />
                      </div>
                      <div>
                        <HelpModal content={PrefixHelp} />
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
                      <div>
                        <HelpModal content={TimezoneHelp} />
                      </div>
                    </Box.Option>
                    <Box.Option>
                      <div>Menu Closing Time</div>
                      <div>
                        <Editor.Input
                          mutate="menuTime"
                          query="guild.settings.settings.menuTime"
                          validate={Validation.all(
                            Validation.isNumber(),
                            Validation.numberMin(10),
                            Validation.numberMax(91)
                          )}
                        />
                      </div>
                      <div>
                        <HelpModal content={MenuClosingTimeHelp} />
                      </div>
                    </Box.Option>
                    <Box.Option>
                      <div>Delete Notifications Delay</div>
                      <div>
                        <Editor.Input
                          mutate="deleteNotificationTime"
                          query="guild.settings.settings.general.deleteNotificationTime"
                          validate={Validation.all(
                            Validation.isNumber(),
                            Validation.numberMin(1000),
                            Validation.numberMax(100000)
                          )}
                        />
                      </div>
                      <div>
                        <HelpModal content={DeleteNotificationsDelayHelp} />
                      </div>
                    </Box.Option>
                  </Box.Body>
                </Box>

                <Box padding>
                  <Box.Body>
                    {generalPageToggles.map(opt => {
                      return (
                        <Box.Option key={opt.title}>
                          <div>{opt.title}</div>
                          <div>
                            <Editor.Checkbox query={opt.query} mutate={opt.mutate} />
                          </div>
                          <div>
                            <HelpModal content={opt.help} />
                          </div>
                        </Box.Option>
                      );
                    })}
                  </Box.Body>
                </Box>
              </div>
            </TabsManager.Section>

            <TabsManager.Section name="Feedback">
              <div className={boxesHeader}>
                <Box padding>
                  <Box.Body>
                    <Editor.CheckboxCollapse
                      label={
                        <Box.Title>
                          Ideas Status
                          <HelpModal content={IdeasStatusHelp} />
                        </Box.Title>
                      }
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
                        <div>
                          <HelpModal content={IdeasChannelHelp} />
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
                        <div>
                          <HelpModal content={IdeasColorHelp} />
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
                        <div>
                          <HelpModal content={IdeasThumbsUpHelp} />
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
                        <div>
                          <HelpModal content={IdeasThumbsDownHelp} />
                        </div>
                      </Box.Option>
                    </Editor.CheckboxCollapse>
                  </Box.Body>
                </Box>

                <Box padding>
                  <Box.Body>
                    <Editor.CheckboxCollapse
                      label={
                        <Box.Title>
                          Bug Status
                          <HelpModal content={BugStatusHelp} />
                        </Box.Title>
                      }
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
                        <div>
                          <HelpModal content={BugChannelHelp} />
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
                        <div>
                          <HelpModal content={BugColorHelp} />
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
                        <div>
                          <HelpModal content={BugThumbsUpHelp} />
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
                        <div>
                          <HelpModal content={BugThumbsDownHelp} />
                        </div>
                      </Box.Option>
                    </Editor.CheckboxCollapse>
                  </Box.Body>
                </Box>
              </div>
            </TabsManager.Section>

            <TabsManager.Section name="Events">
              <div className={boxesHeader}>
                <Box padding>
                  <Box.Body>
                    <Editor.CheckboxCollapse
                      label={
                        <Box.Title>
                          Use Event Defaults
                          <HelpModal content={UseEventDefaultsHelp} />
                        </Box.Title>
                      }
                      query="guild.settings.settings.events.useDefault"
                      mutate="useDefault"
                    >
                      <Box.Option>
                        <div>Duration</div>
                        <div>
                          <Editor.Input
                            mutate="eventDuration"
                            query="guild.settings.settings.events.duration"
                            validate={Validation.all(Validation.isNumber())}
                          />
                        </div>
                        <div>
                          <HelpModal content={EventDurationHelp} />
                        </div>
                      </Box.Option>

                      <Box.Option>
                        <div>Max Attendees Allowed</div>
                        <div>
                          <Editor.Input
                            mutate="maxAttendees"
                            query="guild.settings.settings.events.maxAttendees"
                            validate={Validation.all(
                              Validation.isNumber(),
                              Validation.numberMax(99999)
                            )}
                          />
                        </div>
                        <div>
                          <HelpModal content={MaxAttendeesAllowedHelp} />
                        </div>
                      </Box.Option>

                      <Box.Option>
                        <div>Game</div>
                        <div>
                          <Editor.Input
                            mutate="defaultEventGame"
                            query="guild.settings.settings.events.game"
                            validate={Validation.all(
                              Validation.stringMin(1),
                              Validation.stringMax(40)
                            )}
                          />
                        </div>
                        <div>
                          <HelpModal content={EventGameHelp} />
                        </div>
                      </Box.Option>

                      <Box.Option>
                        <div>Reminder Time</div>
                        <div>
                          <Editor.Input
                            mutate="defaultReminder"
                            query="guild.settings.settings.events.defaultReminder"
                            validate={Validation.all(Validation.isNumber())}
                          />
                        </div>
                        <div>
                          <HelpModal content={EventReminderTimeHelp} />
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
                        <div>
                          <HelpModal content={EventAutoAdvertiseHelp} />
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
                        <div>
                          <HelpModal content={EventAdvertiseChannelHelp} />
                        </div>
                      </Box.Option>
                    </Editor.CheckboxCollapse>
                  </Box.Body>
                </Box>

                <Box padding>
                  <Box.Body>
                    <Box.Title>Event Permissions</Box.Title>
                    <Box.Option>
                      <div>Create</div>
                      <div>
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
                                query={
                                  "guild.settings.settings.events.permissions.create"
                                }
                              />
                            );
                          }}
                        </Query>
                      </div>
                      <div>
                        <HelpModal content={EventCreatePermissionHelp} />
                      </div>
                    </Box.Option>
                    <Box.Option>
                      <div>Add Member</div>
                      <div>
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
                      </div>
                      <div>
                        <HelpModal content={EventAddMemberPermissionHelp} />
                      </div>
                    </Box.Option>
                  </Box.Body>
                </Box>
              </div>
            </TabsManager.Section>

            <TabsManager.Section name="Tags/Stories">
              <div className={boxesHeader}>
                <Box padding>
                  <Box.Title>Tag Permissions</Box.Title>
                  <Box.Body>
                    <Box.Option>
                      <div>Create</div>
                      <div>
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
                      </div>
                      <div>
                        <HelpModal content={TagCreatePermissionHelp} />
                      </div>
                    </Box.Option>
                    <Box.Option>
                      <div>Use</div>
                      <div>
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
                      </div>
                      <div>
                        <HelpModal content={TagUsePermissionHelp} />
                      </div>
                    </Box.Option>

                    <Box.Option>
                      <div>Trigger Deletion</div>
                      <div>
                        <Editor.Checkbox
                          query="guild.settings.settings.tags.tagDeletion"
                          mutate="tagDeletion"
                        />
                      </div>
                      <div>
                        <HelpModal content={TagTriggerDeletionHelp} />
                      </div>
                    </Box.Option>
                  </Box.Body>
                </Box>

                <Box padding>
                  <Box.Title>Stories Permissions</Box.Title>
                  <Box.Body>
                    <Box.Option>
                      <div>Create</div>
                      <div>
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
                      </div>
                      <div>
                        <HelpModal content={StoriesCreatePermissionHelp} />
                      </div>
                    </Box.Option>
                    <Box.Option>
                      <div>Use</div>
                      <div>
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
                      </div>
                      <div>
                        <HelpModal content={StoriesUsePermissionHelp} />
                      </div>
                    </Box.Option>

                    <Box.Option>
                      <div>Trigger Deletion</div>
                      <div>
                        <Editor.Checkbox
                          query="guild.settings.settings.stories.storyDeletion"
                          mutate="storyDeletion"
                        />
                      </div>
                      <div>
                        <HelpModal content={StoriesTriggerDeletionHelp} />
                      </div>
                    </Box.Option>
                  </Box.Body>
                </Box>
              </div>
            </TabsManager.Section>
          </TabsManager>
        </Editor>
      </React.Fragment>
    );
  }
}

export default GeneralEditor;
