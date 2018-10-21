export const mainLogs = [
  {
    name: "Mod Logs",
    query: "guild.channels",
    mutate: "guild.settings.settings.moderation.channel",
    checkboxMutate: "modlogStatus",
    checkboxQuery: "guild.settings.settings.moderation.status",
  },
  {
    name: "Public Logs",
    query: "guild.channels",
    mutate: "guild.settings.settings.moderation.publicModlogChannel",
    checkboxMutate: "publiclogStatus",
    checkboxQuery: "guild.settings.settings.moderation.publicModlogStatus",
  },
  {
    name: "Server Logs",
    query: "guild.channels",
    mutate: "guild.settings.settings.serverLogs.mainChannel",
    checkboxMutate: "serverlogStatus",
    checkboxQuery: "guild.settings.settings.serverLogs.status",
  },
];

export const serverLogs = [
  { name: "Role Create", mutate: "roleCreate" },
  { name: "Role Delete", mutate: "roleDelete" },
  { name: "Role Update", mutate: "roleUpdate" },
  { name: "Member Add", mutate: "memberAdd" },
  { name: "Member Remove", mutate: "memberRemove" },
  { name: "Command Ran", mutate: "cmdRan" },
  { name: "Tag Ran", mutate: "tagRan" },
  { name: "Story Ran", mutate: "storyRan" },
  { name: "Message Delete", mutate: "msgDeleted" },
  { name: "Message Edit", mutate: "msgUpdate" },
  { name: "Emoji Create", mutate: "emojiCreate" },
  { name: "Emoji Delete", mutate: "emojiDelete" },
  { name: "Emoji Update", mutate: "emojiUpdate" },
  { name: "Channel Create", mutate: "channelCreate" },
  { name: "Channel Delete", mutate: "channelDelete" },
  { name: "Channel Update", mutate: "channelUpdate" },
  { name: "Server Deaf", mutate: "serverDeaf" },
  { name: "Server Mute", mutate: "serverMute" },
  { name: "Nickname Change", mutate: "nicknameChanged" },
  { name: "Member Perms", mutate: "memberRolePermissionsChanged" },
  { name: "Member Roles", mutate: "memberRoleUpdated" },
  { name: "Member Ban", mutate: "guildBanAdd" },
  { name: "Member Unban", mutate: "guildBanRemove" },
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