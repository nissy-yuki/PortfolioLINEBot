import {Message} from "@line/bot-sdk";
import {ReplyHandler} from "./ReplyHandler";
import {GetArticleCarouselUseCase} from "../../application/GetArticleCarouselUseCase";
import {container} from "tsyringe";
import articleModule from "../../di/ArticleModule";

/**
 * 記事を表示する
 * @implements {ReplyHandler}
 * @class
 */
export class ArticleHandler implements ReplyHandler {
  /**
   * @constructor
   */
  constructor() {
    articleModule(container);
  }
  /**
   * 記事を表示する
   * @return {Promise<Message>}
   */
  async getMessage(): Promise<Message> {
    const usecase = container.resolve(GetArticleCarouselUseCase);
    return await usecase.getArticle();
  }
}
