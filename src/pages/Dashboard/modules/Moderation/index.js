import React, { Component } from "react";
import { css } from "emotion";

import { Heading, SubHeader, Heading2 } from "../../../../components/Typography";
import Box from "../../../../components/Box";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import Checkbox from "../../../../components/Checkbox";
import Editor from "../../../../components/Editor";
import qRoles from "../../../../graphql/queries/guild/roles";
import qChannels from "../../../../graphql/queries/guild/channels";
// import qPermissions from "../../../../graphql/queries/client/permissions";

const serverLogsStatus = false;

const boxesHeader = css`
  display: flex;
  flex-wrap: wrap;
  & > div {
    margin-bottom: 20px;
    margin-right: 20px;
  }
`;

const makeLineBreak = needBreak => {
  return needBreak ? <br /> : null;
};

const channelOrRoleSelector = props => {
  return (
    <div>
      <Editor query={props.isChannel ? qChannels : qRoles} mutation={mutationQuery}>
        {makeLineBreak(props.isChannel)}
        <Box.Title>
          {props.type} {props.isChannel ? "Log Channel" : "Role"}
        </Box.Title>
        <Query query={props.isChannel ? qChannels : qRoles}>
          {({ loading, error, data }) => {
            if (loading) return "Loading";
            if (error) {
              console.log("it errored;");
              console.log(error);
              return "Error";
            }
            const values = data.map(item => item.name);
            console.log(data);
            return (
              <Editor.Select
                values={values}
                mutate={props.mutateString}
                query={props.query}
              />
            );
          }}
        </Query>
      </Editor>
    </div>
  );
};

const createStatusAndChannelsBoxes = props => {
  return (
    <div>
      <Editor query={qChannels} mutation={mutationQuery}>
        <Box padding style={{ width: "100%" }}>
          <Box.Title>{props.type} Log Status</Box.Title>
          <Box.Body>
            <Checkbox>{props.currentStatus ? "Enabled" : "Disabled"}</Checkbox>
            {props.currentStatus
              ? channelOrRoleSelector({
                  isChannel: true,
                  type: props.type,
                  mutateString: props.mutateString,
                  query: props.query,
                })
              : null}
          </Box.Body>
        </Box>
      </Editor>
    </div>
  );
};

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

const mainLogs = [
  { name: "Mod", status: true, query: "moderation.channel", mutate: "TODO" },
  {
    name: "Public",
    status: false,
    query: "moderation.publicModlogChannel",
    mutate: "TODO",
  },
  { name: "Server", status: true, query: "serverLogs.mainChannel", mutate: "TODO" },
];

const serverLogs = [
  { name: "Role Create", status: true, query: "serverLogs.roleCreate", mutate: "TODO" },
  { name: "Role Delete", status: true, query: "serverLogs.roleDelete", mutate: "TODO" },
  { name: "Role Update", status: true, query: "serverLogs.roleUpdate", mutate: "TODO" },
  { name: "Member Add", status: true, query: "serverLogs.memberAdd", mutate: "TODO" },
  {
    name: "Member Remove",
    status: true,
    query: "serverLogs.memberRemove",
    mutate: "TODO",
  },
  { name: "Command Ran", status: true, query: "serverLogs.cmdRan", mutate: "TODO" },
  { name: "Tag Ran", status: true, query: "serverLogs.tagRan", mutate: "TODO" },
  { name: "Story Ran", status: true, query: "serverLogs.storyRan", mutate: "TODO" },
  {
    name: "Message Delete",
    status: true,
    query: "serverLogs.msgDeleted",
    mutate: "TODO",
  },
  { name: "Message Edit", status: true, query: "serverLogs.msgUpdate", mutate: "TODO" },
  { name: "Emoji Create", status: true, query: "serverLogs.emojiCreate", mutate: "TODO" },
  { name: "Emoji Delete", status: true, query: "serverLogs.emojiDelete", mutate: "TODO" },
  { name: "Emoji Update", status: true, query: "serverLogs.emojiUpdate", mutate: "TODO" },
  {
    name: "Channel Create",
    status: true,
    query: "serverLogs.channelCreate",
    mutate: "TODO",
  },
  {
    name: "Channel Delete",
    status: true,
    query: "serverLogs.channelDelete",
    mutate: "TODO",
  },
  {
    name: "Channel Update",
    status: true,
    query: "serverLogs.channelUpdate",
    mutate: "TODO",
  },
  { name: "Server Deaf", status: true, query: "serverLogs.serverDeaf", mutate: "TODO" },
  { name: "Server Mute", status: true, query: "serverLogs.serverMute", mutate: "TODO" },
  {
    name: "Nickname Change",
    status: true,
    query: "serverLogs.nicknameChanged",
    mutate: "TODO",
  },
  {
    name: "Member Perms",
    status: true,
    query: "serverLogs.memberRolePermissionsChanged",
    mutate: "TODO",
  },
  {
    name: "Member Roles",
    status: true,
    query: "serverLogs.memberRoleUpdated",
    mutate: "TODO",
  },
  { name: "Member Ban", status: true, query: "serverLogs.guildBanAdd", mutate: "TODO" },
  {
    name: "Member Unban",
    status: true,
    query: "serverLogs.guildBanRemove",
    mutate: "TODO",
  },
];

