import {Message} from "@line/bot-sdk";
import {ReplyHandler} from "./ReplyHandler";
import triviaModule from "../../di/TriviaModule";
import {container} from "tsyringe";
import FetchTriviaMessageUseCase from "../../application/FetchTriviaMessageUseCase";

/**
 * トリビアを表示する
 */
export default class TriviaHandler implements ReplyHandler {
  /**
   * @constructor
   */
  constructor() {
    triviaModule(container);
  }
  /**
   * トリビアを表示する
   * @return {Promise<Message>}
   */
  async getMessage(): Promise<Message> {
    const usecase = container.resolve(FetchTriviaMessageUseCase);
    return await usecase.excute();
  }
}
