import {MyProfile} from "./MyProfile";

export interface MyProfileRepository {
  get(): Promise<MyProfile>;
}
