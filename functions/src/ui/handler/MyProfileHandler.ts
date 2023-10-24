import {container} from "tsyringe";
import myProfileModule from "../../di/MyProfileModule";
import {ReplyHandler} from "./ReplyHandler";
import {Message} from "@line/bot-sdk";
import GetMyProfileMessageUseCase from "../../application/GetMyProfileMessageUseCase";

/**
 * プロフィールを表示する
 * @implements {ReplyHandler}
 * @class
 */
export default class MyProfileHandler implements ReplyHandler {
  /**
   * @constructor
   */
  constructor() {
    myProfileModule(container);
  }
  /**
   * メッセージを取得する
   * @return {Promise<Message>}
   */
  async getMessage(): Promise<Message> {
    const usecase = container.resolve(GetMyProfileMessageUseCase);
    return await usecase.getMyProfileMessage();
  }
}
