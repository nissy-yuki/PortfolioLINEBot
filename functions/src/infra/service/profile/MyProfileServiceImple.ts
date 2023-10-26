import {injectable} from "tsyringe";
import {MyProfile} from "../../../domain/dataModel/MyProfile";
import {MyProfileService} from "./MyProfileService";
import {githubUrl, qiitaUrl, twitterUrl, zennUrl} from "../../../resource/social";

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
          url: twitterUrl,
          serviceName: "X",
          iconUrl: "https://gyazo.com/26446d078a0546e3b967fddf5a630624.png",
        },
        {
          name: "nisi-yuki",
          url: githubUrl,
          serviceName: "GitHub",
          iconUrl: "https://gyazo.com/8a48cc20c8e120c91d1e3bbcc6100dcf",
        },
        {
          name: "nissy243",
          url: qiitaUrl,
          serviceName: "Qiita",
          iconUrl: "https://gyazo.com/7240b2067f55076ac8a8207f5d6f04d3",
        },
        {
          name: "nisisippi",
          url: zennUrl,
          serviceName: "Zenn",
          iconUrl: "https://gyazo.com/e27a8e4a5e7023d9bee103d4298f8984",
        },
      ],
      skills: [
      ],
      careers: [
      ],
    };
  }
}
