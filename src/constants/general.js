import MilitaryTimeFormatHelp from "./help/general/basic/24HourTimeFormatHelp";
import DeleteAllNotificationsHelp from "./help/general/basic/DeleteAllNotificationsHelp";
import EnableServerAnalyticsHelp from "./help/general/basic/EnableServerAnalyticsHelp";
import InChannelGlobalLevelUpNotifications from "./help/general/basic/InChannelGlobalLevelUpNotifications";
import InChannelServerLevelUpNotificationsHelp from "./help/general/basic/InChannelServerLevelUpNotificationsHelp";
import InDMServerLevelUpNotificationsHelp from "./help/general/basic/InDMServerLevelUpNotificationsHelp";

export const generalPageToggles = [
  {
    query: "guild.settings.settings.general.militaryTimeFormat",
    mutate: "militaryTimeFormat",
    title: "24 Hour Time Format",
    help: MilitaryTimeFormatHelp,
  },
  {
    query: "guild.settings.settings.general.trackAnalytics",
    mutate: "trackAnalytics",
    title: "Enable Server Analytics",
    help: EnableServerAnalyticsHelp,
  },
  {
    query: "guild.settings.settings.general.deleteNotification",
    mutate: "deleteNotification",
    title: "Delete All Notifications",
    help: DeleteAllNotificationsHelp,
  },
  {
    query: "guild.settings.settings.xp.notification.server.channel",
    mutate: "xpNotificationServerChannel",
    title: "In Channel Server Level Up Notifications",
    help: InChannelServerLevelUpNotificationsHelp,
  },
  {
    query: "guild.settings.settings.xp.notification.server.dm",
    mutate: "xpNotificationServerDM",
    title: "In DM Server Level Up Notifications",
    help: InDMServerLevelUpNotificationsHelp,
  },
  {
    query: "guild.settings.settings.xp.notification.global.channel",
    mutate: "xpNotificationGlobalChannel",
    title: "In Channel Global Level Up Notifications",
    help: InChannelGlobalLevelUpNotifications,
  },
];
