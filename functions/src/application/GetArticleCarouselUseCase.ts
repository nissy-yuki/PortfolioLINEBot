import {Message} from "@line/bot-sdk";
import {ArticleRepository} from "../domain/ArticleRepository";
import {createArticleMessage} from "./message/createArticleMessage";

/**
 * 記事を取得するユースケース
 */
export class GetArticleCarouselUseCase {
  repository: ArticleRepository;
  /**
   * @constructor
   * @param {ArticleRepository} repository - 記事リポジトリ
   */
  constructor(repository: ArticleRepository) {
    this.repository = repository;
  }
  /**
   * 記事を取得する
   * @return {Promise<Article[]>}
   */
  async getArticle(): Promise<Message> {
    const articles = await this.repository.findAll();
    return createArticleMessage(articles);
  }
}
