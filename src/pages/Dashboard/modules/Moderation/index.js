import React from "react";
import { css } from "emotion";
import { Heading, SubHeader } from "../../../../components/Typography";
import mutationQuery from "../../../../graphql/queries/mutations/moderation";
import Editor from "../../../../components/Editor";
import qGuildBasic from "../../../../graphql/queries/guild/guildBasic";
import TabsManager from "../../../../components/Tabs";

import ModerationBasic from "./Basic";
import ModerationServerLogs from "./ServerLogs";
import ModerationMute from "./Mute";
import ModerationMails from "./Mails";
import ModerationAutoMod from "./AutoMod";
import ModerationVerify from "./Verify";

const boxesHeader = css`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  & > div {
    margin-bottom: 20px;
    margin-right: 20px;
  }
`;

export default () => {
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
              <ModerationBasic />
            </div>
          </TabsManager.Section>
          <TabsManager.Section name="Server Logs">
            <div className={boxesHeader}>
              <ModerationServerLogs />
            </div>
          </TabsManager.Section>

          <TabsManager.Section name="Mute Module">
            <div className={boxesHeader}>
              <ModerationMute />
            </div>
          </TabsManager.Section>

          <TabsManager.Section name="Mod Mails">
            <div className={boxesHeader}>
              <ModerationMails />
            </div>
          </TabsManager.Section>

          <TabsManager.Section name="Auto-Mod">
            <div className={boxesHeader}>
              <ModerationAutoMod />
            </div>
          </TabsManager.Section>

          <TabsManager.Section name="Verification">
            <div className={boxesHeader}>
              <ModerationVerify />
            </div>
          </TabsManager.Section>
        </TabsManager>
      </Editor>
    </React.Fragment>
  );
};
