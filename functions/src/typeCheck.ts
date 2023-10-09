import {ReplyableEvent} from "@line/bot-sdk";

export const isReplyableEvent = (arg: unknown): arg is ReplyableEvent =>
  typeof arg === "object" &&
  arg !== null &&
  typeof (arg as ReplyableEvent).replyToken === "string";
