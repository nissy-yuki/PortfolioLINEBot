import {UnsupportedHandler} from "./UnsupportedHandler";
import {ReplyHandlerFactory} from "./ReplyHandlerFactory";
import {ReplyHandler} from "./ReplyHandler";
import {ProfileHandler} from "./ProfileHandler";

/**
 * Handlerの生成を行う
 * @implements {Factory}
 * @class
 * @property {string} data - ユーザーから送られてきたデータ
 * @property {string} userId - ユーザーID
 */
export class MessageHandlerFactory implements ReplyHandlerFactory {
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
   * Handlerの生成
   * @return {ReplyHandler}
   */
  create(): ReplyHandler {
    if (this.data === "profile") return new ProfileHandler(this.data, this.userId);
    return new UnsupportedHandler(this.data);
  }
}
