import HelpText from "./help/moderation";

export const mainLogs = [
  {
    name: "Mod Logs",
    query: "guild.settings.settings.moderation.channel",
    mutate: "modlogChannel",
    checkboxMutate: "modlogStatus",
    checkboxQuery: "guild.settings.settings.moderation.status",
    help: HelpText.basic.modLogs,
  },
  {
    name: "Public Logs",
    query: "guild.settings.settings.moderation.publicModlogChannel",
    mutate: "publiclogChannel",
    checkboxMutate: "publiclogStatus",
    checkboxQuery: "guild.settings.settings.moderation.publicModlogStatus",
    help: HelpText.basic.publicLogs,
  },
  {
    name: "Server Logs",
    query: "guild.settings.settings.serverLogs.mainChannel",
    mutate: "serverlogChannel",
    checkboxMutate: "serverlogStatus",
    checkboxQuery: "guild.settings.settings.serverLogs.status",
    help: HelpText.basic.serverLogs,
  },
];

export const serverLogs = [
  {
    name: "Channel Create",
    mutate: "channelCreate",
    query: "guild.settings.settings.serverLogs.channelCreate.channel",
    help: HelpText.serverlogs.channelCreate,
  },
  {
    name: "Channel Delete",
    mutate: "channelDelete",
    query: "guild.settings.settings.serverLogs.channelDelete.channel",
    help: HelpText.serverlogs.channelDelete,
  },
  {
    name: "Channel Update",
    mutate: "channelUpdate",
    query: "guild.settings.settings.serverLogs.channelUpdate.channel",
    help: HelpText.serverlogs.channelUpdate,
  },
  {
    name: "Command Ran",
    mutate: "cmdRan",
    query: "guild.settings.settings.serverLogs.cmdRan.channel",
    help: HelpText.serverlogs.commandRan,
  },
  {
    name: "Emoji Create",
    mutate: "emojiCreate",
    query: "guild.settings.settings.serverLogs.emojiCreate.channel",
    help: HelpText.serverlogs.emojiCreated,
  },
  {
    name: "Emoji Delete",
    mutate: "emojiDelete",
    query: "guild.settings.settings.serverLogs.emojiDelete.channel",
    help: HelpText.serverlogs.emojiDelete,
  },
  {
    name: "Emoji Update",
    mutate: "emojiUpdate",
    query: "guild.settings.settings.serverLogs.emojiUpdate.channel",
    help: HelpText.serverlogs.emojiUpdate,
  },
  {
    name: "Member Add",
    mutate: "memberAdd",
    query: "guild.settings.settings.serverLogs.memberAdd.channel",
    help: HelpText.serverlogs.memberAdd,
  },
  {
    name: "Member Ban",
    mutate: "guildBanAdd",
    query: "guild.settings.settings.serverLogs.guildBanAdd.channel",
    help: HelpText.serverlogs.memberBan,
  },
  {
    name: "Member Perms",
    mutate: "memberRolePermissionsChanged",
    query: "guild.settings.settings.serverLogs.memberRolePermissionsChanged.channel",
    help: HelpText.serverlogs.memberPerms,
  },
  {
    name: "Member Remove",
    mutate: "memberRemove",
    query: "guild.settings.settings.serverLogs.memberRemove.channel",
    help: HelpText.serverlogs.memberRemove,
  },
  {
    name: "Member Roles",
    mutate: "memberRoleUpdated",
    query: "guild.settings.settings.serverLogs.memberRoleUpdated.channel",
    help: HelpText.serverlogs.memberRoles,
  },
  {
    name: "Member Unban",
    mutate: "guildBanRemove",
    query: "guild.settings.settings.serverLogs.guildBanRemove.channel",
    help: HelpText.serverlogs.memberUnban,
  },
  {
    name: "Message Delete",
    mutate: "msgDeleted",
    query: "guild.settings.settings.serverLogs.msgDeleted.channel",
    help: HelpText.serverlogs.messageDelete,
  },
  {
    name: "Message Edit",
    mutate: "msgUpdate",
    query: "guild.settings.settings.serverLogs.msgUpdate.channel",
    help: HelpText.serverlogs.messageEdit,
  },
  {
    name: "Nickname Change",
    mutate: "nicknameChanged",
    query: "guild.settings.settings.serverLogs.nicknameChanged.channel",
    help: HelpText.serverlogs.nicknameChange,
  },
  {
    name: "Role Create",
    mutate: "roleCreate",
    query: "guild.settings.settings.serverLogs.roleCreate.channel",
    help: HelpText.serverlogs.roleCreate,
  },
  {
    name: "Role Delete",
    mutate: "roleDelete",
    query: "guild.settings.settings.serverLogs.roleDelete.channel",
    help: HelpText.serverlogs.roleDelete,
  },
  {
    name: "Role Update",
    mutate: "roleUpdate",
    query: "guild.settings.settings.serverLogs.roleUpdate.channel",
    help: HelpText.serverlogs.roleUpdate,
  },
  {
    name: "Server Deaf",
    mutate: "serverDeaf",
    query: "guild.settings.settings.serverLogs.serverDeaf.channel",
    help: HelpText.serverlogs.serverDeaf,
  },
  {
    name: "Server Mute",
    mutate: "serverMute",
    query: "guild.settings.settings.serverLogs.serverMute.channel",
    help: HelpText.serverlogs.serverMute,
  },
  {
    name: "Story Ran",
    mutate: "storyRan",
    query: "guild.settings.settings.serverLogs.storyRan.channel",
    help: HelpText.serverlogs.storyRan,
  },
  {
    name: "Tag Ran",
    mutate: "tagRan",
    query: "guild.settings.settings.serverLogs.tagRan.channel",
    help: HelpText.serverlogs.tagRan,
  },
].sort((a, b) => (a.name > b.name ? 1 : 1));

export const modFeatureToggles = [
  {
    query: "guild.settings.settings.hibye.welcome.channel",
    mutate: "welcomeChannelStatus",
    children: "Welcome Channel Status",
    help: HelpText.basic.welcomeChannelStatus,
  },
  {
    query: "guild.settings.settings.hibye.welcome.dm",
    mutate: "welcomeDmStatus",
    children: "Welcome DM Status",
    help: HelpText.basic.welcomeDmStatus,
  },
  {
    query: "guild.settings.settings.hibye.goodbye.channel",
    mutate: "goodbyeChannelStatus",
    children: "Goodbye Channel Status",
    help: HelpText.basic.goodbyeChannelStatus,
  },
  {
    query: "guild.settings.settings.hibye.goodbye.dm",
    mutate: "goodbyeDmStatus",
    children: "Goodbye DM Status",
    help: HelpText.basic.goodbyeDmStatus,
  },
];
