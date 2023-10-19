import {MyProfile} from "../../domain/Profile";

export interface MyProfileService {
  getProfile(): Promise<MyProfile>;
}
