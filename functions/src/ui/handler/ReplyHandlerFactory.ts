import {ReplyHandler} from "./ReplyHandler";

export interface ReplyHandlerFactory {
  create(): ReplyHandler;
}
