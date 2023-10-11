import {Message} from "@line/bot-sdk";

export interface ReplyHandler {
  data: string;
  userId: string;
  getMessage(): Promise<Message | Message[]>;
}
