import {Article} from "../domain/Article";
import {ArticleRepository} from "../domain/ArticleRepository";
import {QiitaServiceImpl} from "./qiita/QiitaServiceImpl";

/**
 * 記事リポジトリの実装
 */
export class ArticleRepositoryImpl implements ArticleRepository {
  /**
   * 記事を全件取得する
   * @return {Promise<Article[]>}
   */
  async findAll(): Promise<Article[]> {
    const service = new QiitaServiceImpl();
    const articles = await service.getArticles();
    return articles;
  }
}
