import {ScrapBoxPageResponse} from "../../dataModel/scrapBox";

export interface ScrapBoxService {
  fetchRandomPage(): Promise<ScrapBoxPageResponse>;
}
