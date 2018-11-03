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
import MemberPermsLogHelp from "./help/moderation/serverlogs/MemberPermsLogHelp";
import MemberRolesLogHelp from "./help/moderation/serverlogs/MemberRolesLogHelp";
import MemberBanLogHelp from "./help/moderation/serverlogs/MemberBanLogHelp";
import MemberUnbanLogHelp from "./help/moderation/serverlogs/MemberUnbanLogHelp";
import MilitaryTimeFormatHelp from "./help/general/basic/24HourTimeFormatHelp";
import DeleteAllNotificationsHelp from "./help/general/basic/DeleteAllNotificationsHelp";
import EnableServerAnalyticsHelp from "./help/general/basic/EnableServerAnalyticsHelp";
import InChannelGlobalLevelUpNotifications from "./help/general/basic/InChannelGlobalLevelUpNotifications";
import InChannelServerLevelUpNotificationsHelp from "./help/general/basic/InChannelServerLevelUpNotificationsHelp";
import InDMServerLevelUpNotificationsHelp from "./help/general/basic/InDMServerLevelUpNotificationsHelp";
import PrefixHelp from "../../../../constants/help/general/basic/PrefixHelp";
import TimezoneHelp from "../../../../constants/help/general/basic/TimezoneHelp";
import MenuClosingTimeHelp from "../../../../constants/help/general/basic/MenuClosingTimeHelp";
import DeleteNotificationsDelayHelp from "../../../../constants/help/general/basic/DeleteNotificationsDelayHelp";
import BugChannelHelp from "../../../../constants/help/general/feedback/BugChannelHelp";
import BugColorHelp from "../../../../constants/help/general/feedback/BugColorHelp";
import BugStatusHelp from "../../../../constants/help/general/feedback/BugStatusHelp";
import BugThumbsDownHelp from "../../../../constants/help/general/feedback/BugThumbsDownHelp";
import BugThumbsUpHelp from "../../../../constants/help/general/feedback/BugThumbsUpHelp";
import IdeasChannelHelp from "../../../../constants/help/general/feedback/IdeasChannelHelp";
import IdeasColorHelp from "../../../../constants/help/general/feedback/IdeasColorHelp";
import IdeasStatusHelp from "../../../../constants/help/general/feedback/IdeasStatusHelp";
import IdeasThumbsDownHelp from "../../../../constants/help/general/feedback/IdeasThumbsDownHelp";
import IdeasThumbsUpHelp from "../../../../constants/help/general/feedback/IdeasThumbsUpHelp";
import UseEventDefaultsHelp from "../../../../constants/help/general/events/UseEventDefaultsHelp";
import EventDurationHelp from "../../../../constants/help/general/events/EventDurationHelp";
import MaxAttendeesAllowedHelp from "../../../../constants/help/general/events/MaxAttendeesAllowedHelp";
import EventGameHelp from "../../../../constants/help/general/events/EventGameHelp";
import EventReminderTimeHelp from "../../../../constants/help/general/events/EventReminderTimeHelp";
import EventAutoAdvertiseHelp from "../../../../constants/help/general/events/EventAutoAdvertiseHelp";
import EventAdvertiseChannelHelp from "../../../../constants/help/general/events/EventAdvertiseChannelHelp";
import EventCreatePermissionHelp from "../../../../constants/help/general/events/EventCreatePermissionHelp";
import EventAddMemberPermissionHelp from "../../../../constants/help/general/events/EventAddMemberPermissionHelp";
import TagCreatePermissionHelp from "../../../../constants/help/general/tags-stories/TagCreatePermissionHelp";
import TagUsePermissionHelp from "../../../../constants/help/general/tags-stories/TagUsePermissionHelp";
import TagTriggerDeletionHelp from "../../../../constants/help/general/tags-stories/TagTriggerDeletionHelp";
import StoriesCreatePermissionHelp from "../../../../constants/help/general/tags-stories/StoriesCreatePermissionHelp";
import StoriesUsePermissionHelp from "../../../../constants/help/general/tags-stories/StoriesUsePermissionHelp";
import StoriesTriggerDeletionHelp from "../../../../constants/help/general/tags-stories/StoriesTriggerDeletionHelp";
import TextMutedRoleHelp from "../../../../constants/help/moderation/muted/TextMutedRoleHelp";
import VoiceMutedRoleHelp from "../../../../constants/help/moderation/muted/VoiceMutedRoleHelp";
import ModMailStatusHelp from "../../../../constants/help/moderation/modmail/ModMailStatusHelp";
import ModMailPermissionToReplyHelp from "../../../../constants/help/moderation/modmail/ModMailPermissionToReplyHelp";
import ModMailPerGuildHelp from "../../../../constants/help/moderation/modmail/ModMailPerGuildHelp";
import ModMailPerUserHelp from "../../../../constants/help/moderation/modmail/ModMailPerUserHelp";
import AutoAssignRoleHelp from "../../../../constants/help/moderation/automod/AutoAssignRoleHelp";
import AFKResponsePermissionHelp from "../../../../constants/help/moderation/automod/AFKResponsePermissionHelp";
import CapitalSpamFilterStatusHelp from "../../../../constants/help/moderation/automod/CapitalSpamFilterStatusHelp";
import CapitalSpamFilterMaxAllowedPercentage from "../../../../constants/help/moderation/automod/CapitalSpamFilterMaxAllowedPercentage";
import BannedWordFilterStatusHelp from "../../../../constants/help/moderation/automod/BannedWordFilterStatusHelp";
import VerificationSystemStatusHelp from "../../../../constants/help/moderation/verification/VerificationSystemStatusHelp";
import VerificationCategoryHelp from "../../../../constants/help/moderation/verification/VerificationCategoryHelp";
import VerificationRoleHelp from "../../../../constants/help/moderation/verification/VerificationRoleHelp";
import MaxInactiveDaysAllowedHelp from "../../../../constants/help/features/vainglory/MaxInactiveDaysAllowedHelp";
import ActivityReportsChannelHelp from "../../../../constants/help/features/vainglory/ActivityReportsChannelHelp";

