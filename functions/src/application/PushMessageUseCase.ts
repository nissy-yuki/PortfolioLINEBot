import {inject, injectable} from "tsyringe";
import {LineClientRepository} from "../domain/repository/LineClientRepository";

@injectable()
/**
 * メッセージ送信ユースケース
 */
export default class SendMessageUseCase {
  /**
   * @constructor
   */
  constructor(
    @inject("LineClientRepository")
    private readonly sendMessageRepository: LineClientRepository
  ) {}
  /**
   * メッセージ送信
   * @param {string} userId - ユーザーID
   * @param {string} message - メッセージ
   */
  async execute(userId: string, message: string): Promise<void> {
    await this.sendMessageRepository.pushMessage(userId, message);
  }
}
