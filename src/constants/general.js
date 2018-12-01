import HelpText from "./help/general";

export const generalPageToggles = [
  {
    query: "guild.settings.settings.general.militaryTimeFormat",
    mutate: "militaryTimeFormat",
    title: "24 Hour Time Format",
    help: HelpText.basic.militaryTimeFormat,
  },
  {
    query: "guild.settings.settings.general.trackAnalytics",
    mutate: "trackAnalytics",
    title: "Enable Server Analytics",
    help: HelpText.basic.enableServerAnalytics,
  },
  {
    query: "guild.settings.settings.general.deleteNotification",
    mutate: "deleteNotification",
    title: "Delete All Notifications",
    help: HelpText.basic.deleteAllNotifications,
  },
];

export const levelingToggles = [
  {
    query: "guild.settings.settings.xp.notification.server.channel",
    mutate: "xpNotificationServerChannel",
    title: "In Channel Server Level Up",
    help: HelpText.basic.inChannelServerLevelUpNotifications,
  },
  {
    query: "guild.settings.settings.xp.notification.server.dm",
    mutate: "xpNotificationServerDM",
    title: "In DM Server Level Up",
    help: HelpText.basic.inDMServerLevelUpNotifications,
  },
  {
    query: "guild.settings.settings.xp.notification.global.channel",
    mutate: "xpNotificationGlobalChannel",
    title: "In Channel Global Level Up",
    help: HelpText.basic.inChannelGlobalLevelUpNotifications,
  }
];
