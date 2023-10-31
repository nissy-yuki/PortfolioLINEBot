import UnsupportedHandler from "./UnsupportedHandler";
import {ReplyHandlerFactory} from "./ReplyHandlerFactory";
import {ReplyHandler} from "./ReplyHandler";
import ArticleHandler from "./ArticleHandler";
import MyProfileHandler from "./MyProfileHandler";
import TriviaHandler from "./TriviaHandler";
import {richmenuMessage} from "../../resource/message";
import RepositoryHandler from "./RepositoryHandler";

/**
 * Handlerの生成を行う
 * @implements {Factory}
 * @class
 * @property {string} data - ユーザーから送られてきたデータ
 * @property {string} userId - ユーザーID
 */
export default class MessageHandlerFactory implements ReplyHandlerFactory {
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
    if (this.data === richmenuMessage.profile) return new MyProfileHandler();
    if (this.data === richmenuMessage.repository) return new RepositoryHandler();
    if (this.data === richmenuMessage.article) return new ArticleHandler();
    if (this.data === richmenuMessage.contact) return new UnsupportedHandler(this.data);
    if (this.data === richmenuMessage.trivia) return new TriviaHandler();
    return new UnsupportedHandler(this.data);
  }
}
