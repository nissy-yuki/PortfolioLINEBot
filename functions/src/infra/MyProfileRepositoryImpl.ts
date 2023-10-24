import {inject, injectable} from "tsyringe";
import {MyProfileRepository} from "../domain/MyProfileRepository";
import {MyProfileService} from "./profile/MyProfileService";
import {MyProfile} from "../domain/MyProfile";

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
    @inject("MyProfileService")
    private readonly service : MyProfileService
  ) {}
  /**
   * プロフィールを取得する
   * @return {Promise<MyProfile>}
   */
  async get(): Promise<MyProfile> {
    return this.service.getProfile();
  }
}
