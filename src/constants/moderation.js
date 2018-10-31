import ModLogsHelp from "./help/moderation/basic/ModLogsHelp";
import ServerLogsHelp from "./help/moderation/basic/ServerLogsHelp";
import PublicLogsHelp from "./help/moderation/basic/PublicLogsHelp";
import WelcomeChannelStatusHelp from "./help/moderation/basic/WelcomeChannelStatusHelp";
import WelcomeDMStatusHelp from "./help/moderation/basic/WelcomeDMStatusHelp";
import GoodbyeChannelStatusHelp from "./help/moderation/basic/GoodbyeChannelStatusHelp";
import GoodbyeDMStatusHelp from "./help/moderation/basic/GoodbyeDMStatusHelp";
import RoleCreateLogHelp from "./help/moderation/serverlogs/RoleCreateLogHelp";
import RoleDeleteLogHelp from "./help/moderation/serverlogs/RoleDeleteLogHelp";
import RoleUpdateLogHelp from "./help/moderation/serverlogs/RoleUpdateLogHelp";
import MemberAddLogHelp from "./help/moderation/serverlogs/MemberAddLogHelp";
import MemberRemoveLogHelp from "./help/moderation/serverlogs/MemberRemoveLogHelp";
import CommandRanLogHelp from "./help/moderation/serverlogs/CommandRanLogHelp";
import StoryRanLogHelp from "./help/moderation/serverlogs/StoryRanLogHelp";
import TagRanLogHelp from "./help/moderation/serverlogs/TagRanLogHelp";
import MessageDeleteLogHelp from "./help/moderation/serverlogs/MessageDeleteLogHelp";
import MessageEditLogHelp from "./help/moderation/serverlogs/MessageEditLogHelp";
import EmojiCreateLogHelp from "./help/moderation/serverlogs/EmojiCreateLogHelp";
import EmojiDeleteLogHelp from "./help/moderation/serverlogs/EmojiDeleteLogHelp";
import EmojiUpdateLogHelp from "./help/moderation/serverlogs/EmojiUpdateLogHelp";
import ChannelCreateLogHelp from "./help/moderation/serverlogs/ChannelCreateLogHelp";
import ChannelDeleteLogHelp from "./help/moderation/serverlogs/ChannelDeleteLogHelp";
import ChannelUpdateLogHelp from "./help/moderation/serverlogs/ChannelUpdateLogHelp";
import ServerDeafLogHelp from "./help/moderation/serverlogs/ServerDeafLogHelp";
import ServerMuteLogHelp from "./help/moderation/serverlogs/ServerMuteLogHelp";
import NicknameChangeLogHelp from "./help/moderation/serverlogs/NicknameChangeLogHelp.js";
// import NicknameChangeLogHelp from "./help/moderation/serverlogs/NicknameChangeLogHelp";
import MemberPermsLogHelp from "./help/moderation/serverlogs/MemberPermsLogHelp";
import MemberRolesLogHelp from "./help/moderation/serverlogs/MemberRolesLogHelp";
import MemberBanLogHelp from "./help/moderation/serverlogs/MemberBanLogHelp";
import MemberUnbanLogHelp from "./help/moderation/serverlogs/MemberUnbanLogHelp";

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
    help: RoleDeleteLogHelp,
  },
  {
    name: "Role Update",
    mutate: "roleUpdate",
    query: "guild.settings.settings.serverLogs.roleUpdate.channel",
    help: RoleUpdateLogHelp,
  },
  {
    name: "Member Add",
    mutate: "memberAdd",
    query: "guild.settings.settings.serverLogs.memberAdd.channel",
    help: MemberAddLogHelp,
  },
  {
    name: "Member Remove",
    mutate: "memberRemove",
    query: "guild.settings.settings.serverLogs.memberRemove.channel",
    help: MemberRemoveLogHelp,
  },
  {
    name: "Command Ran",
    mutate: "cmdRan",
    query: "guild.settings.settings.serverLogs.cmdRan.channel",
    help: CommandRanLogHelp,
  },
  {
    name: "Tag Ran",
    mutate: "tagRan",
    query: "guild.settings.settings.serverLogs.tagRan.channel",
    help: TagRanLogHelp,
  },
  {
    name: "Story Ran",
    mutate: "storyRan",
    query: "guild.settings.settings.serverLogs.storyRan.channel",
    help: StoryRanLogHelp,
  },
  {
    name: "Message Delete",
    mutate: "msgDeleted",
    query: "guild.settings.settings.serverLogs.msgDeleted.channel",
    help: MessageDeleteLogHelp,
  },
  {
    name: "Message Edit",
    mutate: "msgUpdate",
    query: "guild.settings.settings.serverLogs.msgUpdate.channel",
    help: MessageEditLogHelp,
  },
  {
    name: "Emoji Create",
    mutate: "emojiCreate",
    query: "guild.settings.settings.serverLogs.emojiCreate.channel",
    help: EmojiCreateLogHelp,
  },
  {
    name: "Emoji Delete",
    mutate: "emojiDelete",
    query: "guild.settings.settings.serverLogs.emojiDelete.channel",
    help: EmojiDeleteLogHelp,
  },
  {
    name: "Emoji Update",
    mutate: "emojiUpdate",
    query: "guild.settings.settings.serverLogs.emojiUpdate.channel",
    help: EmojiUpdateLogHelp,
  },
  {
    name: "Channel Create",
    mutate: "channelCreate",
    query: "guild.settings.settings.serverLogs.channelCreate.channel",
    help: ChannelCreateLogHelp,
  },
  {
    name: "Channel Delete",
    mutate: "channelDelete",
    query: "guild.settings.settings.serverLogs.channelDelete.channel",
    help: ChannelDeleteLogHelp,
  },
  {
    name: "Channel Update",
    mutate: "channelUpdate",
    query: "guild.settings.settings.serverLogs.channelUpdate.channel",
    help: ChannelUpdateLogHelp,
  },
  {
    name: "Server Deaf",
    mutate: "serverDeaf",
    query: "guild.settings.settings.serverLogs.serverDeaf.channel",
    help: ServerDeafLogHelp,
  },
  {
    name: "Server Mute",
    mutate: "serverMute",
    query: "guild.settings.settings.serverLogs.serverMute.channel",
    help: ServerMuteLogHelp,
  },
  {
    name: "Nickname Change",
    mutate: "nicknameChanged",
    query: "guild.settings.settings.serverLogs.nicknameChanged.channel",
    help: NicknameChangeLogHelp,
  },
  {
    name: "Member Perms",
    mutate: "memberRolePermissionsChanged",
    query: "guild.settings.settings.serverLogs.memberRolePermissionsChanged.channel",
    help: MemberPermsLogHelp,
  },
  {
    name: "Member Roles",
    mutate: "memberRoleUpdated",
    query: "guild.settings.settings.serverLogs.memberRoleUpdated.channel",
    help: MemberRolesLogHelp,
  },
  {
    name: "Member Ban",
    mutate: "guildBanAdd",
    query: "guild.settings.settings.serverLogs.guildBanAdd.channel",
    help: MemberBanLogHelp,
  },
  {
    name: "Member Unban",
    mutate: "guildBanRemove",
    query: "guild.settings.settings.serverLogs.guildBanRemove.channel",
    help: MemberUnbanLogHelp,
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
