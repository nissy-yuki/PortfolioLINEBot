import {Message} from "@line/bot-sdk";
import {ReplyHandler} from "./ReplyHandler";
import {GetArticleCarouselUseCase} from "../../application/GetArticleCarouselUseCase";
import {container} from "tsyringe";
import {articleModule} from "../../di/ArticleModule";

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
    articleModule();
    const usecase = container.resolve(GetArticleCarouselUseCase);
    return await usecase.getArticle();
  }
}
