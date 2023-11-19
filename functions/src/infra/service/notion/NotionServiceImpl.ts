import {inject, injectable} from "tsyringe";
import {NotionService} from "./NotionService";
import {databaseIds} from "../../../env/notion";
import {Client, isFullPageOrDatabase} from "@notionhq/client";
import {RichTextItemResponse} from "@notionhq/client/build/src/api-endpoints";
import {Account, Career, ProfileDetail} from "../../../domain/dataModel/MyProfile";

@injectable()
/**
 * NotionServiceの実装クラス
 */
export default class NotionServiceImpl implements NotionService {
  baseUrl = "https://api.notion.com/v1/databases/";
  client: Client;
  /**
   * @constructor
   * @param {string} accessToken
   */
  constructor(
    @inject("NotionAccessToken") accessToken: string,
  ) {
    this.client = new Client({auth: accessToken});
  }
  /**
   * 経歴を取得する
   */
  async fetchCareer(): Promise<Career[]> {
    const res = await this.client.databases.query({
      database_id: databaseIds.career,
    });
    const {results} = res;
    const careers: Career[] = results.map((result) => {
      if (!isFullPageOrDatabase(result)) return [];
      const d = result.properties;
      const item: Career = {
        year: "",
        month: "",
        event: "",
      };
      Object.keys(d).forEach((key: string) => {
        const property = d[key];
        if (property.type === "number") {
          item[key.toLowerCase() as keyof Career] = property.number?.toString() as string;
        } else if (property.type === "title") {
          item[key.toLowerCase() as keyof Career] = (property.title as RichTextItemResponse[])[0].plain_text;
        }
      });
      return item;
    }) as Career[];
    careers.sort((a, b) => {
      const aDate = new Date(a.year + "/" + a.month + "/01");
      const bDate = new Date(b.year + "/" + b.month + "/01");
      return aDate.getTime() - bDate.getTime();
    });
    return careers;
  }
  /**
   * アカウントを取得する
   */
  async fetchAccount(): Promise<Account[]> {
    const res = await this.client.databases.query({
      database_id: databaseIds.account,
    });
    const {results} = res;
    const accounts: Account[] = results.map((result) => {
      if (!isFullPageOrDatabase(result)) return [];
      const d = result.properties;
      const item: Account = {
        name: "",
        url: "",
        service: "",
        icon: "",
      };
      Object.keys(d).forEach((key) => {
        const property = d[key];
        if (property.type === "rich_text") {
          item[key.toLowerCase() as keyof Account] = (property.rich_text as RichTextItemResponse[])[0].plain_text;
        } else if (property.type === "url") {
          item[key.toLowerCase() as keyof Account] = property.url as string;
        } else if (property.type === "title") {
          item[key.toLowerCase() as keyof Account] = (property.title as RichTextItemResponse[])[0].plain_text;
        }
      });
      return item;
    }) as Account[];
    return accounts;
  }
  /**
   * プロフィールを取得する
   */
  async fetchProfile(): Promise<ProfileDetail> {
    const res = await this.client.databases.query({
      database_id: databaseIds.profile,
    });
    const {results} = res;
    const detail: ProfileDetail = {
      name: "",
      imageUrl: "",
      occupation: "",
      description: "",
      affiliation: "",
      affiliation_url: "",
      hobby: "",
      mail: "",
    };
    results.forEach((result) => {
      if (!isFullPageOrDatabase(result)) return;
      const d = result.properties;
      Object.keys(d).forEach((key) => {
        const property = d[key];
        if (property.type === "rich_text") {
          detail[key.toLowerCase() as keyof ProfileDetail] = (property.rich_text as RichTextItemResponse[])[0].plain_text;
        } else if (property.type === "email") {
          detail[key.toLowerCase() as keyof ProfileDetail] = property.email as string;
        } else if (property.type === "title") {
          detail[key.toLowerCase() as keyof ProfileDetail] = (property.title as RichTextItemResponse[])[0].plain_text;
        } else if (property.type === "url") {
          detail[key.toLowerCase() as keyof ProfileDetail] = property.url as string;
        }
      });
    });
    return detail;
  }
}
