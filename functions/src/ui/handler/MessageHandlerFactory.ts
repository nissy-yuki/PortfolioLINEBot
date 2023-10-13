import {UnsupportedHandler} from "./UnsupportedHandler";
import {ReplyHandlerFactory} from "./ReplyHandlerFactory";
import {ReplyHandler} from "./ReplyHandler";
import {ProfileHandler} from "./ProfileHandler";
import {ArticleHandler} from "./ArticleHandler";

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
    if (this.data === "プロフィール") return new ProfileHandler();
    if (this.data === "記事") return new ArticleHandler();
    return new UnsupportedHandler(this.data);
  }
}
