import React from "react";
import { Query } from "react-apollo";
import Box from "../../../../components/Box";
import Editor from "../../../../components/Editor";
import HelpModal from "../../../../components/HelpModal";
import HelpContent from "../../../../components/HelpContent";
import HelpText from "../../../../constants/help/general";
import qClientBasic from "../../../../graphql/queries/client/clientBasic";

export default React.memo(() => (
  <React.Fragment>
    <Box padding>
      <Box.Title>Tag Permissions</Box.Title>
      <Box.Body>
        <Box.Option>
          <div>Create</div>
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

                return (
                  <Editor.Select
                    values={values}
                    mutate="tagsAllowCreation"
                    query="guild.settings.settings.tags.allowCreation"
                  />
                );
              }}
            </Query>
          </div>
          <div>
            <HelpModal content={<HelpContent {...HelpText.tags.createPermission} />} />
          </div>
        </Box.Option>
        <Box.Option>
          <div>Use</div>
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
                return (
                  <Editor.Select
                    values={values}
                    mutate="tagsAllowUsage"
                    query="guild.settings.settings.tags.allowUsage"
                  />
                );
              }}
            </Query>
          </div>
          <div>
            <HelpModal content={<HelpContent {...HelpText.tags.usePermission} />} />
          </div>
        </Box.Option>

        <Box.Option>
          <div>Trigger Deletion</div>
          <div>
            <Editor.Checkbox
              query="guild.settings.settings.tags.tagDeletion"
              mutate="tagDeletion"
            />
          </div>
          <div>
            <HelpModal content={<HelpContent {...HelpText.tags.triggerDeletion} />} />
          </div>
        </Box.Option>
      </Box.Body>
    </Box>

    <Box padding>
      <Box.Title>Stories Permissions</Box.Title>
      <Box.Body>
        <Box.Option>
          <div>Create</div>
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

                return (
                  <Editor.Select
                    values={values}
                    mutate="storiesAllowCreation"
                    type="Permission"
                    query="guild.settings.settings.stories.allowCreation"
                  />
                );
              }}
            </Query>
          </div>
          <div>
            <HelpModal content={<HelpContent {...HelpText.stories.createPermission} />} />
          </div>
        </Box.Option>
        <Box.Option>
          <div>Use</div>
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
                return (
                  <Editor.Select
                    values={values}
                    mutate="storiesAllowCreation"
                    type="Permission"
                    query="guild.settings.settings.stories.allowCreation"
                  />
                );
              }}
            </Query>
          </div>
          <div>
            <HelpModal content={<HelpContent {...HelpText.stories.usePermission} />} />
          </div>
        </Box.Option>

        <Box.Option>
          <div>Trigger Deletion</div>
          <div>
            <Editor.Checkbox
              query="guild.settings.settings.stories.storyDeletion"
              mutate="storyDeletion"
            />
          </div>
          <div>
            <HelpModal content={<HelpContent {...HelpText.stories.triggerDeletion} />} />
          </div>
        </Box.Option>
      </Box.Body>
    </Box>
  </React.Fragment>
));
