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

const boxesHeader = css`
  display: flex;
  flex-wrap: wrap;
  & > div {
    margin-bottom: 20px;
    margin-right: 20px;
  }
`;

const channelOrRoleSelector = props => {
  return (
    <div>
      {props.type}
      <Editor.Select
        values={props.isChannel ? extractChannel : extractRoles}
        mutate={props.mutateString}
        query={props.query}
      />
      <br />
    </div>
  );
};

const makeInputSettings = props => {
  return (
    <div>
      <Box.Title>{props.title}</Box.Title>
      <Box.Body>
        <Editor.Input
          mutate={props.mutate}
          query={props.query}
          type={props.type}
          max={props.max}
          min={props.min}
        />
      </Box.Body>
    </div>
  );
};

class ModerationEditor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpenModal: false,
      category: "Basic",
      categories: [
        "Basic",
        "Server Logs",
        "Mute Module",
        "Mod Mails",
        "Auto-Mod",
        "Verification",
      ],
    };
  }

  changeCategory = category => e => {
    this.setState({
      category,
    });
  };

  render() {
    let guildId = this.props.match.params.guildId;
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

        <section>
          {this.state.categories.map(category => {
            return (
              <Button
                key={category}
                onClick={this.changeCategory(category)}
                simple
                active={this.state.category === category}
              >
                {category}
              </Button>
            );
          })}
        </section>

        <Editor query={qGuildBasic} mutation={mutationQuery}>
          {this.state.category === "Basic" ? (
            <section>
              <Heading2>Moderation Logs</Heading2>
              <div className={boxesHeader}>
                {mainLogs.map(log => (
                  <Box padding key={log.name}>
                    <Box.Body>
                      <Editor.CheckboxCollapse
                        label={<Box.Title>{log.name}</Box.Title>}
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
                    {modFeatureToggles.map((opt, index) => {
                      return (
                        <Box.Option key={index}>
                          <Editor.Checkbox {...opt} />
                        </Box.Option>
                      );
                    })}
                  </Box.Body>
                </Box>
              </div>
            </section>
          ) : null}

          {this.state.category === "Server Logs" ? (
            <section>
              <Heading2>Individual Server Logs</Heading2>
              <div className={boxesHeader}>
                <div className={boxesHeader}>
                  <Box padding>
                    <Box.Title>Server Log Status Toggles</Box.Title>
                    <Box.Body>
                      {serverLogs.map((opt, index) => {
                        return (
                          <div key={index}>
                            <Editor.Checkbox
                              query={`guild.settings.settings.serverLogs.${
                                opt.mutate
                              }.status`}
                              mutate={`${opt.mutate}Status`}
                              children={opt.name}
                            />
                            <Editor.Checkbox
                              query={`guild.settings.settings.serverLogs.${
                                opt.mutate
                              }.logPublically`}
                              mutate={`${opt.mutate}LogPublically`}
                              children={`${opt.name} Public Log`}
                            />
                            <br />
                            <br />
                          </div>
                        );
                      })}
                    </Box.Body>
                  </Box>

                  <Box padding>
                    <Box.Title>Server Logs Channel Selector</Box.Title>
                    <Box.Body>
                      {serverLogs.map((opt, index) => {
                        return (
                          <div key={index}>
                            {channelOrRoleSelector({
                              isChannel: true,
                              type: opt.name,
                              mutateString: `${opt.mutate}Channel`,
                              query: opt.query,
                              guildId,
                            })}
                            <br />
                          </div>
                        );
                      })}
                    </Box.Body>
                  </Box>
                </div>
              </div>
            </section>
          ) : null}

          {this.state.category === "Mod Values" ? (
            <section>
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
            </section>
          ) : null}

          {this.state.category === "Mute Module" ? (
            <section>
              <Heading2>Mute Roles</Heading2>
              <div className={boxesHeader}>
                <Box padding>
                  <Box.Title>Text Muted Role</Box.Title>
                  {channelOrRoleSelector({
                    isChannel: false,
                    mutateString: "muteRoleText",
                    query: "guild.settings.settings.moderation.mutedRoles.text",
                    guildId,
                  })}
                  <Box.Title>Voice Muted Role</Box.Title>
                  {channelOrRoleSelector({
                    isChannel: false,
                    mutateString: "muteRoleVoice",
                    query: "guild.settings.settings.moderation.mutedRoles.voice",
                    guildId,
                  })}
                </Box>
              </div>
            </section>
          ) : null}

          {this.state.category === "Mod Mails" ? (
            <section>
              <div className={boxesHeader}>
                <Box padding>
                  <Box.Title>Mod Mails</Box.Title>
                  <Editor.Checkbox
                    query="guild.settings.settings.mail.activated"
                    mutate="modMailStatus"
                    children="Mod Mail Status"
                  />
                  <br />
                  <br />
                  <Box.Title>Permission To Reply</Box.Title>
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
                          mutate={"permissionToReply"}
                          type={"Permission"}
                          query={"guild.settings.settings.mail.permissionToReply"}
                        />
                      );
                    }}
                  </Query>
                </Box>
                <Box padding>
                  {makeInputSettings({
                    title: "Max Mails Per Guild",
                    query: "guild.settings.settings.mail.maxMailsTotal",
                    mutate: "maxMailsTotal",
                    type: "number",
                  })}
                  {makeInputSettings({
                    title: "Max Mails Per User",
                    query: "guild.settings.settings.mail.maxMailPerUser",
                    mutate: "maxMailPerUser",
                    type: "number",
                  })}
                </Box>
              </div>
            </section>
          ) : null}

          {this.state.category === "Auto-Mod" ? (
            <section>
              <Heading2>Auto Moderation</Heading2>
              <div className={boxesHeader}>
                <Box padding>
                  <Box.Title>Auto-Assign Role</Box.Title>
                  {channelOrRoleSelector({
                    isChannel: false,
                    mutateString: "mainRole",
                    query: "guild.settings.settings.autoAssignRoles.mainRole",
                    guildId,
                  })}

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
                </Box>
                <Box padding>
                  <Box.Title>Capital Spam</Box.Title>
                  <Editor.Checkbox
                    query="guild.settings.settings.moderation.capitalPercentage.status"
                    mutate="capitalPercentageStatus"
                    children="Capital Spam Filter Status"
                  />
                  <br />
                  <br />
                  {makeInputSettings({
                    title: "Max Allowed Percentage",
                    query: "guild.settings.settings.moderation.capitalPercentage.amount",
                    mutate: "capitalPercentageAmount",
                    type: "number",
                    max: 100,
                    min: 0,
                  })}
                </Box>
                <Box padding>
                  <Box.Title>Banned Words</Box.Title>
                  <Editor.Checkbox
                    query="guild.settings.settings.moderation.naughtyWords.status"
                    mutate="naughtyWordStatus"
                    children="Banned Word Filter Status"
                  />
                  {/*makeInputSettings({
                    title: "Naughty Words",
                    query: "guild.settings.settings.moderation.naughtyWords.words",
                    mutate: "naughtyWordWords",
                    type: "string"
                  })*/}
                </Box>
              </div>
            </section>
          ) : null}

          {this.state.category === "Verification" ? (
            <section>
              <Heading2>Verification</Heading2>
              <div className={boxesHeader}>
                <Box padding>
                  <Box.Title>Verification System</Box.Title>
                  <Editor.Checkbox
                    query="guild.settings.settings.verify.status"
                    mutate="verifyStatus"
                    children="Verification System Status"
                  />
                  <br />
                  <br />
                  <Box.Title>Verification Category</Box.Title>
                  {channelOrRoleSelector({
                    isChannel: true,
                    mutateString: "verifyCategory",
                    query: "guild.settings.settings.verify.category",
                    needCategory: true,
                    guildId,
                  })}
                </Box>

                {/*<Box padding>
                  <Box.Title>Verification First Message</Box.Title>
                  <Box.Body>
                    <Editor.Input
                      mutate="verifyFirst"
                      query="guild.settings.settings.verify.first"
                      type="string"
                    />
                  </Box.Body>
                </Box>*/}

                <Box padding>
                  <Box.Title>Verification Role</Box.Title>
                  {channelOrRoleSelector({
                    isChannel: false,
                    mutateString: "verifyRole",
                    query: "guild.settings.settings.verify.role",
                    guildId,
                  })}
                </Box>

                <Box padding>
                  <Box.Title>Reset Verification</Box.Title>
                  <Box.Body />
                </Box>
              </div>
            </section>
          ) : null}
        </Editor>
      </React.Fragment>
    );
  }
}

export default ModerationEditor;
