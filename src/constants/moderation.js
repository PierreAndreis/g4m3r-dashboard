export const mainLogs = [
  {
    name: "Mod Logs",
    query: "guild.settings.settings.moderation.channel",
    mutate: "modlogChannel",
    checkboxMutate: "modlogStatus",
    checkboxQuery: "guild.settings.settings.moderation.status",
  },
  {
    name: "Public Logs",
    query: "guild.settings.settings.moderation.publicModlogChannel",
    mutate: "publiclogChannel",
    checkboxMutate: "publiclogStatus",
    checkboxQuery: "guild.settings.settings.moderation.publicModlogStatus",
  },
  {
    name: "Server Logs",
    query: "guild.settings.settings.serverLogs.mainChannel",
    mutate: "serverlogChannel",
    checkboxMutate: "serverlogStatus",
    checkboxQuery: "guild.settings.settings.serverLogs.status",
  },
];

export const serverLogs = [
  { name: "Role Create", mutate: "roleCreate", query: "guild.settings.settings.serverLogs.roleCreate.channel" },
  { name: "Role Delete", mutate: "roleDelete", query: "guild.settings.settings.serverLogs.roleDelete.channel" },
  { name: "Role Update", mutate: "roleUpdate", query: "guild.settings.settings.serverLogs.roleUpdate.channel" },
  { name: "Member Add", mutate: "memberAdd", query: "guild.settings.settings.serverLogs.memberAdd.channel" },
  { name: "Member Remove", mutate: "memberRemove", query: "guild.settings.settings.serverLogs.memberRemove.channel" },
  { name: "Command Ran", mutate: "cmdRan", query: "guild.settings.settings.serverLogs.cmdRan.channel" },
  { name: "Tag Ran", mutate: "tagRan", query: "guild.settings.settings.serverLogs.tagRan.channel" },
  { name: "Story Ran", mutate: "storyRan", query: "guild.settings.settings.serverLogs.storyRan.channel" },
  { name: "Message Delete", mutate: "msgDeleted", query: "guild.settings.settings.serverLogs.msgDeleted.channel" },
  { name: "Message Edit", mutate: "msgUpdate", query: "guild.settings.settings.serverLogs.msgUpdate.channel" },
  { name: "Emoji Create", mutate: "emojiCreate", query: "guild.settings.settings.serverLogs.emojiCreate.channel" },
  { name: "Emoji Delete", mutate: "emojiDelete", query: "guild.settings.settings.serverLogs.emojiDelete.channel" },
  { name: "Emoji Update", mutate: "emojiUpdate", query: "guild.settings.settings.serverLogs.emojiUpdate.channel" },
  { name: "Channel Create", mutate: "channelCreate", query: "guild.settings.settings.serverLogs.channelCreate.channel" },
  { name: "Channel Delete", mutate: "channelDelete", query: "guild.settings.settings.serverLogs.channelDelete.channel" },
  { name: "Channel Update", mutate: "channelUpdate", query: "guild.settings.settings.serverLogs.channelUpdate.channel" },
  { name: "Server Deaf", mutate: "serverDeaf", query: "guild.settings.settings.serverLogs.serverDeaf.channel" },
  { name: "Server Mute", mutate: "serverMute", query: "guild.settings.settings.serverLogs.serverMute.channel" },
  { name: "Nickname Change", mutate: "nicknameChanged", query: "guild.settings.settings.serverLogs.nicknameChanged.channel" },
  { name: "Member Perms", mutate: "memberRolePermissionsChanged", query: "guild.settings.settings.serverLogs.memberRolePermissionsChanged.channel" },
  { name: "Member Roles", mutate: "memberRoleUpdated", query: "guild.settings.settings.serverLogs.memberRoleUpdated.channel" },
  { name: "Member Ban", mutate: "guildBanAdd", query: "guild.settings.settings.serverLogs.guildBanAdd.channel" },
  { name: "Member Unban", mutate: "guildBanRemove", query: "guild.settings.settings.serverLogs.guildBanRemove.channel" },
];

export const modFeatureToggles = [
  {
    query: "guild.settings.settings.mail.activated",
    mutate: "modMailStatus",
    children: "Mod Mail Status",
  },
  {
    query: "guild.settings.settings.moderation.capitalPercentage.status",
    mutate: "capitalPercentageStatus",
    children: "Capital Spam Filter Status",
  },
  {
    query: "guild.settings.settings.moderation.naughtyWords.status",
    mutate: "naughtyWordStatus",
    children: "Naughty Word Filter Status",
  },
  {
    query: "guild.settings.settings.hibye.welcome.channel",
    mutate: "welcomeChannelStatus",
    children: "Welcome Channel Status",
  },
  {
    query: "guild.settings.settings.hibye.welcome.dm",
    mutate: "welcomeDmStatus",
    children: "Welcome DM Status",
  },
  {
    query: "guild.settings.settings.hibye.goodbye.channel",
    mutate: "goodbyeChannelStatus",
    children: "Goodbye Channel Status",
  },
  {
    query: "guild.settings.settings.hibye.goodbye.dm",
    mutate: "goodbyeDmStatus",
    children: "Goodbye DM Status",
  },
  {
    query: "guild.settings.settings.verify.status",
    mutate: "verifyStatus",
    children: "Verification System Status",
  },
]