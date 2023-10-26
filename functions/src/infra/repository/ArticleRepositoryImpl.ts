import {inject, injectable} from "tsyringe";
import {Article} from "../../domain/Article";
import {ArticleRepository} from "../../domain/ArticleRepository";
import {QiitaService} from "../service/qiita/QiitaService";

@injectable()
/**
 * 記事リポジトリの実装
 */
export class ArticleRepositoryImpl implements ArticleRepository {
  /**
   * @constructor
   * @param {QiitaService} service - Qiitaサービス
   */
  constructor(
    @inject("QiitaService")
    private readonly service: QiitaService
  ) { }
  /**
   * 記事を全件取得する
   * @return {Promise<Article[]>}
   */
  async get(): Promise<Article[]> {
    const articles = await this.service.getArticles();
    return articles;
  }
}
