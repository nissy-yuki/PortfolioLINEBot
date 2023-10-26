import {MyProfile} from "../../../domain/MyProfile";

export interface MyProfileService {
  getProfile(): Promise<MyProfile>;
}
