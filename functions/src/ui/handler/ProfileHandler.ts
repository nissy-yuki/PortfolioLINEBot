import {Message} from "@line/bot-sdk";
import {ReplyHandler} from "./ReplyHandler";

/**
 * プロフィールを表示する
 * @implements {LineBotHandler}
 * @class
 * @property {string} data - ユーザーから送られてきたデータ
 * @property {string} userId - ユーザーID
 */
export class ProfileHandler implements ReplyHandler {
  data: string;
  userId: string;
  /**
   * @constructor
   * @param {string} data - ユーザーから送られてきたデータ
   * @param {string} userId - ユーザーID
   */
  constructor(data: string, userId: string) {
    this.data = data;
    this.userId = userId;
  }
  /**
   * プロフィールを表示する
   * @return {Promise<Message | Message[]>}
   */
  async getMessage(): Promise<Message | Message[]> {
    return {
      type: "text",
      text: "profile",
    };
  }
}
