import {injectable} from "tsyringe";
import {MyProfile} from "../../../domain/dataModel/MyProfile";
import {MyProfileService} from "./MyProfileService";
import {socialAccountUrl, socialIconUrl} from "../../../resource/social";

@injectable()
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
        {
          name: "@nissy2438",
          url: socialAccountUrl.twitter,
          serviceName: "X",
          iconUrl: socialIconUrl.twitter,
        },
        {
          name: "nisi-yuki",
          url: socialAccountUrl.github,
          serviceName: "GitHub",
          iconUrl: socialIconUrl.github,
        },
        {
          name: "nissy243",
          url: socialAccountUrl.qiita,
          serviceName: "Qiita",
          iconUrl: socialIconUrl.qiita,
        },
        {
          name: "nisisippi",
          url: socialAccountUrl.zenn,
          serviceName: "Zenn",
          iconUrl: socialIconUrl.zenn,
        },
      ],
      skills: [
      ],
      careers: [
      ],
    };
  }
}
