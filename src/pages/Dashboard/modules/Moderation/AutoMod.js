import React from "react";
import Box from "../../../../components/Box";
import { Query } from "react-apollo";
import Editor from "../../../../components/Editor";
import qClientBasic from "../../../../graphql/queries/client/clientBasic";
import { extractRoles } from "../../../../util/transformers";
import Validation from "./../../../../global/validation";
import HelpModal from "../../../../components/HelpModal";
import HelpContent from "../../../../components/HelpContent";
import HelpText from "../../../../constants/help/moderation";

export default React.memo(() => (
  <React.Fragment>
    <Box padding>
      <Box.Body>
        <Box.Option>
          <div>Auto-Assign Role</div>
          <div>
            <Editor.Select
              autoComplete
              values={extractRoles}
              mutate="mainRole"
              query="guild.settings.settings.autoAssignRoles.mainRole"
            />
          </div>
          <div>
            <HelpModal content={<HelpContent {...HelpText.automod.autoAssignRole} />} />
          </div>
        </Box.Option>

        <Box.Option>
          <div>AFK Responses Permission</div>
          <div>
            <Query
              query={qClientBasic}
              variables={{ clientId: process.env.REACT_APP_CLIENT_ID }}
            >
              {({ loading, error, data }) => {
                if (loading) return "Loading";
                if (error) return "Error";
                const values = data.client.settings.permissionLevels.map(perm => ({
                  key: perm.id,
                  value: perm.value,
                }));
                console.log("perms levels", data);
                return (
                  <Editor.Select
                    values={values}
                    mutate="allowAfkResponses"
                    query="guild.settings.settings.allowAfkResponses"
                  />
                );
              }}
            </Query>
          </div>
          <div>
            <HelpModal
              content={<HelpContent {...HelpText.automod.afkResponsePermission} />}
            />
          </div>
        </Box.Option>
      </Box.Body>
    </Box>

    <Box padding>
      <Box.Body>
        <Editor.CheckboxCollapse
          label={
            <Box.Title>
              Capital Spam Filter Status
              {
                <HelpModal
                  content={<HelpContent {...HelpText.automod.capitalSpamFilterStatus} />}
                />
              }
            </Box.Title>
          }
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
            <div>
              <HelpModal
                content={
                  <HelpContent
                    {...HelpText.automod.capitalSpamFilterMaxAllowedPercentage}
                  />
                }
              />
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
              Banned Word Filter Status
              {
                <HelpModal
                  content={<HelpContent {...HelpText.automod.bannedWordFilterSTatus} />}
                />
              }
            </Box.Title>
          }
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
  </React.Fragment>
));
