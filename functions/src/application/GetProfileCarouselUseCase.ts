import {FlexMessage} from "@line/bot-sdk";
import {MyProfileRepository} from "../domain/MyProfileRepository";
import {createProfileMessage} from "./message/createProfileMessage";
import {inject, injectable} from "tsyringe";

@injectable()
/**
 * 自己紹介のカルーセルを取得するユースケース
 */
export class GetProfileCarouselUseCase {
  /**
   * @constructor
   */
  constructor(
    @inject("MyProfileRepository")
    private readonly repository: MyProfileRepository
  ) {}
  /**
   * 自己紹介のカルーセルを取得する
   * @return {Promise<FlexMessage>}
   */
  async getProfileCarousel(): Promise<FlexMessage> {
    const profile = await this.repository.get();
    return createProfileMessage(profile);
  }
}
