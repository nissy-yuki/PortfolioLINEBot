import {MyProfile} from "./Profile";

export interface MyProfileRepository {
  get(): Promise<MyProfile>;
}
