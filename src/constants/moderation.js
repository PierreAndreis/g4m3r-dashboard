import ModLogsHelp from "./help/moderation/basic/ModLogsHelp";
import ServerLogsHelp from "./help/moderation/basic/ServerLogsHelp";
import PublicLogsHelp from "./help/moderation/basic/PublicLogsHelp";
import WelcomeChannelStatusHelp from "./help/moderation/basic/WelcomeChannelStatusHelp";
import WelcomeDMStatusHelp from "./help/moderation/basic/WelcomeDMStatusHelp";
import GoodbyeChannelStatusHelp from "./help/moderation/basic/GoodbyeChannelStatusHelp";
import GoodbyeDMStatusHelp from "./help/moderation/basic/GoodbyeDMStatusHelp";
import RoleCreateLogHelp from "./help/moderation/serverlogs/RoleCreateLogHelp";

export const mainLogs = [
  {
    name: "Mod Logs",
    query: "guild.settings.settings.moderation.channel",
    mutate: "modlogChannel",
    checkboxMutate: "modlogStatus",
    checkboxQuery: "guild.settings.settings.moderation.status",
    help: ModLogsHelp,
  },
  {
    name: "Public Logs",
    query: "guild.settings.settings.moderation.publicModlogChannel",
    mutate: "publiclogChannel",
    checkboxMutate: "publiclogStatus",
    checkboxQuery: "guild.settings.settings.moderation.publicModlogStatus",
    help: PublicLogsHelp,
  },
  {
    name: "Server Logs",
    query: "guild.settings.settings.serverLogs.mainChannel",
    mutate: "serverlogChannel",
    checkboxMutate: "serverlogStatus",
    checkboxQuery: "guild.settings.settings.serverLogs.status",
    help: ServerLogsHelp,
  },
];

export const serverLogs = [
  {
    name: "Role Create",
    mutate: "roleCreate",
    query: "guild.settings.settings.serverLogs.roleCreate.channel",
    help: RoleCreateLogHelp,
  },
  {
    name: "Role Delete",
    mutate: "roleDelete",
    query: "guild.settings.settings.serverLogs.roleDelete.channel",
  },
  {
    name: "Role Update",
    mutate: "roleUpdate",
    query: "guild.settings.settings.serverLogs.roleUpdate.channel",
  },
  {
    name: "Member Add",
    mutate: "memberAdd",
    query: "guild.settings.settings.serverLogs.memberAdd.channel",
  },
  {
    name: "Member Remove",
    mutate: "memberRemove",
    query: "guild.settings.settings.serverLogs.memberRemove.channel",
  },
  {
    name: "Command Ran",
    mutate: "cmdRan",
    query: "guild.settings.settings.serverLogs.cmdRan.channel",
  },
  {
    name: "Tag Ran",
    mutate: "tagRan",
    query: "guild.settings.settings.serverLogs.tagRan.channel",
  },
  {
    name: "Story Ran",
    mutate: "storyRan",
    query: "guild.settings.settings.serverLogs.storyRan.channel",
  },
  {
    name: "Message Delete",
    mutate: "msgDeleted",
    query: "guild.settings.settings.serverLogs.msgDeleted.channel",
  },
  {
    name: "Message Edit",
    mutate: "msgUpdate",
    query: "guild.settings.settings.serverLogs.msgUpdate.channel",
  },
  {
    name: "Emoji Create",
    mutate: "emojiCreate",
    query: "guild.settings.settings.serverLogs.emojiCreate.channel",
  },
  {
    name: "Emoji Delete",
    mutate: "emojiDelete",
    query: "guild.settings.settings.serverLogs.emojiDelete.channel",
  },
  {
    name: "Emoji Update",
    mutate: "emojiUpdate",
    query: "guild.settings.settings.serverLogs.emojiUpdate.channel",
  },
  {
    name: "Channel Create",
    mutate: "channelCreate",
    query: "guild.settings.settings.serverLogs.channelCreate.channel",
  },
  {
    name: "Channel Delete",
    mutate: "channelDelete",
    query: "guild.settings.settings.serverLogs.channelDelete.channel",
  },
  {
    name: "Channel Update",
    mutate: "channelUpdate",
    query: "guild.settings.settings.serverLogs.channelUpdate.channel",
  },
  {
    name: "Server Deaf",
    mutate: "serverDeaf",
    query: "guild.settings.settings.serverLogs.serverDeaf.channel",
  },
  {
    name: "Server Mute",
    mutate: "serverMute",
    query: "guild.settings.settings.serverLogs.serverMute.channel",
  },
  {
    name: "Nickname Change",
    mutate: "nicknameChanged",
    query: "guild.settings.settings.serverLogs.nicknameChanged.channel",
  },
  {
    name: "Member Perms",
    mutate: "memberRolePermissionsChanged",
    query: "guild.settings.settings.serverLogs.memberRolePermissionsChanged.channel",
  },
  {
    name: "Member Roles",
    mutate: "memberRoleUpdated",
    query: "guild.settings.settings.serverLogs.memberRoleUpdated.channel",
  },
  {
    name: "Member Ban",
    mutate: "guildBanAdd",
    query: "guild.settings.settings.serverLogs.guildBanAdd.channel",
  },
  {
    name: "Member Unban",
    mutate: "guildBanRemove",
    query: "guild.settings.settings.serverLogs.guildBanRemove.channel",
  },
];

export const modFeatureToggles = [
  {
    query: "guild.settings.settings.hibye.welcome.channel",
    mutate: "welcomeChannelStatus",
    children: "Welcome Channel Status",
    help: WelcomeChannelStatusHelp,
  },
  {
    query: "guild.settings.settings.hibye.welcome.dm",
    mutate: "welcomeDmStatus",
    children: "Welcome DM Status",
    help: WelcomeDMStatusHelp,
  },
  {
    query: "guild.settings.settings.hibye.goodbye.channel",
    mutate: "goodbyeChannelStatus",
    children: "Goodbye Channel Status",
    help: GoodbyeChannelStatusHelp,
  },
  {
    query: "guild.settings.settings.hibye.goodbye.dm",
    mutate: "goodbyeDmStatus",
    children: "Goodbye DM Status",
    help: GoodbyeDMStatusHelp,
  },
];
