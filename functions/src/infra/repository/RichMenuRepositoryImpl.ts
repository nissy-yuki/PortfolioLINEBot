import {inject, injectable} from "tsyringe";
import {RichMenuRepository} from "../../domain/repository/RichMenuRepository";
import {LineClientService} from "../service/line/LineClientService";

@injectable()
/**
 * リッチメニューリポジトリの実装
 */
export default class RichMenuRepositoryImpl implements RichMenuRepository {
  /**
   * @constructor
   */
  constructor(
    @inject("LineClientService")
    private readonly lineClientService: LineClientService
  ) {}
  /**
   * リッチメニューを設定する
   */
  async setDefaultRichMenu(): Promise<void> {
    await this.lineClientService.setDefaultRichMenu();
  }
}