export default {
  ModLogsHelp,
  ServerLogsHelp,
  PublicLogsHelp,
  WelcomeChannelStatusHelp,
  WelcomeDMStatusHelp,
  GoodbyeChannelStatusHelp,
  GoodbyeDMStatusHelp,
  RoleCreateLogHelp,
  RoleDeleteLogHelp,
  RoleUpdateLogHelp,
  MemberAddLogHelp,
  MemberRemoveLogHelp,
  CommandRanLogHelp,
  StoryRanLogHelp,
  TagRanLogHelp,
  MessageDeleteLogHelp,
  MessageEditLogHelp,
  EmojiCreateLogHelp,
  EmojiDeleteLogHelp,
  EmojiUpdateLogHelp,
  ChannelCreateLogHelp,
  ChannelDeleteLogHelp,
  ChannelUpdateLogHelp,
  ServerDeafLogHelp,
  ServerMuteLogHelp,
  NicknameChangeLogHelp,
  MemberPermsLogHelp,
  MemberRolesLogHelp,
  MemberBanLogHelp,
  MemberUnbanLogHelp,
  MilitaryTimeFormatHelp,
  DeleteAllNotificationsHelp,
  EnableServerAnalyticsHelp,
  InChannelGlobalLevelUpNotifications,
  InChannelServerLevelUpNotificationsHelp,
  InDMServerLevelUpNotificationsHelp,
  PrefixHelp,
  TimezoneHelp,
  MenuClosingTimeHelp,
  DeleteNotificationsDelayHelp,
  BugChannelHelp,
  BugColorHelp,
  BugStatusHelp,
  BugThumbsDownHelp,
  BugThumbsUpHelp,
  IdeasChannelHelp,
  IdeasColorHelp,
  IdeasStatusHelp,
  IdeasThumbsDownHelp,
  IdeasThumbsUpHelp,
  UseEventDefaultsHelp,
  EventDurationHelp,
  MaxAttendeesAllowedHelp,
  EventGameHelp,
  EventReminderTimeHelp,
  EventAutoAdvertiseHelp,
  EventAdvertiseChannelHelp,
  EventCreatePermissionHelp,
  EventAddMemberPermissionHelp,
  TagCreatePermissionHelp,
  TagUsePermissionHelp,
  TagTriggerDeletionHelp,
  StoriesCreatePermissionHelp,
  StoriesUsePermissionHelp,
  StoriesTriggerDeletionHelp,
  TextMutedRoleHelp,
  VoiceMutedRoleHelp,
  ModMailStatusHelp,
  ModMailPermissionToReplyHelp,
  ModMailPerGuildHelp,
  ModMailPerUserHelp,
  AutoAssignRoleHelp,
  AFKResponsePermissionHelp,
  CapitalSpamFilterStatusHelp,
  CapitalSpamFilterMaxAllowedPercentage,
  BannedWordFilterStatusHelp,
  VerificationSystemStatusHelp,
  VerificationCategoryHelp,
  VerificationRoleHelp,
  MaxInactiveDaysAllowedHelp,
  ActivityReportsChannelHelp,
};
