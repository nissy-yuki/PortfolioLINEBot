import {FlexBubble, FlexCarousel, FlexComponent, Message} from "@line/bot-sdk";
import {Article} from "../../domain/Article";
import {categoryText} from "./components/categoryText";
import {titleText} from "./components/titleText";
import {tagsComponent} from "./components/tagsComponent";
import {oneLineSubComponent} from "./components/oneLineSubComponent";
import {uriButton} from "./components/uriButton";
import {primaryText} from "./components/primaryText";

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
  let message: Message = {
    type: "flex",
    altText: "記事一覧",
    contents: createArticleCarousel(articles),
  };
  if (JSON.stringify(message).length > 500000) {
    message = {
      type: "text",
      text: "記事が多すぎて表示できません",
    };
  }
  return message;
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
  const bubbleContents: FlexComponent[] = [];
  bubbleContents.push(categoryText("記事"));
  bubbleContents.push(titleText(article.title));
  if (article.tags.length !== 0) {
    bubbleContents.push(tagsComponent(article.tags));
  }
  bubbleContents.push(primaryText(article.body, 4, true));
  const createdAt = article.createdAt.toISOString().split("T")[0];
  bubbleContents.push(oneLineSubComponent("公開日", createdAt));
  const updatedAt = article.updatedAt.toISOString().split("T")[0];
  if (createdAt !== updatedAt) {
    bubbleContents.push(oneLineSubComponent("更新日", updatedAt));
  }
  return {
    type: "bubble",
    body: {
      type: "box",
      layout: "vertical",
      contents: bubbleContents,
      spacing: "md",
    },
    footer: {
      type: "box",
      layout: "vertical",
      contents: [
        uriButton("記事を読む", article.url),
      ],
    },
  };
}
