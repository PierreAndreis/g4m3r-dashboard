import React, { Component } from "react";
import { css } from "emotion";

import { Heading, SubHeader, Heading2 } from "../../../../components/Typography";
import Box from "../../../../components/Box";
// import Input from "../../../../components/Input";
// import Select from "../../../../components/Select";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import Checkbox from "../../../../components/Checkbox";
import Editor from "../../../../components/Editor";
import qGuildBasic from "../../../../graphql/queries/guild/guildBasic";
import qTimezone from "../../../../graphql/queries/utils/timezone";

const boxesHeader = css`
  display: flex;
  flex-wrap: wrap;

  & > div {
    margin-bottom: 20px;
    margin-right: 20px;
  }
`;

const cleanUpTimezone = timezones =>
  timezones.map(timezone => ({
    key: timezone,
    value: timezone,
  }));

// todo: remove from here, put on graphql folder
const mutationQuery = gql`
  mutation editGuild($guildId: String!, $input: guildInput!) {
    set(id: $guildId, input: $input) {
      name
      id
      configs {
        settings {
          moderation
        }
      }
    }
  }
`;

class GeneralEditor extends Component {
  render() {
    // let guildId = this.props.match.params.guildId;
    return (
      <React.Fragment>
        <section>
          <Heading>Moderation</Heading>
          <SubHeader>
						Are you ready to set up all the moderation tools you need for your server?
						<br/>
						<br/>
						Our bots moderation tools help run Official gaming servers for servers like Arena of Valor Official Discord Server.
						<br/>
						<br/>
						Learning to master the moderation tools on G4M3R, can make your server just as amazing!
          </SubHeader>
        </section>
        <section>
          <Heading2>Mod Logs</Heading2>
          <div className={boxesHeader}>
            <Editor query={qGuildBasic} mutation={mutationQuery}>
              <Box padding>
                <Box.Title>Mod Log Status</Box.Title>
                <Box.Body>
                  <Checkbox></Checkbox>
                </Box.Body>
              </Box>
            </Editor>
          </div>
				</section>
				<section>
				<Heading2>Moderation Values</Heading2>
          <div className={boxesHeader}>
            <Editor query={qGuildBasic} mutation={mutationQuery}>
							<Box padding>
								<Box.Title>Prefix</Box.Title>
								<Box.Body>
						<Editor.Input mutate="prefix" query="guild.configs.settings.prefix" />
						</Box.Body>
					</Box>
					<Box padding>
                <Box.Title>Mod Log Status</Box.Title>
                <Box.Body>
                  <Checkbox></Checkbox>
                </Box.Body>
              </Box>
            </Editor>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default GeneralEditor;
