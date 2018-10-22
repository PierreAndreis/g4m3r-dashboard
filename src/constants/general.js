export const generalPageToggles = [
  {
    query: "guild.settings.settings.general.militaryTimeFormat",
    mutate: "militaryTimeFormat",
    title: "24 Hour Time Format",
  },
  {
    query: "guild.settings.settings.general.trackAnalytics",
    mutate: "trackAnalytics",
    title: "Enable Server Analytics",
  },
  {
    query: "guild.settings.settings.general.deleteNotification",
    mutate: "deleteNotification",
    title: "Delete All Notifications",
  },
  {
    query: "guild.settings.settings.feedback.idea.status",
    mutate: "ideaStatus",
    title: "Feedback Idea",
  },
  {
    query: "guild.settings.settings.feedback.bug.status",
    mutate: "bugStatus",
    title: "Feedback Bug",
  },
  {
    query: "guild.settings.settings.xp.notification.server.channel",
    mutate: "xpNotificationServerChannel",
    title: "In Channel Server Level Up Notifications",
  },
  {
    query: "guild.settings.settings.xp.notification.server.dm",
    mutate: "xpNotificationServerDM",
    title: "In DM Server Level Up Notifications",
  },
  {
    query: "guild.settings.settings.xp.notification.global.channel",
    mutate: "xpNotificationGlobalChannel",
    title: "In Channel Global Level Up Notifications",
  },
  {
    query: "guild.settings.settings.events.useDefault",
    mutate: "useDefault",
    title: "Use Default Event Settings",
  },
  {
    query: "guild.settings.settings.tags.tagDeletion",
    mutate: "tagDeletion",
    title: "Tag Trigger Deletion",
  },
  {
    query: "guild.settings.settings.stories.storyDeletion",
    mutate: "storyDeletion",
    title: "Story Trigger Deletion",
  },
  {
    query: "guild.settings.settings.events.advertiseAllEvents",
    mutate: "advertiseAllEvents",
    title: "Auto Advertise Events",
  },
];
