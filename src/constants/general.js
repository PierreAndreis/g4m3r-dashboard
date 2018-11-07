import HelpText from "./help/index";

export const generalPageToggles = [
  {
    query: "guild.settings.settings.general.militaryTimeFormat",
    mutate: "militaryTimeFormat",
    title: "24 Hour Time Format",
    help: HelpText.MilitaryTimeFormatHelp,
  },
  {
    query: "guild.settings.settings.general.trackAnalytics",
    mutate: "trackAnalytics",
    title: "Enable Server Analytics",
    help: HelpText.EnableServerAnalyticsHelp,
  },
  {
    query: "guild.settings.settings.general.deleteNotification",
    mutate: "deleteNotification",
    title: "Delete All Notifications",
    help: HelpText.DeleteAllNotificationsHelp,
  },
  {
    query: "guild.settings.settings.xp.notification.server.channel",
    mutate: "xpNotificationServerChannel",
    title: "In Channel Server Level Up Notifications",
    help: HelpText.InChannelServerLevelUpNotificationsHelp,
  },
  {
    query: "guild.settings.settings.xp.notification.server.dm",
    mutate: "xpNotificationServerDM",
    title: "In DM Server Level Up Notifications",
    help: HelpText.InDMServerLevelUpNotificationsHelp,
  },
  {
    query: "guild.settings.settings.xp.notification.global.channel",
    mutate: "xpNotificationGlobalChannel",
    title: "In Channel Global Level Up Notifications",
    help: HelpText.InChannelGlobalLevelUpNotifications,
  },
];
