import {ScrapBoxPageResponse} from "../../dataModel/ScrapBox";

export interface ScrapBoxService {
  fetchRandomPage(): Promise<ScrapBoxPageResponse>;
}
