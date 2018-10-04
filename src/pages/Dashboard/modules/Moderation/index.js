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
import qRoles from "../../../../graphql/queries/guild/roles";
import qChannels from "../../../../graphql/queries/guild/channels";
// import qPermissions from "../../../../graphql/queries/client/permissions";

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
      <Editor query={qGuildBasic} mutation={mutationQuery}>
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
                type: opt.name,
                currentStatus: opt.status,
                query: opt.query,
                mutateString: opt.mutate,
              });
            })}
          </div>
          <Heading2>Individual Server Logs</Heading2>
          <div className={boxesHeader}>
            {serverLogs.map((opt, index) => {
              return createStatusAndChannelsBoxes({
                type: opt.name,
                currentStatus: opt.status,
                query: opt.query,
                mutate: opt.mutate,
              });
            })}
          </div>
        </section>
        {/*
				<section>
				<Heading2>Moderation Values</Heading2>
          <div className={boxesHeader}>
            <Editor query={qGuildBasic} mutation={mutationQuery}>
							<Box padding>
								<Box.Title>Max Warnings</Box.Title>
								<Box.Body>
								// TODO: validate this is a valid integer
								<Editor.Input mutate="TODO" query="guild.settings.settings.moderation.maxNoWarnings" />
								</Box.Body>
							</Box>

							<Box padding>
								<Box.Title>Max Inactive Time</Box.Title>
								<Box.Body>
								// TODO: validate this is a valid integer
								<Editor.Input mutate="TODO" query="guild.settings.settings.moderation.maxInactivityTime" />
								</Box.Body>
							</Box>

							<div>
							<Box padding>
								{channelOrRoleSelector({ isChannel: false, type: 'Inactive', mutateString: "TODO", query: "TODO" })}
							</Box>

							<Box padding>
								{channelOrRoleSelector({ isChannel: false, type: 'Max Warnings', mutateString: "TODO", query: "TODO" })}
							</Box>
						</div>
						</Editor>
          </div>
				</section>



				<section>
				<Heading2>Mute Roles</Heading2>
				<div className={boxesHeader}>
					<Editor query={qGuildBasic} mutation={mutationQuery}>
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
				<Editor query={qGuildBasic} mutation={mutationQuery}>
				<Box padding>
					<Box.Title>Mod Mail Status</Box.Title>
					<Box.Body>
						<Checkbox>Disabled</Checkbox>
					</Box.Body>
				</Box>

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

				<Box padding>
					<Box.Title>Max Mails Per Guild</Box.Title>
					<Box.Body>
					// TODO: validate this is a valid integer
					<Editor.Input mutate="TODO" query="guild.settings.settings.mail.maxMailsTotal" />
					</Box.Body>
				</Box>

				<Box padding>
					<Box.Title>Max Mails Per User</Box.Title>
					<Box.Body>
					// TODO: validate this is a valid integer
					<Editor.Input mutate="TODO" query="guild.settings.settings.mail.maxMailPerUser" />
					</Box.Body>
				</Box>

				</Editor>
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

					<Box padding>
						<Box.Title>Capital Spam Status</Box.Title>
						<Box.Body>
							<Checkbox>Disabled</Checkbox>
						</Box.Body>
					</Box>

					<Box padding>
						<Box.Title>Capital Spam Percentage</Box.Title>
						<Box.Body>
						// TODO: validate this is a valid integer
						<Editor.Input mutate="TODO" query="guild.settings.settings.moderation.capitalPercentage.amount" />
						</Box.Body>
					</Box>

					<Box padding>
						<Box.Title>Max Mails Per User</Box.Title>
						<Box.Body>
						// TODO: validate this is a valid integer
						<Editor.Input mutate="TODO" query="guild.settings.settings.mail.maxMailPerUser" />
						</Box.Body>
					</Box>

					<Box padding>
						<Box.Title>Naughty Words Filter Status</Box.Title>
						<Box.Body>
							<Checkbox>Disabled</Checkbox>
						</Box.Body>
					</Box>

					<Box padding>
						<Box.Title>Naughty Words</Box.Title>
						<Box.Body>
						// TODO: Allow a bunch of words to show
						<Editor.Input mutate="TODO" query="guild.settings.settings.moderation.naughtyWords.words" />
						</Box.Body>
					</Box>

					// TODO: Unique Role Sets are missing need to think how to do it.
			</Editor>
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
