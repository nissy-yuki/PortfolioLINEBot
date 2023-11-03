import {inject, injectable} from "tsyringe";
import {LineClientRepository} from "../../domain/repository/LineClientRepository";
import {LineClientService} from "../service/line/LineClientService";
@injectable()
/**
 * LINEクライアントリポジトリの実装
 */
export default class LineClientRepositoryImpl implements LineClientRepository {
  /**
   * @constructor
   */
  constructor(
    @inject("LineClientService")
    private readonly lineClientService: LineClientService
  ) {}
  /**
   * メッセージを送信する
   * @param {string} userId - ユーザーID
   * @param {string} message - メッセージ
   */
  async pushMessage(userId: string, message: string): Promise<void> {
    await this.lineClientService.pushMessage(userId, message);
  }
  /**
   * リッチメニューを設定する
   */
  async setDefaultRichMenu(): Promise<void> {
    await this.lineClientService.setDefaultRichMenu();
  }
}