const makeIndividualServerLogs = () => {
  return (
    <div>
      <Heading2>Individual Server Logs</Heading2>
      <div className={boxesHeader}>
        {serverLogs.map((opt, index) => {
          return createStatusAndChannelsBoxes({
            key: index,
            type: opt.name,
            currentStatus: opt.status,
            query: opt.query,
            mutate: opt.mutate,
          });
        })}
      </div>
    </div>
  );
};

const makeInputSettings = props => {
  return (
    <div>
      <Editor query={props.editorQuery} mutation={props.editorMutate}>
        <Box padding>
          <Box.Title>{props.title}</Box.Title>
          <Box.Body>
            // TODO: Need validation of inputs
            <Editor.Input mutate={props.inputMutate} query={props.inputQuery} />
          </Box.Body>
        </Box>
      </Editor>
    </div>
  );
};

const makeStatusToggle = props => {
  return (
    <div>
      <Editor query={props.editorQuery} mutation={props.editorMutate}>
        <Box padding>
          <Box.Title>{props.title}</Box.Title>
          <Box.Body>
            <Checkbox>{props.currentStatus}</Checkbox>
          </Box.Body>
        </Box>
      </Editor>
    </div>
  );
};

class GeneralEditor extends Component {
  render() {
    // let guildId = this.props.match.params.guildId;
    return (
      <React.Fragment>
        <section>
          <Heading>Moderation</Heading>
          <SubHeader>
            Are you ready to set up all the moderation tools you need for your server?
            <br />
            <br />
            Our bots moderation tools help run Official gaming servers for servers like
            Arena of Valor Official Discord Server.
            <br />
            <br />
            Learning to master the moderation tools on G4M3R, can make your server just as
            amazing!
          </SubHeader>
        </section>
        <section>
          <Heading2>Moderation Logs</Heading2>
          // TODO: Fix the queries to actually edit the settings when toggled.
          <div className={boxesHeader}>
            {mainLogs.map((opt, index) => {
              return createStatusAndChannelsBoxes({
                key: index,
                type: opt.name,
                currentStatus: opt.status,
                query: opt.query,
                mutateString: opt.mutate,
              });
            })}
            {serverLogsStatus ? makeIndividualServerLogs() : null}
          </div>
        </section>
        {/*
				<section>
				<Heading2>Moderation Values</Heading2>
					<div className={boxesHeader}>
						{makeInputSettings({ editorQuery: "TODO", editorMutate: "TODO", title: "Max Warnings", inputQuery: "guild.settings.settings.moderation.maxNoWarnings", inputMutate: "TODO" })}
						{makeInputSettings({ editorQuery: "TODO", editorMutate: "TODO", title: "Max Inactive Time", inputQuery: "guild.settings.settings.moderation.maxInactivityTime", inputMutate: "TODO" })}

						<Box padding>
							{channelOrRoleSelector({ isChannel: false, type: 'Inactive', mutateString: "TODO", query: "TODO" })}
						</Box>

						<Box padding>
							{channelOrRoleSelector({ isChannel: false, type: 'Max Warnings', mutateString: "TODO", query: "TODO" })}
						</Box>
          </div>
				</section>



				<section>
				<Heading2>Mute Roles</Heading2>
				<div className={boxesHeader}>
					<Editor query={qRoles} mutation="TODO">
						<Box padding>
							{channelOrRoleSelector({ isChannel: false, type: 'Text Muted', mutateString: "TODO", query: "TODO" })}
						</Box>

						<Box padding>
							{channelOrRoleSelector({ isChannel: false, type: 'Voice Muted', mutateString: "TODO", query: "TODO" })}
						</Box>
					</Editor>
				</div>
			</section>


			<section>
			<Heading2>Mod Mails</Heading2>
			// TODO: Fix this current value label

			<div className={boxesHeader}>
				{makeStatusToggle({ editorQuery: "TODO", editorMutation: "TODO", title: "Mod Mail Status", currentStatus: "TODO" })}

				<Box padding>
					<Box.Title>Permission To Reply</Box.Title>
					<Query query={qRoles}>
						{({ loading, error, data }) => {
							if (loading) return "Loading";
							if (error) return "Error";
							{/* TODO: Query these channels names }
							let values = [{ key: 'first', value: 'Admins Only' }, { key: 'second', value: 'Admins + Mods' }];
							const mutateString = "TODO";
							const roleQuery = "TODO";

							{/* TODO: fill this in properly }
							return (
								<Editor.Select
									values={values}
									mutate={mutateString}
									query={roleQuery}
									/>
								);
							}}
					</Query>
				</Box>
				</Editor>
				{currentModMailStatus ? makeInputSettings({ editorQuery: "TODO", editorMutate: "TODO", title: "Max Mails Per Guild", inputQuery: "guild.settings.settings.mail.maxMailsTotal", inputMutate: "TODO" }) : null}
				{currentModMailStatus ? makeInputSettings({ editorQuery: "TODO", editorMutate: "TODO", title: "Max Mails Per User", inputQuery: "guild.settings.settings.mail.maxMailPerUser", inputMutate: "TODO" }) : null}
			</div>
		</section>



		<section>
			<Heading2>Auto Moderation</Heading2>
			// TODO: Fix this current value label
			<div className={boxesHeader}>
				<Editor query={qGuildBasic} mutation={mutationQuery}>
					<Box padding>
						{channelOrRoleSelector({ isChannel: false, type: 'Auto Assign', mutateString: "TODO", query: "TODO" })}
					</Box>
				</Editor>

				{makeStatusToggle({ editorQuery: "TODO", editorMutation: "TODO", title: "Capital Spam Status", currentStatus: "TODO" })}
				{currentCapitalSpamStatus ? makeInputSettings({ editorQuery: "TODO", editorMutate: "TODO", title: "Capital Spam Percentage", inputQuery: "guild.settings.settings.moderation.capitalPercentage.amount", inputMutate: "TODO" }) : null}

				{makeStatusToggle({ editorQuery: "TODO", editorMutation: "TODO", title: "Naughty Words Filter Status", currentStatus: "TODO" })}
				{currentNaughtyWordFilterStatus ? makeInputSettings({ editorQuery: "TODO", editorMutate: "TODO", title: "Naughty Words", inputQuery: "guild.settings.settings.moderation.naughtyWords.words", inputMutate: "TODO" }) : null}

					// TODO: Unique Role Sets are missing need to think how to do it.
		</div>
	</section>

			<section>
				<Heading2>Welcome/Goodbye</Heading2>
				// TODO: Fix this current value label
				<div className={boxesHeader}>
					<Editor query={qGuildBasic} mutation={mutationQuery}>
						<Box padding>
							<Box.Title>Welcome In Channel Status</Box.Title>
							<Box.Body>
								<Checkbox>Disabled</Checkbox>
								<br/>
								<Box.Title>Welcome In DM Status</Box.Title>
								<Checkbox>Disabled</Checkbox>
							</Box.Body>
						</Box>

						<Box padding>
							<Box.Title>Goodbye In Channel Status</Box.Title>
							<Box.Body>
								<Checkbox>Disabled</Checkbox>
								<br/>
								<Box.Title>Goodbye In DM Status</Box.Title>
								<Checkbox>Disabled</Checkbox>
							</Box.Body>
						</Box>

						// TODO: Welcome and goodbye messages need to be done
					</Editor>
				</div>
			</section>




			<section>
				<Heading2>Verification</Heading2>
				// TODO: Fix this current value label
				<div className={boxesHeader}>
					<Editor query={qGuildBasic} mutation={mutationQuery}>
						<Box padding>
							<Box.Title>Verification Status</Box.Title>
							<Box.Body>
								<Checkbox>Disabled</Checkbox>
							</Box.Body>
						</Box>

						<Box padding>
							<Box.Title>Verification Category</Box.Title>
							<Query query={qChannels}>
								{({ loading, error, data }) => {
									if (loading) return "Loading";
									if (error) return "Error";
									const values = data.channels.filter(channel => channel.type === 'category').map(channel => channel.name);

									const mutateString = "TODO";
									const roleQuery = "TODO";

									{/* TODO: fill this in properly }
									return (
										<Editor.Select
											values={values}
											mutate={mutateString}
											query={roleQuery}
											/>
										);
									}}
							</Query>
						</Box>

						<Box padding>
							<Box.Title>Verification First Message</Box.Title>
							<Box.Body>
							// TODO: validate this is a embed
							<Editor.Input mutate="TODO" query="guild.settings.settings.verify.first" />
							</Box.Body>
						</Box>

						<Box padding>
							{channelOrRoleSelector({ isChannel: false, type: 'Verification', mutateString: "TODO", query: "TODO" })}
						</Box>

						<Box padding>
							<Box.Title>Reset Verification</Box.Title>
							<Box.Body>
								<Checkbox>Disabled</Checkbox>
							</Box.Body>
						</Box>
					</Editor>
				</div>
			</section>
								*/}
      </React.Fragment>
    );
  }
}

export default GeneralEditor;
