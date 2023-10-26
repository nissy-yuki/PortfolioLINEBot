import {Article} from "../../../domain/dataModel/Article";
import {ZennService} from "./ZennService";
/**
 * Zenn APIの実装
 */
export default class ZennServiceImpl implements ZennService {
  baseUrl = "https://zenn.dev/api/articles?username=nisisippi&order=latest";
  /**
   * 記事を全件取得する
   * @return {Promise<Article[]>}
   */
  async getArticles(): Promise<Article[]> {
    const res = await fetch(this.baseUrl, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    return data.map((item: ZennArticle): Article => ({
      id: item.id.toString(),
      platform: "Zenn",
      title: item.title,
      url: "https://zenn.dev/nisisippi/articles/"+item.slug,
      tags: [],
      body: "",
      createdAt: new Date(item.published_at),
      updatedAt: new Date(item.body_updated_at),
    }));
  }
}

type ZennArticle = {
  id: number;
  post_type: "Article";
  title: string;
  slug: string;
  published: boolean;
  comments_count: number;
  liked_count: number;
  body_letters_count: number;
  article_type: "tech" | "idea";
  emoji: string;
  is_suspending_private: boolean;
  published_at: string;
  body_updated_at: string;
  source_repo_updated_at: string;
  path: string;
  user: User;
  publication: Publication | null;
};

type User = {
  id: number;
  username: string;
  name: string;
  avatar_small_url: string;
};

type Publication = {
  id: number;
  name: string;
  avatar_small_url: string;
  display_name: string;
  beta_stats: boolean;
  avatar_registered: boolean;
};
