import {Article} from "../domain/Article";
import {ArticleRepository} from "../domain/ArticleRepository";
import {QiitaService} from "./qiita/QiitaService";
import {QiitaServiceImpl} from "./qiita/QiitaServiceImpl";

/**
 * 記事リポジトリの実装
 */
export class QiitaArticleRepositoryImpl implements ArticleRepository {
  service: QiitaService;
  /**
   * @constructor
   * @param {QiitaService} service - Qiitaサービス
   */
  constructor(service: QiitaService = new QiitaServiceImpl()) {
    this.service = service;
  }
  /**
   * 記事を全件取得する
   * @return {Promise<Article[]>}
   */
  async get(): Promise<Article[]> {
    const articles = await this.service.getArticles();
    return articles;
  }
}
