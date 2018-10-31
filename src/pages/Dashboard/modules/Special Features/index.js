import React, { Component } from "react";
import { css } from "emotion";
import { Heading, SubHeader, Heading2 } from "../../../../components/Typography";
import Box from "../../../../components/Box";
import mutationQuery from "../../../../graphql/queries/mutations/moderation";
import Editor from "../../../../components/Editor";
import qGuildBasic from "../../../../graphql/queries/guild/guildBasic";
import Button from "../../../../components/Button";
import { extractChannel } from "../../../../util/transformers";
import Validation from "./../../../../global/validation";
import TabsManager from "../../../../components/Tabs";

const boxesHeader = css`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  & > div {
    margin-bottom: 20px;
    margin-right: 20px;
  }
`;

class SpecialFeatureEditor extends Component {
  render() {
    return (
      <React.Fragment>
        <section>
          <Heading>Special Features (VIP ONLY)</Heading>
          <SubHeader>
            Thank you for supporting G4M3R. As a VIP, you have unlocked all of the
            following features for your server.
          </SubHeader>
        </section>

        <Editor query={qGuildBasic} mutation={mutationQuery}>
          <TabsManager>
            <TabsManager.Section name="Vainglory">
              <Heading2>Vainglory Guild Features</Heading2>
              <div className={boxesHeader}>
                <Box padding>
                  <Box.Title>Activity Reports Channel</Box.Title>
                  <Box.Body>
                    <Editor.Select
                      values={extractChannel}
                      query="guild.settings.settings.vip.vainglory.guildNotificationChannel"
                      mutate="vaingloryGuildActivityChannel"
                    />
                  </Box.Body>
                </Box>
                <Box padding>
                  <Box.Title>Max Inactive Days Allowed</Box.Title>
                  <Box.Body>
                    <Editor.Input
                      mutate="vaingloryGuildMaxInactiveTime"
                      query="guild.settings.settings.vip.vainglory.maxInactiveTime"
                      type="number"
                      validate={Validation.all(
                        Validation.isNumber(),
                        Validation.numberMin(1)
                      )}
                    />
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

export default SpecialFeatureEditor;
