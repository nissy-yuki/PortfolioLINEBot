import {MyProfileRepository} from "../domain/MyProfileRepository";
import {MyProfile} from "../domain/Profile";
import {MyProfileService} from "./profile/ProfileService";

/**
 * プロフィールリポジトリの実装
 */
export class MyProfileRepositoryImpl implements MyProfileRepository {
  service: MyProfileService;
  /**
   * @constructor
   * @param {MyProfileService} service - プロフィールサービス
   */
  constructor(service: MyProfileService) {
    this.service = service;
  }
  /**
   * プロフィールを取得する
   * @return {Promise<MyProfile>}
   */
  async get(): Promise<MyProfile> {
    return this.service.getProfile();
  }
}
