import {inject, injectable} from "tsyringe";
import {MyProfileRepository} from "../domain/repository/MyProfileRepository";
import {Message} from "@line/bot-sdk";
import createProfileMessage from "./message/createProfileMessage";

@injectable()
/**
 * プロフィールメッセージ取得ユースケース
 */
export default class FetchMyProfileMessageUseCase {
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
  async excute(): Promise<Message> {
    const profile = await this.repository.fetchMyProfile().then((profile) => {
      return profile;
    }).catch((error) => {
      console.error(error);
      throw new Error("プロフィールの取得に失敗しました");
    });
    return createProfileMessage(profile);
  }
}
