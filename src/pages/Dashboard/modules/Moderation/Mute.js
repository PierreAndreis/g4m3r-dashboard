import React from "react";
import Box from "../../../../components/Box";
import Editor from "../../../../components/Editor";
import { extractRoles } from "../../../../util/transformers";
import HelpModal from "../../../../components/HelpModal";
import HelpContent from "../../../../components/HelpContent";
import HelpText from "../../../../constants/help/moderation";

export default React.memo(() => (
  <React.Fragment>
    <Box padding>
      <Box.Body>
        <Box.Option>
          <div>Text Muted Role</div>
          <div>
            <Editor.Select
              autoComplete
              values={extractRoles}
              mutate="muteRoleText"
              query="guild.settings.settings.moderation.mutedRoles.text"
            />
          </div>
          <div>
            <HelpModal content={<HelpContent {...HelpText.muted.textMutedRole} />} />
          </div>
        </Box.Option>
        <Box.Option>
          <div>Voice Muted Role</div>
          <div>
            <Editor.Select
              autoComplete
              values={extractRoles}
              mutate="muteRoleVoice"
              query="guild.settings.settings.moderation.mutedRoles.voice"
            />
          </div>
          <div>
            <HelpModal content={<HelpContent {...HelpText.muted.voiceMutedRole} />} />
          </div>
        </Box.Option>
      </Box.Body>
    </Box>
  </React.Fragment>
));
