import {FlexBubble, FlexCarousel, Message} from "@line/bot-sdk";
import {Article} from "../../domain/Article";

/**
 * 記事のメッセージを作成する
 * @param {Article[]} articles - 記事データ
 * @return {Message}
 */
export function createArticleMessage(articles: Article[]): Message {
  if (articles.length === 0) {
    return {
      type: "text",
      text: "記事が見つかりませんでした",
    };
  }
  return {
    type: "flex",
    altText: "記事一覧",
    contents: createArticleCarousel(articles),
  };
}

/**
 * 記事のカルーセルを作成する
 * @param {Article[]} articles - 記事データ
 * @return {FlexCarousel}
 */
function createArticleCarousel(articles: Article[]): FlexCarousel {
  return {
    type: "carousel",
    contents: articles.map(createArticleBubble),
  };
}

/**
 * 記事のバブルを作成する
 * @param {Article} article - 記事データ
 * @return {FlexBubble}
 */
function createArticleBubble(article: Article): FlexBubble {
  return {
    type: "bubble",
    body: {
      type: "box",
      layout: "vertical",
      contents: [
        {
          type: "text",
          text: article.title,
          weight: "bold",
          size: "xl",
          wrap: true,
        },
      ],
    },
  };
}
