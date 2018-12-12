import React from "react";
import { css } from "emotion";
import mutationQuery from "../../../../graphql/queries/mutations/general";
import { Heading, SubHeader } from "../../../../components/Typography";
import Editor from "../../../../components/Editor";
import qGuildBasic from "../../../../graphql/queries/guild/guildBasic";
import TabsManager from "../../../../components/Tabs";
import GeneralBasic from "./Basic";
import GeneralFeedback from "./Feedback";
import GeneralEvents from "./Events";
import GeneralTagsStories from "./TagsStories";
import GeneralLeveling from "./Leveling";

const boxesHeader = css`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;

  & > div {
    margin-bottom: 20px;
    margin-right: 20px;
  }
`;

export default React.memo(() => {
  return (
    <React.Fragment>
      <section>
        <Heading>General</Heading>
        <SubHeader>
          Welcome to the general settings page for G4M3R. You can find other features by
          clicking on the pages in the sidebar.
          <br />
          <br />
          Thank you for choosing G4M3R!
        </SubHeader>
      </section>

      <Editor query={qGuildBasic} mutation={mutationQuery}>
        <TabsManager>
          <TabsManager.Section name="Basic">
            <div className={boxesHeader}>
              <GeneralBasic />
            </div>
          </TabsManager.Section>

          <TabsManager.Section name="Feedback">
            <div className={boxesHeader}>
              <GeneralFeedback />
            </div>
          </TabsManager.Section>

          <TabsManager.Section name="Events">
            <div className={boxesHeader}>
              <GeneralEvents />
            </div>
          </TabsManager.Section>

          <TabsManager.Section name="Tags/Stories">
            <div className={boxesHeader}>
              <GeneralTagsStories />
            </div>
          </TabsManager.Section>

          <TabsManager.Section name="Leveling">
            <div className={boxesHeader}>
              <GeneralLeveling />
            </div>
          </TabsManager.Section>
        </TabsManager>
      </Editor>
    </React.Fragment>
  );
});
