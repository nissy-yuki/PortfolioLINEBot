import {FlexBox, FlexBubble, FlexCarousel, Message} from "@line/bot-sdk";
import {Article} from "../../domain/dataModel/Article";
import {categoryText} from "./components/categoryText";
import {titleText} from "./components/titleText";
import {tagsComponent} from "./components/tagsComponent";
import {oneLineSubComponent} from "./components/oneLineSubComponent";
import {uriButton} from "./components/uriButton";
import {primaryText} from "./components/primaryText";
import {socialAccountUrl} from "../../resource/social";
import {betweenBox} from "./components/betweenBox";

/**
 * 記事のメッセージを作成する
 * @param {Article[]} articles - 記事データ
 * @return {Message}
 */
export default function createArticleMessage(articles: Article[]): Message {
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
    contents: articles.slice(0, 10).map(createArticleBubble),
  };
}

/**
 * 記事のバブルを作成する
 * @param {Article} article - 記事データ
 * @return {FlexBubble}
 */
function createArticleBubble(article: Article): FlexBubble {
  const topBox: FlexBox = {
    type: "box",
    layout: "vertical",
    contents: [],
    spacing: "md",
  };
  topBox.contents.push(createArticleBubbleTop("記事", article.platform));
  topBox.contents.push(titleText(article.title));
  if (article.tags.length !== 0) topBox.contents.push(tagsComponent(article.tags));
  if (article.body !== "") topBox.contents.push(primaryText(article.body.slice(0, 100), 4, true));
  const bottomBox: FlexBox = {
    type: "box",
    layout: "vertical",
    contents: [],
    spacing: "md",
  };
  const createdAt = article.createdAt.toISOString().split("T")[0];
  bottomBox.contents.push(oneLineSubComponent("公開日", createdAt));
  const updatedAt = article.updatedAt.toISOString().split("T")[0];
  if (createdAt < updatedAt) {
    bottomBox.contents.push(oneLineSubComponent("更新日", updatedAt));
  }
  return {
    type: "bubble",
    body: betweenBox(
      topBox,
      bottomBox,
    ),
    footer: {
      type: "box",
      layout: "vertical",
      contents: [
        uriButton("記事を読む", article.url),
      ],
    },
  };
}

/**
 * 記事のバブルのトップを作成する
 * @param {string} category - カテゴリ
 * @param {"Qiita" | "Zenn"} articlePlatForm - 記事のプラットフォーム
 * @return {FlexBox}
 */
function createArticleBubbleTop(category: string, articlePlatForm: "Qiita" | "Zenn"): FlexBox {
  const uri = articlePlatForm === "Qiita" ? socialAccountUrl.qiita : socialAccountUrl.zenn;
  return {
    type: "box",
    layout: "baseline",
    contents: [
      categoryText(category),
      {
        type: "text",
        text: articlePlatForm,
        size: "xs",
        color: "#aaaaaa",
        align: "end",
        gravity: "bottom",
        action: {
          type: "uri",
          label: "action",
          uri: uri,
        },
      },
    ],
    spacing: "md",
  };
}
