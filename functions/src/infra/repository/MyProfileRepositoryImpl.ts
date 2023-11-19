import {inject, injectable} from "tsyringe";
import {MyProfileRepository} from "../../domain/repository/MyProfileRepository";
import {MyProfile} from "../../domain/dataModel/MyProfile";
import {NotionService} from "../service/notion/NotionService";

@injectable()
/**
 * プロフィールリポジトリの実装
 * @implements {MyProfileRepository}
 */
export default class MyProfileRepositoryImpl implements MyProfileRepository {
  /**
   * @constructor
   */
  constructor(
    @inject("NotionService")
    private readonly service : NotionService,
  ) {}
  /**
   * プロフィールを取得する
   * @return {Promise<MyProfile>}
   */
  async fetchMyProfile(): Promise<MyProfile> {
    const detail = await this.service.fetchProfile();
    const accounts = await this.service.fetchAccount();
    const careers = await this.service.fetchCareer();
    return {
      detail: detail,
      accounts: accounts,
      careers: careers,
      skills: [],
    };
  }
}
