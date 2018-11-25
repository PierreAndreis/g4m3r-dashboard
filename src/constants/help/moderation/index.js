export default {
	automod: {
		afkResponsePermission: {
			title: 'What is AFK Response Permission?',
			text: 'The AFK response permission allows members that have that permission to be able to have AFK message responses on the server. For example, if you only wish to allow Moderators to be able to have AFK message responses when a user @mentions a moderator this is how you set it.'
		},
		autoAssignRole: {
			title: 'What is Auto Assign Role?',
			text: 'The auto assign role is automatically assigned to all users joining your server. If the verification system is enabled in your server, the auto assign role will only be assigned once the member has completed the verification process.'
		},
		bannedWordFilterSTatus: {
			title: 'What is Banned Word Filter Status?',
			text: 'This filter will check every message sent on your server for "banned" words of your choosing. If a banned word is found, the message is deleted and resent by G4M3R with the banned words being replaced with $$$$.'
		},
		capitalSpamFilterMaxAllowedPercentage: {
			title: 'What is Capital Spam Max Allowed Percentage?',
			text: 'This sets the maximum allowed percentage of capital letters that can be used in a server. In order to prevent any abuse of mass deleting messages by setting the 	percentage too low we have set a minimum value of 60%.'
		},
		capitalSpamFilterStatus: {
			title: 'What is Capital Spam Filter Status?',
			text: 'This filter will delete all messages that are sent with too many capitals letters in the message.'
		},
	},
	basic: {
		goodbyeChannelStatus: {
			title: 'What is Goodbye Channel Status?',
			text: 'The goodbye channel status enables or disables whether the goodbye message should be sent in the goodbye channel.',
			image: 'https://i.imgur.com/a4rLEaa.png'
		},
		goodbyeDmStatus: {
			title: 'What is Goodbye DM Status?',
			text: 'The goodbye dm status enables or disables whether the goodbye message should be sent in a private message to the user when join your server. This goodbye message will only be sent if the user shares another server with G4M3R and has Direct Messages enabled.',
			image: 'https://i.imgur.com/xG8gjrU.png'
		},
		modLogs: {
			title: 'What is Mod Logs?',
			text: 'Moderation logs are where you every action taken by a moderator with G4M3R is logged. For example, when you warn, mute, kick, or ban someone the reasons and action can be logged.',
			image: 'https://i.imgur.com/MCQjqmg.png'
		},
		publicLogs: {
			title: 'What are Public Logs?',
			text: 'Public logs are logged actions that you enable to be shown to the public. It will not include information like which moderator is doing the action to prevent witchhunt but helps other players learn how not to behave and avoid punishments by reading the reasons of other punishments. It can also be useful to help players see that your server is growing by making Member Add publiclly logged.',
			image: 'https://i.imgur.com/E8h7XWO.png'
		},
		serverLogs: {
			title: 'What are Server Logs?',
			text: 'Server logs are logged whenever there is an action occuring on the server. For example, you can get logs for when messages are deleted, new emojis added, removed edited, channels created, roles given or removed etc...',
			image: 'https://i.imgur.com/T0DHiF6.png'
		},
		welcomeChannelStatus: {
			title: 'What is Welcome Channel Status?',
			text: 'The welcome channel status enables or disables whether the welcome message should be sent in the welcome channel.',
			image: 'https://i.imgur.com/a4rLEaa.png'
		},
		welcomeDmStatus: {
			title: 'What is Welcome DM Status?',
			text: 'The welcome dm status enables or disables whether the welcome message should be sent in a private message to the user when join your server. This welcome message will only be sent if the user has Direct Messages enabled.',
			image: 'https://i.imgur.com/xG8gjrU.png'
		},
	},
	modmail: {
		maxPerGuild: {
			title: 'What is Max Mails Per Guild?',
			text: 'Max mails per guild will set the maximum amount of mails allowed to be received at any given time on your server. Once reached, no new mails can be sent until one of them are closed.',
		},
		maxPerUser: {
			title: 'What is Max Mails Per User?',
			text: 'Max mails per user will set the maximum amount of mails a user is allowed to be send at any given time on your server. Once reached, no new mails can be sent by that user until one of them are closed.',
		},
		permissionToReply: {
			title: 'What is Permission To Reply?',
			text: 'This permission will set what permission level is necessary for someone to be able to read, reply, and close mails on your server.',
		},
		status: {
			title: 'What is Mod Mails?',
			text: 'This status will enable or disable the mod mail feature on your server. The mod mails allows you to create an amazing way to provide your users to get help/support from moderators/admins of the server. Normally, someone must @mention the entire moderator role and alert all moderators and some may be busy or some may be able to help but everyone is disturbed. The other option is to direct message or @mention one single moderator at a time until you get the response you need. None of these are ideal and that is where Mod Mails come in. It allows the users to send a mail to all mods and admins without pinging all of them and whichever person is available can easily respond when available providing the best support to the users.'
		}
	},
	muted: {
		textMutedRole: {
			title: 'What is Text Muted Role?',
			text: 'This is the role that is assigned to users to prevent them from having permissions to interact with the server when they are muted.',
		},
	  voiceMutedRole: {
			title: 'What is Voice Muted Role?',
			text: 'This is the role that is assigned to users to prevent them from having permissions to voice in the server when they are muted.',
		},
	},
	serverlogs: {
		channelCreate: {
			title: 'What is Channel Create Logs?',
			text: 'Channel create logs are posted whenever someone adds a new channel to the server.'
		},
		channelDelete: {
			title: 'What is Channel Delete Logs?',
			text: 'Channel delete logs are posted whenever someone deletes a channel on the server.'
		},
		channelUpdate: {
			title: 'What is Channel Update Logs?',
			text: 'Channel update logs are posted whenever someone updates a channel on the server.'
		},
		commandRan: {
			title: 'What is Command Ran Logs?',
			text: 'Command ran logs are posted whenever someone uses a command on the bot on your server.'
		},
		emojiCreated: {
			title: 'What is Emoji Create Logs?',
			text: 'Emoji create logs are posted whenever someone adds a new custom emoji to the server.'
		},
		emojiDelete: {
			title: 'What is Emoji Delete Logs?',
			text: 'Emoji delete logs are posted whenever someone deletes a custom emoji on the server.'
		},
		emojiUpdate: {
			title: 'What is Emoji Update Logs?',
			text: 'Emoji update logs are posted whenever someone updates a custom emoji on the server.'
		},
		memberAdd: {
			title: 'What is Member Add Logs?',
			text: 'Member add logs are posted whenever someone joins the server.'
		},
		memberBan: {
			title: 'What is Member Ban Logs?',
			text: 'Member ban logs are posted whenever someone is banned.'
		},
		memberPerms: {
			title: 'What is Member Perms Logs?',
			text: 'Member permissions logs are posted whenever someone updates a members permissions on a server.'
		},
		memberRemove: {
			title: 'What is Member Remove Logs?',
			text: 'Member remove logs are posted whenever someone leaves or is removed the server.'
		},
		memberRoles: {
			title: 'What is Member Roles Logs?',
			text: 'Member role logs are posted whenever someone updates a members roles.'
		},
		memberUnban: {
			title: 'What is Member Unban Logs?',
			text: 'Member unban logs are posted whenever someone is unbanned.'
		},
		messageDelete: {
			title: 'What is Message Delete Logs?',
			text: 'Message delete logs are posted whenever someone deletes a message.'
		},
		messageEdit: {
			title: 'What is Message Edit Logs?',
			text: 'Message edit logs are posted whenever someone edits a message.'
		},
		nicknameChange: {
			title: 'What is Nickname Change Logs?',
			text: 'Nickname change logs are posted whenever someone updates a nickname'
		},
		roleCreate: {
			title: 'What is Role Create Logs?',
			text: 'Role create logs are posted whenever someone creates a new role on the server.',
			image: 'https://i.imgur.com/q75j72S.png'
		},
		roleDelete: {
			title: 'What is Role Delete Logs?',
			text: 'Role delete logs are posted whenever someone deletes a role on the server.',
			image: 'https://i.imgur.com/x4jbszJ.png'
		},
		roleUpdate: {
			title: 'What is Role Update Logs?',
			text: 'Role update logs are posted whenever someone updates a role on the server.',
			image: 'https://i.imgur.com/Nv1qZKu.png'
		},
		serverDeaf: {
			title: 'What is Server Deaf Logs?',
			text: 'Server deaf logs are posted whenever someone is deafened and can no longer listen to voice channels on a server.'
		},
		serverMute: {
			title: 'What is Server Mute Logs?',
			text: 'Server mute logs are posted whenever someone is muted and can no longer speak in voice channels on a server.'
		},
		storyRan: {
			title: 'What is Story Ran Logs?',
			text: 'Story ran logs are posted whenever someone uses a custom story on the bot on your server.'
		},
		tagRan: {
			title: 'What is Tag Ran Logs?',
			text: 'Tag ran logs are posted whenever someone uses a custom tag on the bot on your server.'
		},
	},
	verification: {
		category: {
			title: 'What is Verification Category?',
			text: 'The verification category is where the bot will create new channels for the verification system and also the only category in which the verify command will work.'
		},
		role: {
			title: 'What is Verification Role?',
			text: 'The verification role is a very important role for the verification process. The	bot will automatically create and prepare the server for you when you enable this feature. This role should only be changed if you are an advanced user.'
		},
		systemStatus: {
			title: 'What is Verification System Status?',
			text: 'This will enable or disable the verification system on your server. When enabling it the bot will create a new category, Verification Zone, and a new channel, #verify, where the verification process will take place. It will also create and set up the entire server with the verify role.'
		},
	},
};