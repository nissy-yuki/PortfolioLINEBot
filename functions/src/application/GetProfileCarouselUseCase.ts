import {FlexMessage} from "@line/bot-sdk";
import {MyProfileRepository} from "../domain/MyProfileRepository";
import {createProfileMessage} from "./message/createProfileMessage";

/**
 * 自己紹介のカルーセルを取得するユースケース
 */
export class GetProfileCarouselUseCase {
  repository: MyProfileRepository;
  /**
   * @constructor
   * @param {MyProfileRepository} repository - 自己紹介リポジトリ
   */
  constructor(repository: MyProfileRepository) {
    this.repository = repository;
  }
  /**
   * 自己紹介のカルーセルを取得する
   * @return {Promise<FlexMessage>}
   */
  async getProfileCarousel(): Promise<FlexMessage> {
    const profile = await this.repository.get();
    return createProfileMessage(profile);
  }
}
