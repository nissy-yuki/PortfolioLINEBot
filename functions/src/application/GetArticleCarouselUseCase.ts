import {Message} from "@line/bot-sdk";
import {ArticleRepository} from "../domain/repository/ArticleRepository";
import createArticleMessage from "./message/createArticleMessage";
import {inject, injectable} from "tsyringe";

@injectable()
/**
 * 記事を取得するユースケース
 */
export default class GetArticleMessageUseCase {
  /**
   * @constructor
   */
  constructor(
    @inject("ArticleRepository")
    private readonly repository: ArticleRepository
  ) {}
  /**
   * 記事を取得する
   * @return {Promise<Article[]>}
   */
  async getArticle(): Promise<Message> {
    const articles = await this.repository.get();
    return createArticleMessage(articles);
  }
}
