import React from "react";
import { css } from "emotion";
import mutationQuery from "../../../../graphql/queries/mutations/general";
import { Heading, SubHeader } from "../../../../components/Typography";
import Box from "../../../../components/Box";
import { Query } from "react-apollo";
import Editor from "../../../../components/Editor";
import qGuildBasic from "../../../../graphql/queries/guild/guildBasic";
import qClientBasic from "../../../../graphql/queries/client/clientBasic";
import { extractChannel } from "../../../../util/transformers";
import Validation from "../../../../global/validation";
import TabsManager from "../../../../components/Tabs";
import HelpContent from "../../../../components/HelpContent";
import HelpModal from "../../../../components/HelpModal";
import HelpText from "../../../../constants/help/general";
import { Masks } from "../../../../components/InputMask";

import GeneralBasic from "./Basic";
import GeneralFeedback from "./Feedback";

const boxesHeader = css`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;

  & > div {
    margin-bottom: 20px;
    margin-right: 20px;
  }
`;

export default React.memo(() => {
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
              <GeneralBasic />
            </div>
          </TabsManager.Section>

          <TabsManager.Section name="Feedback">
            <div className={boxesHeader}>
              <GeneralFeedback />
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
                        <HelpModal
                          content={<HelpContent {...HelpText.events.useEventDefaults} />}
                        />
                      </Box.Title>
                    }
                    query="guild.settings.settings.events.useDefault"
                    mutate="useDefault"
                  >
                    <Box.Option>
                      <div>Duration</div>
                      <div>
                        <Editor.InputMask
                          mask={Masks.hoursToMs}
                          label="hours"
                          mutate="eventDuration"
                          type="number"
                          query="guild.settings.settings.events.duration"
                          validate={Validation.all(
                            Validation.isNumber(),
                            Validation.numberMin(3600000)
                          )}
                        />
                      </div>
                      <div>
                        <HelpModal
                          content={<HelpContent {...HelpText.events.duration} />}
                        />
                      </div>
                    </Box.Option>

                    <Box.Option>
                      <div>Max Attendees Allowed</div>
                      <div>
                        <Editor.Input
                          mutate="maxAttendees"
                          query="guild.settings.settings.events.maxAttendees"
                          type="number"
                          validate={Validation.all(
                            Validation.isNumber(),
                            Validation.numberMax(99999)
                          )}
                        />
                      </div>
                      <div>
                        <HelpModal
                          content={
                            <HelpContent {...HelpText.events.maxAttendeesAllowed} />
                          }
                        />
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
                        <HelpModal content={<HelpContent {...HelpText.events.game} />} />
                      </div>
                    </Box.Option>

                    <Box.Option>
                      <div>Reminder Time</div>
                      <div>
                        <Editor.InputMask
                          mask={Masks.minutesToMs}
                          label="minutes"
                          mutate="defaultReminder"
                          type="number"
                          query="guild.settings.settings.events.defaultReminder"
                          validate={Validation.all(
                            Validation.isNumber(),
                            Validation.numberMin(60000)
                          )}
                        />
                      </div>
                      <div>
                        <HelpModal
                          content={<HelpContent {...HelpText.events.reminderTime} />}
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
                      <div>
                        <HelpModal
                          content={<HelpContent {...HelpText.events.autoAdvertise} />}
                        />
                      </div>
                    </Box.Option>

                    <Box.Option>
                      <div>Advertise Channel</div>
                      <div>
                        <Editor.Select
                          autoComplete
                          values={extractChannel}
                          mutate="advertiseChannel"
                          query="guild.settings.settings.events.advertiseChannel"
                        />
                      </div>
                      <div>
                        <HelpModal
                          content={<HelpContent {...HelpText.events.advertiseChannel} />}
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
                              mutate={"eventsAllowCreation"}
                              query={"guild.settings.settings.events.permissions.create"}
                            />
                          );
                        }}
                      </Query>
                    </div>
                    <div>
                      <HelpModal
                        content={<HelpContent {...HelpText.events.createPermission} />}
                      />
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
                          const values = data.client.settings.permissionLevels.map(
                            perm => ({
                              key: perm.id,
                              value: perm.value,
                            })
                          );

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
                      <HelpModal
                        content={<HelpContent {...HelpText.events.addMemberPermission} />}
                      />
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
                              mutate="tagsAllowCreation"
                              query="guild.settings.settings.tags.allowCreation"
                            />
                          );
                        }}
                      </Query>
                    </div>
                    <div>
                      <HelpModal
                        content={<HelpContent {...HelpText.tags.createPermission} />}
                      />
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
                      <HelpModal
                        content={<HelpContent {...HelpText.tags.usePermission} />}
                      />
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
                      <HelpModal
                        content={<HelpContent {...HelpText.tags.triggerDeletion} />}
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
                      <HelpModal
                        content={<HelpContent {...HelpText.stories.createPermission} />}
                      />
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
                      <HelpModal
                        content={<HelpContent {...HelpText.stories.usePermission} />}
                      />
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
                      <HelpModal
                        content={<HelpContent {...HelpText.stories.triggerDeletion} />}
                      />
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
});
