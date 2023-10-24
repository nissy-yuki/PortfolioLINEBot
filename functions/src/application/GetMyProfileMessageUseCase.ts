import {inject, injectable} from "tsyringe";
import {MyProfileRepository} from "../domain/MyProfileRepository";
import {Message} from "@line/bot-sdk";
import {createProfileMessage} from "./message/createProfileMessage";

@injectable()
/**
 * プロフィールメッセージ取得ユースケース
 */
export default class GetMyProfileMessageUseCase {
  /**
   * @constructor
   */
  constructor(
    @inject("MyProfileRepository")
    private readonly repository: MyProfileRepository
  ) {}
  /**
   * プロフィールメッセージを取得する
   * @return {Promise<Message>} - プロフィールメッセージ
   */
  async getMyProfileMessage(): Promise<Message> {
    const profile = await this.repository.get();
    return createProfileMessage(profile);
  }
}
