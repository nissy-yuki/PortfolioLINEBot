import {MyProfile} from "../dataModel/MyProfile";

export interface MyProfileRepository {
  fetchMyProfile(): Promise<MyProfile>;
}
