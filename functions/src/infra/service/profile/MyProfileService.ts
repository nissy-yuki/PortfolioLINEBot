import {MyProfile} from "../../../domain/dataModel/MyProfile";

export interface MyProfileService {
  getProfile(): Promise<MyProfile>;
}
