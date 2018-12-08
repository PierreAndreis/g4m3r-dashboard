import React from "react";
import Box from "../../../../components/Box";
import Editor from "../../../../components/Editor";
import { mainLogs, modFeatureToggles } from "../../../../constants/moderation";
import { extractChannel } from "../../../../util/transformers";
import HelpModal from "../../../../components/HelpModal";
import HelpContent from "../../../../components/HelpContent";
import HelpText from "../../../../constants/help/moderation";

const modLogColors = ["colorBan", "colorKick", "colorUnban", "colorWarn", "colorMute", "colorUnmute"];

export default () => (
  <React.Fragment>
    <Box padding>
      <Box.Body>
        <Editor.CheckboxCollapse
          label={
            <Box.Title>
              Moderation Logs
                          {HelpText.basic.modLogs && <HelpModal content={<HelpContent {...HelpText.basic.modLogs} />} />}
            </Box.Title>
          }
          query="guild.settings.settings.moderation.status"
          mutate="modlogStatus"
        >
          <Box.Option>
            <div>Channel</div>
            <div>
              <Editor.Select
                autoComplete
                values={extractChannel}
                query="guild.settings.settings.moderation.channel"
                mutate="modlogChannel"
              />
            </div>
          </Box.Option>

          {modLogColors.map(log => (
            <Box.Option>
              <div>{log.substring(5)} Color</div>
              <div>
                <Editor.ColorPicker
                  mutate={log}
                  query={`guild.settings.settings.moderation.${log}`}
                />
              </div>
            </Box.Option>))}
        </Editor.CheckboxCollapse>
      </Box.Body>
    </Box>
    {
      mainLogs.map(log => (
        <Box padding key={log.name}>
          <Box.Body>
            <Editor.CheckboxCollapse
              label={
                <Box.Title>
                  {log.name}
                  {log.help && <HelpModal content={<HelpContent {...log.help} />} />}
                </Box.Title>
              }
              query={log.checkboxQuery}
              mutate={log.checkboxMutate}
            >
              <Box.Option>
                <div>Channel</div>
                <div>
                  <Editor.Select
                    autoComplete
                    values={extractChannel}
                    query={log.query}
                    mutate={log.mutate}
                  />
                </div>
              </Box.Option>
            </Editor.CheckboxCollapse>
          </Box.Body>
        </Box>
      ))
    }

    <Box padding>
      <Box.Title>Moderation Feature Toggles</Box.Title>
      <Box.Body>
        {modFeatureToggles.map(({ children, help, ...opt }, index) => {
          return (
            <Box.Option key={index}>
              <div>{children}</div>
              <div>
                <Editor.Checkbox {...opt} />
              </div>
              <div>
                <HelpModal content={<HelpContent {...help} />} />
              </div>
            </Box.Option>
          );
        })}
      </Box.Body>
    </Box>
  </React.Fragment>
);