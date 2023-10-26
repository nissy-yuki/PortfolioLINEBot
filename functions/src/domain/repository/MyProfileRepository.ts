import {MyProfile} from "../dataModel/MyProfile";

export interface MyProfileRepository {
  get(): Promise<MyProfile>;
}
