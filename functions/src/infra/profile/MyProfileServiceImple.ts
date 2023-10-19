import {MyProfile} from "../../domain/Profile";
import {MyProfileService} from "./MyProfileService";

/**
 * プロフィールサービスの実装
 * @implements {MyProfileService}
 */
export class MyProfileServiceImpl implements MyProfileService {
  /**
   * プロフィールを取得する
   * @return {Promise<MyProfile>}
   */
  async getProfile(): Promise<MyProfile> {
    return {
      name: "hoge",
      imageUrl: "hoge",
      occupation: "Androidエンジニア",
      description: "ほげふが",
      accounts: [
      ],
      skills: [
      ],
      careers: [
      ],
    };
  }
}
