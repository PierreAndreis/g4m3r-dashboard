import React from "react";
import Box from "../../../../components/Box";
import { Query } from "react-apollo";
import Editor from "../../../../components/Editor";
import qClientBasic from "../../../../graphql/queries/client/clientBasic";
import Validation from "./../../../../global/validation";
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
              Mod Mails Status{" "}
              {<HelpModal content={<HelpContent {...HelpText.modmail.status} />} />}
            </Box.Title>
          }
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
                  const values = data.client.settings.permissionLevels.map(
                    perm => ({
                      key: perm.id,
                      value: perm.value,
                    })
                  );

                  return (
                    <Editor.Select
                      values={values}
                      mutate="permissionToReply"
                      query="guild.settings.settings.mail.permissionToReply"
                    />
                  );
                }}
              </Query>
            </div>
            <div>
              <HelpModal content={<HelpContent {...HelpText.modmail.permissionToReply} />} />
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
            <div>
              <HelpModal content={<HelpContent {...HelpText.modmail.maxPerGuild} />} />
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
            <div>
              <HelpModal content={<HelpContent {...HelpText.modmail.maxPerUser} />} />
            </div>
          </Box.Option>
        </Editor.CheckboxCollapse>
      </Box.Body>
    </Box>
  </React.Fragment>
);