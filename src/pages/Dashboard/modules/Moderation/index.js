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

const channelSelector = (type, mutateString, channelQuery) => {
	return (
		<div>
			<br/>
			<Box.Title>{type} Log Channel</Box.Title>
			<Query query={qTimezone}>
				{({ loading, error, data }) => {
					if (loading) return "Loading";
					if (error) return "Error";
					{/* TODO: Query these channels names */}
					let values = [{ key: 'first', value: 'first channel' }, { key: 'second', value: 'second channel' }];

					{/* TODO: fill this in properly */}
					return (
						<Editor.Select
							values={values}
							mutate={mutateString}
							query={channelQuery}
							/>
						);
					}}
			</Query>
		</div>
		)
}

const createStatusAndChannelsBoxes = (type, currentStatus, channelQuery, mutateString) => {
	return (
		<div>
			<Editor query={qGuildBasic} mutation={mutationQuery}>
				<Box padding style={{width: "100%"}}>
					<Box.Title>{type} Log Status</Box.Title>
					<Box.Body>
						<Checkbox>{currentStatus ? 'Enabled' : 'Disabled'}</Checkbox>
						{currentStatus ? channelSelector(type, mutateString, channelQuery) : null}
					</Box.Body>
				</Box>
			</Editor>
		</div>
	);
}

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
	{ name: 'Mod', status: true, query: 'moderation.channel' },
	{ name: 'Public', status: false, query: 'moderation.publicModlogChannel' },
	{ name: 'Server', status: true, query: 'serverLogs.mainChannel' },
];

