import React from "react";
import { Query } from "react-apollo";
import qClientBasic from "../../../../graphql/queries/client/clientBasic";
import { extractChannel } from "../../../../util/transformers";
import Box from "../../../../components/Box";
import Editor from "../../../../components/Editor";
import HelpModal from "../../../../components/HelpModal";
import HelpContent from "../../../../components/HelpContent";
import HelpText from "../../../../constants/help/general";
import Validation from "../../../../global/validation";
import { Masks } from "../../../../components/InputMask";

export default React.memo(() => (
  <React.Fragment>
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
              <HelpModal content={<HelpContent {...HelpText.events.duration} />} />
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
                content={<HelpContent {...HelpText.events.maxAttendeesAllowed} />}
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
              <HelpModal content={<HelpContent {...HelpText.events.reminderTime} />} />
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
              <HelpModal content={<HelpContent {...HelpText.events.autoAdvertise} />} />
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
                const values = data.client.settings.permissionLevels.map(perm => ({
                  key: perm.id,
                  value: perm.value,
                }));
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
            <HelpModal content={<HelpContent {...HelpText.events.createPermission} />} />
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
                const values = data.client.settings.permissionLevels.map(perm => ({
                  key: perm.id,
                  value: perm.value,
                }));

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
  </React.Fragment>
));
