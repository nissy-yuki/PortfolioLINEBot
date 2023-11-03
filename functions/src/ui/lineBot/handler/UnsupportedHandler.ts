import {Message} from "@line/bot-sdk";
import {ReplyHandler} from "./ReplyHandler";

/**
 * 何もしない
 * @implements {LineBotHandler}
 * @class
 * @property {string} data - ユーザーから送られてきたデータ
 * @property {string} userId - ユーザーID
 */
export default class UnsupportedHandler implements ReplyHandler {
  data: string;
  /**
   * @constructor
   * @param {string} data - ユーザーから送られてきたデータ
   */
  constructor(data = "そのメッセージ") {
    this.data = data;
  }
  /**
   * 無のメッセージを返す
   */
  async getMessage(): Promise<Message> {
    return {
      type: "text",
      text: this.data+"には対応していません",
    };
  }
}