const serverLogs = [
	{ name: 'Role Create', status: true, query: 'serverLogs.roleCreate' },
	{ name: 'Role Delete', status: true, query: 'serverLogs.roleDelete' },
	{ name: 'Role Update', status: true, query: 'serverLogs.roleUpdate' },
	{ name: 'Member Add', status: true, query: 'serverLogs.memberAdd' },
	{ name: 'Member Remove', status: true, query: 'serverLogs.memberRemove' },
	{ name: 'Command Ran', status: true, query: 'serverLogs.cmdRan' },
	{ name: 'Tag Ran', status: true, query: 'serverLogs.tagRan' },
	{ name: 'Story Ran', status: true, query: 'serverLogs.storyRan' },
	{ name: 'Message Delete', status: true, query: 'serverLogs.msgDeleted' },
	{ name: 'Message Edit', status: true, query: 'serverLogs.msgUpdate' },
	{ name: 'Emoji Create', status: true, query: 'serverLogs.emojiCreate' },
	{ name: 'Emoji Delete', status: true, query: 'serverLogs.emojiDelete' },
	{ name: 'Emoji Update', status: true, query: 'serverLogs.emojiUpdate' },
	{ name: 'Channel Create', status: true, query: 'serverLogs.channelCreate' },
	{ name: 'Channel Delete', status: true, query: 'serverLogs.channelDelete' },
	{ name: 'Channel Update', status: true, query: 'serverLogs.channelUpdate' },
	{ name: 'Server Deaf', status: true, query: 'serverLogs.serverDeaf' },
	{ name: 'Server Mute', status: true, query: 'serverLogs.serverMute' },
	{ name: 'Nickname Change', status: true, query: 'serverLogs.nicknameChanged' },
	{ name: 'Member Perms', status: true, query: 'serverLogs.memberRolePermissionsChanged' },
	{ name: 'Member Roles', status: true, query: 'serverLogs.memberRoleUpdated' },
	{ name: 'Member Ban', status: true, query: 'serverLogs.guildBanAdd' },
	{ name: 'Member Unban', status: true, query: 'serverLogs.guildBanRemove' }
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
						<br/>
						<br/>
						Our bots moderation tools help run Official gaming servers for servers like Arena of Valor Official Discord Server.
						<br/>
						<br/>
						Learning to master the moderation tools on G4M3R, can make your server just as amazing!
          </SubHeader>
        </section>
        <section>
					<Heading2>Moderation Logs</Heading2>
					// TODO: Fix the queries to actually edit the settings when toggled.
					<div className={boxesHeader}>
					{mainLogs.map((opt, index) => {
						return createStatusAndChannelsBoxes(opt.name, opt.status, opt.query)
					})}
					</div>
					<Heading2>Individual Server Logs</Heading2>
					<div className={boxesHeader}>
						{serverLogs.map((opt, index) => {
							return createStatusAndChannelsBoxes(opt.name, opt.status, opt.query)
						})}
					</div>
				</section>
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
								<Box.Title>Inactive Role</Box.Title>
								<Query query={qTimezone}>
									{({ loading, error, data }) => {
										if (loading) return "Loading";
										if (error) return "Error";
										{/* TODO: Query these channels names */}
										let values = [{ key: 'first', value: 'first role' }, { key: 'second', value: 'second role' }];
										const mutateString = "TODO";
										const roleQuery = "TODO";

										{/* TODO: fill this in properly */}
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
								<Box.Title>Max Warnings Role</Box.Title>
								<Query query={qTimezone}>
									{({ loading, error, data }) => {
										if (loading) return "Loading";
										if (error) return "Error";
										{/* TODO: Query these channels names */}
										let values = [{ key: 'first', value: 'first role' }, { key: 'second', value: 'second role' }];
										const mutateString = "TODO";
										const roleQuery = "TODO";

										{/* TODO: fill this in properly */}
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
						</div>
						</Editor>
          </div>
				</section>



				<section>
				<Heading2>Mute Roles</Heading2>
				<div className={boxesHeader}>
					<Editor query={qGuildBasic} mutation={mutationQuery}>
						<Box padding>
							<Box.Title>Text Muted Role</Box.Title>
							<Query query={qTimezone}>
								{({ loading, error, data }) => {
									if (loading) return "Loading";
									if (error) return "Error";
									{/* TODO: Query these channels names */}
									let values = [{ key: 'first', value: 'first role' }, { key: 'second', value: 'second role' }];
									const mutateString = "TODO";
									const roleQuery = "TODO";

									{/* TODO: fill this in properly */}
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
							<Box.Title>Voice Muted Role</Box.Title>
							<Query query={qTimezone}>
								{({ loading, error, data }) => {
									if (loading) return "Loading";
									if (error) return "Error";
									{/* TODO: Query these channels names */}
									let values = [{ key: 'first', value: 'first role' }, { key: 'second', value: 'second role' }];
									const mutateString = "TODO";
									const roleQuery = "TODO";

									{/* TODO: fill this in properly */}
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
					<Query query={qTimezone}>
						{({ loading, error, data }) => {
							if (loading) return "Loading";
							if (error) return "Error";
							{/* TODO: Query these channels names */}
							let values = [{ key: 'first', value: 'Admins Only' }, { key: 'second', value: 'Admins + Mods' }];
							const mutateString = "TODO";
							const roleQuery = "TODO";

							{/* TODO: fill this in properly */}
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
						<Box.Title>Auto Assign Role</Box.Title>
						<Query query={qTimezone}>
							{({ loading, error, data }) => {
								if (loading) return "Loading";
								if (error) return "Error";
								{/* TODO: Query these channels names */}
								let values = [{ key: 'first', value: 'role 1' }, { key: 'second', value: 'role 2' }];
								const mutateString = "TODO";
								const roleQuery = "TODO";

								{/* TODO: fill this in properly */}
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
				<Heading2>Auto Moderation</Heading2>
				// TODO: Fix this current value label
				<div className={boxesHeader}>
					<Editor query={qGuildBasic} mutation={mutationQuery}>
						<Box padding>
							<Box.Title>Auto Assign Role</Box.Title>
							<Query query={qTimezone}>
								{({ loading, error, data }) => {
									if (loading) return "Loading";
									if (error) return "Error";
									{/* TODO: Query these channels names */}
									let values = [{ key: 'first', value: 'role 1' }, { key: 'second', value: 'role 2' }];
									const mutateString = "TODO";
									const roleQuery = "TODO";

									{/* TODO: fill this in properly */}
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
							<Query query={qTimezone}>
								{({ loading, error, data }) => {
									if (loading) return "Loading";
									if (error) return "Error";
									{/* TODO: Query these channels names */}
									let values = [{ key: 'first', value: 'role 1' }, { key: 'second', value: 'role 2' }];
									const mutateString = "TODO";
									const roleQuery = "TODO";

									{/* TODO: fill this in properly */}
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
							<Box.Title>Verification Role</Box.Title>
							<Query query={qTimezone}>
								{({ loading, error, data }) => {
									if (loading) return "Loading";
									if (error) return "Error";
									{/* TODO: Query these channels names */}
									let values = [{ key: 'first', value: 'role 1' }, { key: 'second', value: 'role 2' }];
									const mutateString = "TODO";
									const roleQuery = "TODO";

									{/* TODO: fill this in properly */}
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
							<Box.Title>Reset Verification</Box.Title>
							<Box.Body>
								<Checkbox>Disabled</Checkbox>
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
