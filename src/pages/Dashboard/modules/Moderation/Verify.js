import React from "react";
import Box from "../../../../components/Box";
import Editor from "../../../../components/Editor";
import { extractChannel, extractRoles } from "../../../../util/transformers";
import HelpModal from "../../../../components/HelpModal";
import HelpContent from "../../../../components/HelpContent";
import HelpText from "../../../../constants/help/moderation";

export default () => (
  <React.Fragment>
    <Box padding>
      <Box.Body>
        <Editor.CheckboxCollapse
          label={
            <Box.Title>
              Verification System Status
              {<HelpModal content={<HelpContent {...HelpText.verification.systemStatus} />} />}
            </Box.Title>
          }
          query="guild.settings.settings.verify.status"
          mutate="verifyStatus"
        >
          <Box.Option>
            <div>Category Channel</div>
            <div>
              <Editor.Select
                autoComplete
                values={extractChannel}
                mutate="verifyCategory"
                query="guild.settings.settings.verify.category"
              />
            </div>
            <div>
              <HelpModal content={<HelpContent {...HelpText.verification.category} />} />
            </div>
          </Box.Option>

          {/*<Box.Option>
            <div>First Message</div>
            <div>
              <Editor.Input
                mutate="verifyFirst"
                query="guild.settings.settings.verify.first"
                type="string"
              />
            </div>
          </Box.Option>*/}

          <Box.Option>
            <div>Verification Role</div>
            <div>
              <Editor.Select
                autoComplete
                values={extractRoles}
                mutate="verifyRole"
                query="guild.settings.settings.verify.role"
              />
            </div>
            <div>
              <HelpModal content={<HelpContent {...HelpText.verification.role} />} />
            </div>
          </Box.Option>
        </Editor.CheckboxCollapse>
      </Box.Body>
    </Box>
  </React.Fragment>
);