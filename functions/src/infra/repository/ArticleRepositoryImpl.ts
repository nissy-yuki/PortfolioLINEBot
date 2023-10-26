import {inject, injectable} from "tsyringe";
import {Article} from "../../domain/dataModel/Article";
import {ArticleRepository} from "../../domain/repository/ArticleRepository";
import {QiitaService} from "../service/qiita/QiitaService";
import {ZennService} from "../service/zenn/ZennService";

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
    private readonly qiitaService: QiitaService,
    @inject("ZennService")
    private readonly zennService: ZennService,
  ) { }
  /**
   * 記事を全件取得する
   * @return {Promise<Article[]>}
   */
  async get(): Promise<Article[]> {
    const qiitaArticles = await this.qiitaService.getArticles();
    const zennArticles = await this.zennService.getArticles();
    const articles = qiitaArticles.concat(zennArticles);
    return articles;
  }
}
