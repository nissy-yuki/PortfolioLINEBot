import {inject, injectable} from "tsyringe";
import {LineClientRepository} from "../domain/repository/LineClientRepository";

@injectable()
/**
 * リッチメニューを設定するユースケース
 */
export default class SetRichMenuUseCase {
  /**
   * @constructor
   */
  constructor(
    @inject("LineClientRepository")
    private readonly lineClientRepository: LineClientRepository
  ) {}
  /**
   * リッチメニューを設定する
   */
  async execute() {
    await this.lineClientRepository.setDefaultRichMenu();
  }
}
