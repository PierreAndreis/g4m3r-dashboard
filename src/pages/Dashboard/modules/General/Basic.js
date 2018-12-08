import React from "react";
import { Query } from "react-apollo";

import Box from "../../../../components/Box";
import Editor from "../../../../components/Editor";
import HelpModal from "../../../../components/HelpModal";
import HelpContent from "../../../../components/HelpContent";
import HelpText from "../../../../constants/help/general";

import qTimezone from "../../../../graphql/queries/utils/timezone";
import { generalPageToggles, notifications } from "../../../../constants/general";
import Validation from "../../../../global/validation";
import { Masks } from "../../../../components/InputMask";

const cleanUpTimezone = timezones =>
  timezones.map(timezone => ({
    key: timezone,
    value: timezone,
  }));

export default () => (
  <React.Fragment>
    <Box padding>
      <Box.Title>Server Configuration</Box.Title>
      <Box.Body>
        <Box.Option>
          <div>Prefix</div>
          <div>
            <Editor.Input mutate="prefix" query="guild.settings.settings.prefix" />
          </div>
          <div>
            <HelpModal content={<HelpContent {...HelpText.basic.prefix} />} />
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
            <HelpModal content={<HelpContent {...HelpText.basic.timezone} />} />
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
          <div>
            <HelpModal content={<HelpContent {...HelpText.basic.menuClosingTime} />} />
          </div>
        </Box.Option>

        {generalPageToggles.map(opt => {
          return (
            <Box.Option key={opt.title}>
              <div>{opt.title}</div>
              <div>
                <Editor.Checkbox query={opt.query} mutate={opt.mutate} />
              </div>
              <div>
                <HelpModal content={<HelpContent {...opt.help} />} />
              </div>
            </Box.Option>
          );
        })}
      </Box.Body>
    </Box>

    <Box padding>
      <Box.Title>Notifications</Box.Title>
      <Box.Body>
        {notifications.map(opt => {
          return (
            <Box.Option key={opt.title}>
              <div>{opt.title}</div>
              <div>
                <Editor.Checkbox query={opt.query} mutate={opt.mutate} />
              </div>
              <div>
                <HelpModal content={<HelpContent {...opt.help} />} />
              </div>
            </Box.Option>
          );
        })}
        <Box.Option>
          <div>Delete Notifications Delay</div>
          <div>
            <Editor.InputMask
              mask={Masks.secondsToMs}
              label="seconds"
              mutate="deleteNotificationTime"
              type="number"
              query="guild.settings.settings.general.deleteNotificationTime"
              validate={Validation.all(
                Validation.isNumber(),
                Validation.numberMin(1000),
                Validation.numberMax(100000)
              )}
            />
          </div>
          <div>
            <HelpModal
              content={<HelpContent {...HelpText.basic.deleteAllNotificationsDelay} />}
            />
          </div>
        </Box.Option>
      </Box.Body>
    </Box>
  </React.Fragment>
);
