export default {
  basic: {
    militaryTimeFormat: {
      title: "What is a 24 Hour Time Format?",
      text: "The 24 hour time format allows you to enable Military Time format for features that require time such as the events feature.",
    },
    deleteAllNotifications: {
      title: "What is a Delete All Notifications?",
      text: "The delete all notifications setting will enable/disable the deletion of all bot responses for alerts or notifications when running a command.For example, if you typed something wrong the bot will say this is incorrect please try again and to prevent clutter and spam of such messages you can enable deletion of these messages.",
    },
    deleteAllNotificationsDelay: {
      title: "What is a Delete Notifications Delay?",
      text: "The delete notifications delay is the amount of time the bot will wait before deleting messages from the bot.When you interact with the bot, it will always respond in some way saying you successfully changed this or there was some error and these messages can be cleaned to prevent spam from the bot.",
    },
    enableServerAnalytics: {
      title: "What is a Enable Server Analytics?",
      text: "The enable server analytics setting will enable gathering analytical data from your server for which you will be able to get reports of your server activity on the website in the near future.",
    },
    inChannelGlobalLevelUpNotifications: {
      title: "What is a In Channel Global Level Up Notification?",
      text: "The in channel global level up notification messages are sent when a user types a message in a channel but they leveled up in the global G4M3R leaderboards.The level up message would be sent in this case to the channel where the message was sent and this setting can enable or disable those messages.",
    },
    inChannelServerLevelUpNotifications: {
      title: "What is a In Channel Server Level Up Notification?",
      text: "The in channel server level up notification messages are sent when a user types a message in a channel and they leveled up in the server's G4M3R leaderboards. The level up message would be sent in this case to the channel where the message was sent and this setting can enable or disable those messages.",
    },
    inDMServerLevelUpNotifications: {
      title: "What is a In DM Server Level Up Notification?",
      text: "The in DM server level up notification messages are sent when a user types a message in a channel and they leveled up in the server's G4M3R leaderboards. The level up message can be sent to their DM.",
    },
    menuClosingTime: {
      title: "What is a Menu Closing Time?",
      text: "The menu closing time determines how long the bot will listen to a message when it is asking for a response from you.",
    },
    prefix: {
      title: "What is a Prefix?",
      text: 'The prefix is what tells the bot to listen to that message. If the prefix is set to "." the bot will only respond when starting your message with .as the first letter.',
    },
    timezone: {
      title: "What is a Timezone?",
      text: 'The timezone setting tells the bot what timezone to use on your server for its features like events and such.',
    },
  },
  events: {
    addMemberPermission: {
      title: "What is a Add Permission?",
      text: "The add permission allows you to choose which permission is required to forcibly add users to events on your server.",
    },
    advertiseChannel: {
      title: "What is a Advertise Channel?",
      text: "The advertise channel is the channel where all event advertisements will be posted by default.",
    },
    autoAdvertise: {
      title: "What is a Auto-Advertise?",
      text: "The auto-advertise option will enable or disable automatically advertising all events upon creation in the advertise channel.",
    },
    createPermission: {
      title: "What is a Create Permission?",
      text: "The create permission allows you to choose which permission is required in order to create events on your server.",
    },
    duration: {
      title: "What is a Duration?",
      text: "The duration is how long the events will be when creating an event on your server.",
    },
    game: {
      title: "What is a Game?",
      text: "The game setting allows you to automatically create a default game value for all events created on your server.",
    },    
    maxAttendeesAllowed: {
      title: "What is a Max Attendees Allowed?",
      text: "The max attendees allowed allows you to set the max amount of members that can join your events on your server.",
    },
    reminderTime: {
      title: "What is a Reminder?",
      text: "The reminder setting allows you to create the default reminder time to be sent when creating events on your server.",
    },
    useEventDefaults: {
      title: "What is a Use Event Defaults?",
      text: "The use event defaults setting enables using event defaults that you have created to serve as the event template when making events on your server.",
    },
  },
  feedback: {
    bugChannel: {
      title: "What is a Bug Channel?",
      text: "The bug channel is where all the bug/issue/problem feedback will be sent when an user sends feedback with the feedback command.",
    },
    bugColor: {
      title: "What is a Bug Color?",
      text: "The bug color is the color of the embed that will be used when sending a bug feedback in the bug channel.",
    },
    bugStatus: {
      title: "What is a Bug Status?",
      text: "The bug status will enable/disable allowing users to send feedback on issues in the server to a channel with a clean embed and 2 reactions for other users on the server to be able to vote on.",
    },
    bugThumbDown: {
      title: "What is a Bug Thumbs Down?",
      text: "The bug thumbs down is the emoji that will be used for the vote against reaction whenever a bug/issue is sent with the feedback command.",
    },
    bugThumbUp: {
      title: "What is a Bug Thumbs Up?",
      text: "The bug thumbs up is the emoji that will be used for the vote supporting reaction whenever a bug/issue is sent with the feedback command.",
    },
    ideaChannel: {
      title: "What is a Ideas Channel?",
      text: "The idea channel is where all the idea/suggestions feedback will be sent when an user sends feedback with the feedback command.",
    },
    ideaColor: {
      title: "What is a Ideas Color?",
      text: "The ideas color is the color of the embed that will be used when sending an idea feedback in the bug channel.",
    },
    ideaStatus: {
      title: "What is a Ideas Status?",
      text: "The ideas status will enable/disable allowing users to send feedback on suggestions in the server to a channel with a clean embed and 2 reactions for other users on the server to be able to vote on.",
    },
    ideaThumbDown: {
      title: "What is a Ideas Thumbs Down?",
      text: "The idea thumbs down is the emoji that will be used for the vote against reaction whenever a idea/suggestion is sent with the feedback command.",
    },
    ideaThumbUp: {
      title: "What is a Ideas Thumbs Up?",
      text: "The idea thumbs up is the emoji that will be used for the vote supporting reaction whenever a idea/suggestion is sent with the feedback command.",
    }
  },
  leveling: {
		xpGainPerMessage: {
			title: 'What is Max Mails Per Guild?',
			text: 'Max mails per guild will set the maximum amount of mails allowed to be received at any given time on your server. Once reached, no new mails can be sent until one of them are closed.',
		},
	},
  tags: {
    createPermission: {
      title: "What is a Tags Create Permission?",
      text: "The tags create permission allows you to set the permission level required in order to create tags on your server.",
    },
    triggerDeletion: {
      title: "What is a Tags Trigger Deletion?",
      text: "The tags trigger deletion enables or disables deleting the messages that trigger a tag.",
    },
    usePermission: {
      title: "What is a Tags Use Permission?",
      text: "The tags use permission allows you to set the permission level required in order to use tags on your server.",
    },
  },
  stories: {
    createPermission: {
      title: "What is a Stories Create Permission?",
      text: "The stories create permission allows you to set the permission level required in order to create stories on your server.",
    },
    triggerDeletion: {
      title: "What is a Stories Trigger Deletion?",
      text: "The stories trigger deletion enables or disables deleting the messages that trigger a story.",
    },
    usePermission: {
      title: "What is a Stories Use Permission?",
      text: "The stories use permission allows you to set the permission level required in order to create stories on your server.",
    },
  }
};