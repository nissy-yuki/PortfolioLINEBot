import {inject, injectable} from "tsyringe";
import {TriviaRepository} from "../domain/repository/TriviaRepository";
import {Message} from "@line/bot-sdk";
import {createTriviaMessage} from "./message/createTriviaMessage";

@injectable()
/**
 * 雑学メッセージ取得ユースケース
 */
export default class FetchTriviaMessageUseCase {
  /**
   * @constructor
   */
  constructor(
    @inject("TriviaRepository")
    private readonly repository: TriviaRepository
  ) {}
  /**
   * 雑学メッセージを取得する
   * @return {Promise<Message>} - 雑学メッセージ
   */
  async excute(): Promise<Message> {
    const trivia = await this.repository.fetchTrivia();
    return createTriviaMessage(trivia);
  }
}
