import {FollowEvent, MessageEvent, ReplyableEvent, TextEventMessage} from "@line/bot-sdk";

export const isReplyableEvent = (arg: unknown): arg is ReplyableEvent =>
  typeof arg === "object" &&
  arg !== null &&
  typeof (arg as ReplyableEvent).replyToken === "string";

export const isFollowEvent = (arg: unknown): arg is FollowEvent =>
  typeof arg === "object" &&
  arg !== null &&
  typeof (arg as FollowEvent).type === "string" &&
  (arg as FollowEvent).type === "follow";

export const isMessageEvent = (arg: unknown): arg is MessageEvent =>
  typeof arg === "object" &&
  arg !== null &&
  typeof (arg as MessageEvent).type === "string" &&
  (arg as MessageEvent).type === "message" &&
  typeof (arg as MessageEvent).message === "object";

export const isTextMessage = (arg: unknown): arg is TextEventMessage =>
  typeof arg === "object" &&
  arg !== null &&
  typeof (arg as TextEventMessage).type === "string" &&
  (arg as TextEventMessage).type === "text" &&
  typeof (arg as TextEventMessage).text === "string";
