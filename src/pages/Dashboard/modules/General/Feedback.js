import React from "react";
import Box from "../../../../components/Box";
import Editor from "../../../../components/Editor";
import HelpModal from "../../../../components/HelpModal";
import HelpContent from "../../../../components/HelpContent";
import HelpText from "../../../../constants/help/general";
import Validation from "../../../../global/validation";
import { extractChannel } from "../../../../util/transformers";

export default React.memo(() => (
  <React.Fragment>
    <Box padding>
      <Box.Body>
        <Editor.CheckboxCollapse
          label={
            <Box.Title>
              Ideas Status
              <HelpModal content={<HelpContent {...HelpText.feedback.ideaStatus} />} />
            </Box.Title>
          }
          query="guild.settings.settings.feedback.idea.status"
          mutate="ideaStatus"
        >
          <Box.Option>
            <div>Channel</div>
            <div>
              <Editor.Select
                autoComplete
                values={extractChannel}
                query="guild.settings.settings.feedback.idea.channel"
                mutate="ideaChannel"
              />
            </div>
            <div>
              <HelpModal content={<HelpContent {...HelpText.feedback.ideaChannel} />} />
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
              <HelpModal content={<HelpContent {...HelpText.feedback.ideaColor} />} />
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
              <HelpModal content={<HelpContent {...HelpText.feedback.ideaThumbUp} />} />
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
              <HelpModal content={<HelpContent {...HelpText.feedback.ideaThumbDown} />} />
            </div>
          </Box.Option>

          <Box.Option>
            <div>Solved Message</div>
            <div>
              <Editor.Input
                mutate="ideaSolvedMessage"
                query="guild.settings.settings.feedback.idea.solvedMessage"
              />
            </div>
            <div>
              <HelpModal
                content={<HelpContent {...HelpText.feedback.ideaSolvedMessage} />}
              />
            </div>
          </Box.Option>

          <Box.Option>
            <div>Denied Message</div>
            <div>
              <Editor.Input
                mutate="ideaDeniedMessage"
                query="guild.settings.settings.feedback.idea.deniedMessage"
              />
            </div>
            <div>
              <HelpModal
                content={<HelpContent {...HelpText.feedback.ideaDeniedMessage} />}
              />
            </div>
          </Box.Option>

          <Box.Option>
            <div>Thumbs Up XP</div>
            <div>
              <Editor.Input
                mutate="ideaXpUp"
                query="guild.settings.settings.feedback.idea.xpUp"
                type="number"
                validate={Validation.all(Validation.isNumber(), Validation.numberMin(0))}
              />
            </div>
            <div>
              <HelpModal content={<HelpContent {...HelpText.feedback.ideaXpUp} />} />
            </div>
          </Box.Option>

          <Box.Option>
            <div>Thumbs Down XP</div>
            <div>
              <Editor.Input
                mutate="ideaXpDown"
                query="guild.settings.settings.feedback.idea.xpDown"
                type="number"
                validate={Validation.all(Validation.isNumber(), Validation.numberMin(0))}
              />
            </div>
            <div>
              <HelpModal content={<HelpContent {...HelpText.feedback.ideaXpDown} />} />
            </div>
          </Box.Option>

          <Box.Option>
            <div>Solved XP</div>
            <div>
              <Editor.Input
                mutate="ideaXpSolved"
                query="guild.settings.settings.feedback.idea.xpSolved"
                type="number"
                validate={Validation.all(Validation.isNumber(), Validation.numberMin(0))}
              />
            </div>
            <div>
              <HelpModal content={<HelpContent {...HelpText.feedback.ideaXpSolved} />} />
            </div>
          </Box.Option>

          <Box.Option>
            <div>Denied XP</div>
            <div>
              <Editor.Input
                mutate="ideaXpDenied"
                query="guild.settings.settings.feedback.idea.xpDenied"
                type="number"
                validate={Validation.all(Validation.isNumber(), Validation.numberMin(0))}
              />
            </div>
            <div>
              <HelpModal content={<HelpContent {...HelpText.feedback.ideaXpDenied} />} />
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
              <HelpModal content={<HelpContent {...HelpText.feedback.bugStatus} />} />
            </Box.Title>
          }
          query="guild.settings.settings.feedback.bug.status"
          mutate="bugStatus"
        >
          <Box.Option>
            <div>Channel</div>
            <div>
              <Editor.Select
                autoComplete
                values={extractChannel}
                query="guild.settings.settings.feedback.bug.channel"
                mutate="bugChannel"
              />
            </div>
            <div>
              <HelpModal content={<HelpContent {...HelpText.feedback.bugChannel} />} />
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
              <HelpModal content={<HelpContent {...HelpText.feedback.bugColor} />} />
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
              <HelpModal content={<HelpContent {...HelpText.feedback.bugThumbUp} />} />
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
              <HelpModal content={<HelpContent {...HelpText.feedback.bugThumbDown} />} />
            </div>
          </Box.Option>

          <Box.Option>
            <div>Solved Message</div>
            <div>
              <Editor.Input
                mutate="bugSolvedMessage"
                query="guild.settings.settings.feedback.bug.solvedMessage"
              />
            </div>
            <div>
              <HelpModal
                content={<HelpContent {...HelpText.feedback.bugSolvedMessage} />}
              />
            </div>
          </Box.Option>

          <Box.Option>
            <div>Denied Message</div>
            <div>
              <Editor.Input
                mutate="bugDeniedMessage"
                query="guild.settings.settings.feedback.bug.deniedMessage"
              />
            </div>
            <div>
              <HelpModal
                content={<HelpContent {...HelpText.feedback.bugDeniedMessage} />}
              />
            </div>
          </Box.Option>

          <Box.Option>
            <div>Thumbs Up XP</div>
            <div>
              <Editor.Input
                mutate="bugXpUp"
                query="guild.settings.settings.feedback.bug.xpUp"
                type="number"
                validate={Validation.all(Validation.isNumber(), Validation.numberMin(0))}
              />
            </div>
            <div>
              <HelpModal content={<HelpContent {...HelpText.feedback.bugXpUp} />} />
            </div>
          </Box.Option>

          <Box.Option>
            <div>Thumbs Down XP</div>
            <div>
              <Editor.Input
                mutate="bugXpDown"
                query="guild.settings.settings.feedback.bug.xpDown"
                type="number"
                validate={Validation.all(Validation.isNumber(), Validation.numberMin(0))}
              />
            </div>
            <div>
              <HelpModal content={<HelpContent {...HelpText.feedback.bugXpDown} />} />
            </div>
          </Box.Option>

          <Box.Option>
            <div>Solved XP</div>
            <div>
              <Editor.Input
                mutate="bugXpSolved"
                query="guild.settings.settings.feedback.bug.xpSolved"
                type="number"
                validate={Validation.all(Validation.isNumber(), Validation.numberMin(0))}
              />
            </div>
            <div>
              <HelpModal content={<HelpContent {...HelpText.feedback.bugXpSolved} />} />
            </div>
          </Box.Option>

          <Box.Option>
            <div>Denied XP</div>
            <div>
              <Editor.Input
                mutate="bugXpDenied"
                query="guild.settings.settings.feedback.bug.xpDenied"
                type="number"
                validate={Validation.all(Validation.isNumber(), Validation.numberMin(0))}
              />
            </div>
            <div>
              <HelpModal content={<HelpContent {...HelpText.feedback.bugXpDenied} />} />
            </div>
          </Box.Option>
        </Editor.CheckboxCollapse>
      </Box.Body>
    </Box>
  </React.Fragment>
));
