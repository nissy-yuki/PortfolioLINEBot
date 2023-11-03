import {container} from "tsyringe";
import repositoryModule from "../../../di/RepositoryModule";
import {ReplyHandler} from "./ReplyHandler";
import FetchRepositoriesMessageUseCase from "../../../application/FetchRepositoriesMessageUseCase";
import {Message} from "@line/bot-sdk";

/**
 * リポジトリーのハンドラー
 */
export default class RepositoryHandler implements ReplyHandler {
  /**
   * @constructor
   */
  constructor() {
    repositoryModule(container);
  }
  /**
   * リポジトリを表示する
   * @return {Promise<Message>}
   */
  async getMessage(): Promise<Message> {
    const usecase = container.resolve(FetchRepositoriesMessageUseCase);
    return await usecase.execute();
  }
}
