import {Message} from "@line/bot-sdk";
import {ReplyHandler} from "./ReplyHandler";
import {GetArticleCarouselUseCase} from "../../application/GetArticleCarouselUseCase";
import {ArticleRepositoryImpl} from "../../infra/ArticleRepositoryImpl";

/**
 * 記事を表示する
 * @implements {LineBotHandler}
 * @class
 * @property {string} data - ユーザーから送られてきたデータ
 */
export class ArticleHandler implements ReplyHandler {
  /**
   * 記事を表示する
   * @return {Promise<Message>}
   */
  async getMessage(): Promise<Message> {
    const usecase = new GetArticleCarouselUseCase(new ArticleRepositoryImpl());
    return await usecase.getArticle();
  }
}
