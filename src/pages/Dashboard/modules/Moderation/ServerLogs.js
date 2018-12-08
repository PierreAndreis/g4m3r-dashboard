import React from "react";
import Box from "../../../../components/Box";
import Editor from "../../../../components/Editor";
import { serverLogs } from "../../../../constants/moderation";
import { extractChannel } from "../../../../util/transformers";
import HelpModal from "../../../../components/HelpModal";
import HelpContent from "../../../../components/HelpContent";

export default () => (
  <React.Fragment>
    {serverLogs.map((opt, index) => {
      return (
        <Box padding key={index}>
          <Box.Body>
            <Editor.CheckboxCollapse
              label={
                <Box.Title>
                  {opt.name}
                  {opt.help && <HelpModal content={<HelpContent {...opt.help} />} />}
                </Box.Title>
              }
              query={`guild.settings.settings.serverLogs.${
                opt.mutate
                }.status`}
              mutate={`${opt.mutate}Status`}
            >
              <Box.Option>
                <div>Log Publically</div>
                <div>
                  <Editor.Checkbox
                    query={`guild.settings.settings.serverLogs.${
                      opt.mutate
                      }.logPublically`}
                    mutate={`${opt.mutate}LogPublically`}
                  />
                </div>
              </Box.Option>

              <Box.Option>
                <div>Channel</div>
                <div>
                  <Editor.Select
                    autoComplete
                    values={extractChannel}
                    mutate={`${opt.mutate}Channel`}
                    query={opt.query}
                  />
                </div>
              </Box.Option>
            </Editor.CheckboxCollapse>
          </Box.Body>
        </Box>
      );
    })}
  </React.Fragment>
);