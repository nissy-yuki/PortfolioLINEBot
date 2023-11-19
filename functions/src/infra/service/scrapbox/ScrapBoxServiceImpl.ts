import {ScrapBoxService} from "./ScrapBoxService";
import {ScrapBoxPageResponse} from "../../dataModel/scrapBox";
import {projectName} from "../../../env/scrapBox";

/**
 * ScrapBoxServiceの実装クラス
 */
export default class ScrapBoxServiceImpl implements ScrapBoxService {
  projectName: string;
  baseUrl = "https://scrapbox.io/api/pages/";
  /**
   * @constructor
   */
  constructor() {
    this.projectName = projectName;
  }
  /**
   * ScrapBoxのページをランダムに取得する
   * @return {Promise<ScrapBoxPageResponse>}
   */
  async fetchRandomPage(): Promise<ScrapBoxPageResponse> {
    const projectPagesRes = await fetch(this.baseUrl + this.projectName + "?limit=10000");
    const projectPagesData = await projectPagesRes.json();
    const i = Math.floor(Math.random() * projectPagesData.count);
    const randomPageRes = await fetch(
      this.baseUrl + this.projectName + "/" +
      projectPagesData.pages[i].title
    );
    const randomPageData = await randomPageRes.json();
    return randomPageData;
  }
}
