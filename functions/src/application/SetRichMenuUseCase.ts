import {inject, injectable} from "tsyringe";
import {RichMenuRepository} from "../domain/repository/RichMenuRepository";

@injectable()
/**
 * リッチメニューを設定するユースケース
 */
export default class SetRichMenuUseCase {
  /**
   * @constructor
   */
  constructor(
    @inject("RichMenuRepository")
    private readonly richMenuRepository: RichMenuRepository
  ) {}
  /**
   * リッチメニューを設定する
   */
  async execute() {
    await this.richMenuRepository.setDefaultRichMenu();
  }
}
