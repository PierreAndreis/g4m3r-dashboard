import React, { Component } from "react";
import { css } from "emotion";
import { Heading, SubHeader, Heading2 } from "../../../../components/Typography";
import Box from "../../../../components/Box";
import mutationQuery from "../../../../graphql/queries/mutations/moderation";
import Editor from "../../../../components/Editor";
import qGuildBasic from "../../../../graphql/queries/guild/guildBasic";
import { extractChannel } from "../../../../util/transformers";
import Validation from "./../../../../global/validation";
import TabsManager from "../../../../components/Tabs";
import HelpModal from "../../../../components/HelpModal";
import HelpContent from "../../../../components/HelpContent";
import HelpText from "../../../../constants/help/features";
import { Query } from "react-apollo";

const boxesHeader = css`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  & > div {
    margin-bottom: 20px;
    margin-right: 20px;
  }
`;
let isVIP = false;
class SpecialFeatureEditor extends Component {
  render() {
    return (
      <React.Fragment>
        <Query
          query={qGuildBasic}
          variables={{ guildId: this.props.match.params.guildId }}
        >
          {({ loading, error, data }) => {
            if (loading) return "Loading";
            if (error) return "Error";

            if (data.guild.settings.settings.vip.isVIP) isVIP = true;
            return null;
          }}
        </Query>
        <section>
          <Heading>Special Features (VIP ONLY)</Heading>
          <SubHeader>
            {isVIP ? "Thank you for supporting G4M3R. As a VIP, you have unlocked all of the following features for your server." : "This page shows VIP features that are available to VIP servers. To become a VIP and unlock all these amazing features please become a patron."}
          </SubHeader>
        </section>
        {isVIP ?
          <Editor query={qGuildBasic} mutation={mutationQuery}>
            <TabsManager>
              <TabsManager.Section name="Vainglory">
                <Heading2>Vainglory Guild Features</Heading2>
                <div className={boxesHeader}>
                  <Box padding>
                    <Box.Body>
                      <Box.Option>
                        <div>Activity Reports Channel</div>
                        <div>
                          <Editor.Select
                            autoComplete
                            values={extractChannel}
                            query="guild.settings.settings.vip.vainglory.guildNotificationChannel"
                            mutate="vaingloryGuildActivityChannel"
                          />
                        </div>
                        <div>
                          <HelpModal content={<HelpContent {...HelpText.vainglory.activityReportsChannel} />} />
                        </div>
                      </Box.Option>

                      <Box.Option>
                        <div>Max Inactive Days Allowed</div>
                        <div>
                          <Editor.Input
                            mutate="vaingloryGuildMaxInactiveTime"
                            query="guild.settings.settings.vip.vainglory.maxInactiveTime"
                            type="number"
                            validate={Validation.all(
                              Validation.isNumber(),
                              Validation.numberMin(1)
                            )}
                          />
                        </div>
                        <div>
                          <HelpModal content={<HelpContent {...HelpText.vainglory.maxInactiveDays} />} />
                        </div>
                      </Box.Option>
                    </Box.Body>
                  </Box>
                </div>
              </TabsManager.Section>
            </TabsManager>
          </Editor>
          : null}
      </React.Fragment>
    );
  }
}

export default SpecialFeatureEditor;
