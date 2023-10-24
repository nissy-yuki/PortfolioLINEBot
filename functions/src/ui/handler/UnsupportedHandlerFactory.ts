import UnsupportedHandler from "./UnsupportedHandler";
import {ReplyHandler} from "./ReplyHandler";
import {ReplyHandlerFactory} from "./ReplyHandlerFactory";

/**
 * 何もしないHandlerの生成を行う
 * @implements {ReplyHandlerFactory}
 * @class
 */
export default class UnsupportedHandlerFactory implements ReplyHandlerFactory {
  /**
   * Handlerの生成
   * @return {ReplyHandler}
   */
  create(): ReplyHandler {
    return new UnsupportedHandler();
  }
}
