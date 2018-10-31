import React, { Component } from "react";
import { css } from "emotion";
import { Heading, SubHeader, Heading2 } from "../../../../components/Typography";
import Box from "../../../../components/Box";
import mutationQuery from "../../../../graphql/queries/mutations/moderation";
import { Query } from "react-apollo";
import Editor from "../../../../components/Editor";
import qGuildBasic from "../../../../graphql/queries/guild/guildBasic";
import qClientBasic from "../../../../graphql/queries/client/clientBasic";
import {
  mainLogs,
  serverLogs,
  modFeatureToggles,
} from "../../../../constants/moderation";
import Button from "../../../../components/Button";
import { extractChannel, extractRoles } from "../../../../util/transformers";
import Validation from "./../../../../global/validation";
import HelpModal from "../../../../components/HelpModal";
import TabsManager from "../../../../components/Tabs";
import TextMutedRoleHelp from "../../../../constants/help/moderation/muted/TextMutedRoleHelp";
import VoiceMutedRoleHelp from "../../../../constants/help/moderation/muted/VoiceMutedRoleHelp";

const boxesHeader = css`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  & > div {
    margin-bottom: 20px;
    margin-right: 20px;
  }
`;

class ModerationEditor extends Component {
  render() {
    return (
      <React.Fragment>
        <section>
          <Heading>Moderation</Heading>
          <SubHeader>
            Our bots moderation tools help run Official gaming servers for servers like
            Arena of Valor Official Discord Server.
            <br />
            Learning to master the moderation tools on G4M3R, can make your server just as
            amazing!
          </SubHeader>
        </section>

        <Editor query={qGuildBasic} mutation={mutationQuery}>
          <TabsManager>
            <TabsManager.Section name="Basic">
              <div className={boxesHeader}>
                {mainLogs.map(log => (
                  <Box padding key={log.name}>
                    <Box.Body>
                      <Editor.CheckboxCollapse
                        label={
                          <Box.Title>
                            {log.name}
                            {log.help && <HelpModal content={log.help} />}
                          </Box.Title>
                        }
                        query={log.checkboxQuery}
                        mutate={log.checkboxMutate}
                      >
                        <Box.Option>
                          <div>Channel</div>
                          <div>
                            <Editor.Select
                              values={extractChannel}
                              query={log.query}
                              mutate={log.mutate}
                            />
                          </div>
                        </Box.Option>
                      </Editor.CheckboxCollapse>
                    </Box.Body>
                  </Box>
                ))}

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
                            <HelpModal content={help} />
                          </div>
                        </Box.Option>
                      );
                    })}
                  </Box.Body>
                </Box>
              </div>
            </TabsManager.Section>
            <TabsManager.Section name="Server Logs">
              <div className={boxesHeader}>
                {serverLogs.map((opt, index) => {
                  return (
                    <Box padding key={index}>
                      <Box.Body>
                        <Editor.CheckboxCollapse
                          label={
                            <Box.Title>
                              {opt.name}
                              {opt.help && <HelpModal content={opt.help} />}
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
              </div>
            </TabsManager.Section>
            {/*
            <TabsManager.Section name="Mod Values">
              <Heading2>Moderation Values</Heading2>
              <div className={boxesHeader}>
                <Box padding>
                  {makeInputSettings({
                    title: "Max Warnings",
                    query: "guild.settings.settings.moderation.maxNoWarnings",
                    mutate: "maxNoWarnings",
                    type: "number",
                  })}

                  {channelOrRoleSelector({
                    isChannel: false,
                    type: "Max Warnings",
                    mutateString: "defaultMaxWarningsRole",
                    query: "guild.settings.settings.moderation.defaultMaxWarningsRole",
                    guildId,
                  })}
                </Box>

                <Box padding>
                  {makeInputSettings({
                    title: "Max Inactive Time",
                    query: "guild.settings.settings.moderation.maxInactivityTime",
                    mutate: "maxInactivityTime",
                    type: "number",
                  })}

                  {channelOrRoleSelector({
                    isChannel: false,
                    type: "Inactive",
                    mutateString: "defaultInactivityRole",
                    query: "guild.settings.settings.moderation.defaultInactivityRole",
                    guildId,
                  })}
                </Box>
              </div>
                </TabsManager.Section>*/}
            <TabsManager.Section name="Mute Module">
              <div className={boxesHeader}>
                <Box padding>
                  <Box.Body>
                    <Box.Option>
                      <div>Text Muted Role</div>
                      <div>
                        <Editor.Select
                          values={extractRoles}
                          mutate="muteRoleText"
                          query="guild.settings.settings.moderation.mutedRoles.text"
                        />
                      </div>
                      <div>
                        <HelpModal content={TextMutedRoleHelp} />
                      </div>
                    </Box.Option>
                    <Box.Option>
                      <div>Voice Muted Role</div>
                      <div>
                        <Editor.Select
                          values={extractRoles}
                          mutate="muteRoleVoice"
                          query="guild.settings.settings.moderation.mutedRoles.voice"
                        />
                      </div>
                      <div>
                        <HelpModal content={VoiceMutedRoleHelp} />
                      </div>
                    </Box.Option>
                  </Box.Body>
                </Box>
              </div>
            </TabsManager.Section>

            <TabsManager.Section name="Mod Mails">
              <div className={boxesHeader}>
                <Box padding>
                  <Box.Body>
                    <Editor.CheckboxCollapse
                      label={<Box.Title>Mod Mails Status</Box.Title>}
                      query="guild.settings.settings.mail.activated"
                      mutate="modMailStatus"
                    >
                      <Box.Option>
                        <div>Permission To Reply</div>
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
                                  mutate="permissionToReply"
                                  type="Permission"
                                  query="guild.settings.settings.mail.permissionToReply"
                                />
                              );
                            }}
                          </Query>
                        </div>
                      </Box.Option>

                      <Box.Option>
                        <div>Max Mails Per Guild</div>
                        <div>
                          <Editor.Input
                            query="guild.settings.settings.mail.maxMailsTotal"
                            mutate="maxMailsTotal"
                            type="number"
                            validate={Validation.all(
                              Validation.isNumber(),
                              Validation.numberMin(10),
                              Validation.numberMax(50)
                            )}
                          />
                        </div>
                      </Box.Option>

                      <Box.Option>
                        <div>Max Mails Per User</div>
                        <div>
                          <Editor.Input
                            query="guild.settings.settings.mail.maxMailPerUser"
                            mutate="maxMailPerUser"
                            type="number"
                            validate={Validation.all(
                              Validation.isNumber(),
                              Validation.numberMin(1),
                              Validation.numberMax(5)
                            )}
                          />
                        </div>
                      </Box.Option>
                    </Editor.CheckboxCollapse>
                  </Box.Body>
                </Box>
              </div>
            </TabsManager.Section>
            <TabsManager.Section name="Auto-Mod">
              <div className={boxesHeader}>
                <Box padding>
                  <Box.Body>
                    <Box.Title>Auto-Assign Role</Box.Title>
                    <Editor.Select
                      values={extractRoles}
                      mutate="mainRole"
                      query="guild.settings.settings.autoAssignRoles.mainRole"
                    />
                  </Box.Body>
                </Box>

                <Box padding>
                  <Box.Body>
                    <Box.Title>Allow AFK Responses Permission</Box.Title>
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
                            mutate={"allowAfkResponses"}
                            type={"Permission"}
                            query={"guild.settings.settings.allowAfkResponses"}
                          />
                        );
                      }}
                    </Query>
                  </Box.Body>
                </Box>

                <Box padding>
                  <Box.Body>
                    <Editor.CheckboxCollapse
                      label={<Box.Title>Capital Spam Filter Status</Box.Title>}
                      query="guild.settings.settings.moderation.capitalPercentage.status"
                      mutate="capitalPercentageStatus"
                    >
                      <Box.Option>
                        <div>Max Allowed Percentage</div>
                        <div>
                          <Editor.Input
                            query="guild.settings.settings.moderation.capitalPercentage.amount"
                            mutate="capitalPercentageAmount"
                            type="number"
                            validate={Validation.all(
                              Validation.isNumber(),
                              Validation.numberMin(60),
                              Validation.numberMax(100)
                            )}
                          />
                        </div>
                      </Box.Option>
                    </Editor.CheckboxCollapse>
                  </Box.Body>
                </Box>

                <Box padding>
                  <Box.Body>
                    <Editor.CheckboxCollapse
                      label={<Box.Title>Banned Word Filter Status</Box.Title>}
                      query="guild.settings.settings.moderation.naughtyWords.status"
                      mutate="naughtyWordStatus"
                    >
                      {/*<Box.Option>
                        <div>Naughty Words</div>
                        <div>
                          <Editor.Input
                            query="guild.settings.settings.moderation.naughtyWords.words"
                            mutate="naughtyWordWords"
                            type="string"
                          />
                        </div>
                      </Box.Option>*/}
                    </Editor.CheckboxCollapse>
                  </Box.Body>
                </Box>
              </div>
            </TabsManager.Section>
            <TabsManager.Section name="Verification">
              <div className={boxesHeader}>
                <Box padding>
                  <Box.Body>
                    <Editor.CheckboxCollapse
                      label={<Box.Title>Verification System Status</Box.Title>}
                      query="guild.settings.settings.verify.status"
                      mutate="verifyStatus"
                    >
                      <Box.Option>
                        <div>Category Channel</div>
                        <div>
                          <Editor.Select
                            values={extractChannel}
                            mutate="verifyCategory"
                            query="guild.settings.settings.verify.category"
                          />
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
                            values={extractRoles}
                            mutate="verifyRole"
                            query="guild.settings.settings.verify.role"
                          />
                        </div>
                      </Box.Option>
                    </Editor.CheckboxCollapse>
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

export default ModerationEditor;
