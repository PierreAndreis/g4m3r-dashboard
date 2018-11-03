import HelpText from "./help/index";

export const mainLogs = [
  {
    name: "Mod Logs",
    query: "guild.settings.settings.moderation.channel",
    mutate: "modlogChannel",
    checkboxMutate: "modlogStatus",
    checkboxQuery: "guild.settings.settings.moderation.status",
    help: HelpText.ModLogsHelp,
  },
  {
    name: "Public Logs",
    query: "guild.settings.settings.moderation.publicModlogChannel",
    mutate: "publiclogChannel",
    checkboxMutate: "publiclogStatus",
    checkboxQuery: "guild.settings.settings.moderation.publicModlogStatus",
    help: HelpText.PublicLogsHelp,
  },
  {
    name: "Server Logs",
    query: "guild.settings.settings.serverLogs.mainChannel",
    mutate: "serverlogChannel",
    checkboxMutate: "serverlogStatus",
    checkboxQuery: "guild.settings.settings.serverLogs.status",
    help: HelpText.ServerLogsHelp,
  },
];

export const serverLogs = [
  {
    name: "Role Create",
    mutate: "roleCreate",
    query: "guild.settings.settings.serverLogs.roleCreate.channel",
    help: HelpText.RoleCreateLogHelp,
  },
  {
    name: "Role Delete",
    mutate: "roleDelete",
    query: "guild.settings.settings.serverLogs.roleDelete.channel",
    help: HelpText.RoleDeleteLogHelp,
  },
  {
    name: "Role Update",
    mutate: "roleUpdate",
    query: "guild.settings.settings.serverLogs.roleUpdate.channel",
    help: HelpText.RoleUpdateLogHelp,
  },
  {
    name: "Member Add",
    mutate: "memberAdd",
    query: "guild.settings.settings.serverLogs.memberAdd.channel",
    help: HelpText.MemberAddLogHelp,
  },
  {
    name: "Member Remove",
    mutate: "memberRemove",
    query: "guild.settings.settings.serverLogs.memberRemove.channel",
    help: HelpText.MemberRemoveLogHelp,
  },
  {
    name: "Command Ran",
    mutate: "cmdRan",
    query: "guild.settings.settings.serverLogs.cmdRan.channel",
    help: HelpText.CommandRanLogHelp,
  },
  {
    name: "Tag Ran",
    mutate: "tagRan",
    query: "guild.settings.settings.serverLogs.tagRan.channel",
    help: HelpText.TagRanLogHelp,
  },
  {
    name: "Story Ran",
    mutate: "storyRan",
    query: "guild.settings.settings.serverLogs.storyRan.channel",
    help: HelpText.StoryRanLogHelp,
  },
  {
    name: "Message Delete",
    mutate: "msgDeleted",
    query: "guild.settings.settings.serverLogs.msgDeleted.channel",
    help: HelpText.MessageDeleteLogHelp,
  },
  {
    name: "Message Edit",
    mutate: "msgUpdate",
    query: "guild.settings.settings.serverLogs.msgUpdate.channel",
    help: HelpText.MessageEditLogHelp,
  },
  {
    name: "Emoji Create",
    mutate: "emojiCreate",
    query: "guild.settings.settings.serverLogs.emojiCreate.channel",
    help: HelpText.EmojiCreateLogHelp,
  },
  {
    name: "Emoji Delete",
    mutate: "emojiDelete",
    query: "guild.settings.settings.serverLogs.emojiDelete.channel",
    help: HelpText.EmojiDeleteLogHelp,
  },
  {
    name: "Emoji Update",
    mutate: "emojiUpdate",
    query: "guild.settings.settings.serverLogs.emojiUpdate.channel",
    help: HelpText.EmojiUpdateLogHelp,
  },
  {
    name: "Channel Create",
    mutate: "channelCreate",
    query: "guild.settings.settings.serverLogs.channelCreate.channel",
    help: HelpText.ChannelCreateLogHelp,
  },
  {
    name: "Channel Delete",
    mutate: "channelDelete",
    query: "guild.settings.settings.serverLogs.channelDelete.channel",
    help: HelpText.ChannelDeleteLogHelp,
  },
  {
    name: "Channel Update",
    mutate: "channelUpdate",
    query: "guild.settings.settings.serverLogs.channelUpdate.channel",
    help: HelpText.ChannelUpdateLogHelp,
  },
  {
    name: "Server Deaf",
    mutate: "serverDeaf",
    query: "guild.settings.settings.serverLogs.serverDeaf.channel",
    help: HelpText.ServerDeafLogHelp,
  },
  {
    name: "Server Mute",
    mutate: "serverMute",
    query: "guild.settings.settings.serverLogs.serverMute.channel",
    help: HelpText.ServerMuteLogHelp,
  },
  {
    name: "Nickname Change",
    mutate: "nicknameChanged",
    query: "guild.settings.settings.serverLogs.nicknameChanged.channel",
    help: HelpText.NicknameChangeLogHelp,
  },
  {
    name: "Member Perms",
    mutate: "memberRolePermissionsChanged",
    query: "guild.settings.settings.serverLogs.memberRolePermissionsChanged.channel",
    help: HelpText.MemberPermsLogHelp,
  },
  {
    name: "Member Roles",
    mutate: "memberRoleUpdated",
    query: "guild.settings.settings.serverLogs.memberRoleUpdated.channel",
    help: HelpText.MemberRolesLogHelp,
  },
  {
    name: "Member Ban",
    mutate: "guildBanAdd",
    query: "guild.settings.settings.serverLogs.guildBanAdd.channel",
    help: HelpText.MemberBanLogHelp,
  },
  {
    name: "Member Unban",
    mutate: "guildBanRemove",
    query: "guild.settings.settings.serverLogs.guildBanRemove.channel",
    help: HelpText.MemberUnbanLogHelp,
  },
];

export const modFeatureToggles = [
  {
    query: "guild.settings.settings.hibye.welcome.channel",
    mutate: "welcomeChannelStatus",
    children: "Welcome Channel Status",
    help: HelpText.WelcomeChannelStatusHelp,
  },
  {
    query: "guild.settings.settings.hibye.welcome.dm",
    mutate: "welcomeDmStatus",
    children: "Welcome DM Status",
    help: HelpText.WelcomeDMStatusHelp,
  },
  {
    query: "guild.settings.settings.hibye.goodbye.channel",
    mutate: "goodbyeChannelStatus",
    children: "Goodbye Channel Status",
    help: HelpText.GoodbyeChannelStatusHelp,
  },
  {
    query: "guild.settings.settings.hibye.goodbye.dm",
    mutate: "goodbyeDmStatus",
    children: "Goodbye DM Status",
    help: HelpText.GoodbyeDMStatusHelp,
  },
];
