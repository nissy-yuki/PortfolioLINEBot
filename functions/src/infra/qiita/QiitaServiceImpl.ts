import * as functions from "firebase-functions";
import {Article} from "../../domain/Article";
import {QiitaService} from "./QiitaService";

/**
 * Qiita APIの実装
 */
export class QiitaServiceImpl implements QiitaService {
  accessToken: string;
  baseurl = "https://qiita.com/api/v2";
  /**
   * @constructor
   */
  constructor() {
    this.accessToken = functions.config().qiita.access_token;
  }
  /**
   * 記事を全件取得する
   * @return {Promise<Article[]>}
   */
  async getArticles(): Promise<Article[]> {
    const url = this.baseurl + "/authenticated_user/items";
    const res = await fetch(url, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${this.accessToken}`,
      },
    });
    const data = await res.json();
    return data.map((item: QiitaItemResponse): Article => ({
      id: item.id,
      title: item.title,
      url: item.url,
      tags: item.tags.map((tag: QiitaResponseTag) => tag.name),
      body: item.body,
      createdAt: new Date(item.created_at),
      updatedAt: new Date(item.updated_at),
    }));
  }
}

interface QiitaItemResponse {
  rendered_body: string;
  body: string;
  coediting: boolean;
  comments_count: number;
  created_at: string;
  group: QiitaResponseGroup;
  id: string;
  likes_count: number;
  private: boolean;
  reactions_count: number;
  tags: QiitaResponseTag[];
  title: string;
  updated_at: string;
  url: string;
  user: QiitaResponseUser
  page_views_count: number;
  team_membership: {
    name: string;
  };
}

interface QiitaResponseTag {
  name: string;
  versions: string[];
}

interface QiitaResponseGroup {
  created_at: string;
  description: string;
  name: string;
  private: boolean;
  updated_at: string;
  url_name: string;
}

interface QiitaResponseUser {
  description: string;
  facebook_id: string;
  followees_count: number;
  followers_count: number;
  github_login_name: string;
  id: string;
  items_count: number;
  linkedin_id: string;
  location: string;
  name: string;
  organization: string;
  permanent_id: number;
  profile_image_url: string;
  team_only: boolean;
  twitter_screen_name: string;
  website_url: string;
}
