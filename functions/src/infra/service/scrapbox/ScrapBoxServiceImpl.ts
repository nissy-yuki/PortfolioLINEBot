import * as functions from "firebase-functions";
import {ScrapBoxService} from "./ScrapBoxService";
import {ScrapBoxPageResponse} from "../../dataModel/ScrapBox";

/**
 * ScrapBoxServiceの実装クラス
 */
export default class ScrapBoxServiceImpl implements ScrapBoxService {
  projectName: string;
  connectionSid: string;
  baseUrl = "https://scrapbox.io/api/pages/";
  /**
   * @constructor
   */
  constructor() {
    this.projectName = functions.config().scrapbox.project_name;
    this.connectionSid = functions.config().scrapbox.connect_sid;
  }
  /**
   * ScrapBoxのページをランダムに取得する
   * @return {Promise<ScrapBoxPageResponse>}
   */
  async fetchRandomPage(): Promise<ScrapBoxPageResponse> {
    const projectPagesRes = await fetch(this.baseUrl + this.projectName + "?limit=10000", {
      headers: {
        Cookie: "connect.sid="+ this.connectionSid +";",
      },
    });
    const projectPagesData = await projectPagesRes.json();
    const i = Math.floor(Math.random() * projectPagesData.count);
    const randomPageRes = await fetch(
      this.baseUrl + this.projectName + "/" +
      projectPagesData.pages[i].title, {
        headers: {
          Cookie: "connect.sid="+ this.connectionSid +";",
        },
      }
    );
    const randomPageData = await randomPageRes.json();
    return randomPageData;
  }
}
