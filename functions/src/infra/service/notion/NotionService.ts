import {Account, Career, ProfileDetail} from "../../../domain/dataModel/MyProfile";

export interface NotionService {
  fetchCareer(): Promise<Career[]>;
  fetchAccount(): Promise<Account[]>;
  fetchProfile(): Promise<ProfileDetail>;
}
