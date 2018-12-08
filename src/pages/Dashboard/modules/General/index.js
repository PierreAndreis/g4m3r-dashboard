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

const GeneralPageTabs = [
  { name: "Basic", component: <GeneralBasic /> },
  { name: "Feedback", component: <GeneralFeedback /> },
  { name: "Events", component: <GeneralEvents /> },
  { name: "Tags/Stories", component: <GeneralTagsStories /> },
];
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
          {GeneralPageTabs.map((tab, index) => {
            return (
              <TabsManager.Section name={tab.name} key={index}>
                <div className={boxesHeader}>
                  {tab.component}
                </div>
              </TabsManager.Section>
            )
          })}
        </TabsManager>
      </Editor>
    </React.Fragment>
  );
});
