import {Message} from "@line/bot-sdk";
import {ReplyHandler} from "./ReplyHandler";
import {container} from "tsyringe";
import {GetProfileCarouselUseCase} from "../../application/GetProfileCarouselUseCase";
import {profileModule} from "../../di/ProfileModule";

/**
 * プロフィールを表示する
 * @implements {LineBotHandler}
 * @class
 * @property {string} data - ユーザーから送られてきたデータ
 * @property {string} userId - ユーザーID
 */
export class ProfileHandler implements ReplyHandler {
  /**
   * プロフィールを表示する
   * @return {Promise<Message | Message[]>}
   */
  async getMessage(): Promise<Message | Message[]> {
    profileModule();
    const usecase = container.resolve(GetProfileCarouselUseCase);
    return await usecase.getProfileCarousel();
  }
}
