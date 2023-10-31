import {FlexBox, FlexBubble, Message} from "@line/bot-sdk";
import {GitHubRepo} from "../../domain/dataModel/GitHub";
import {uriButton} from "./components/uriButton";
import {categoryText} from "./components/categoryText";
import {titleText} from "./components/titleText";
import {normalText} from "./components/text";
import {tagsComponent} from "./components/tagsComponent";
import {oneLineSubComponent} from "./components/oneLineSubComponent";
import {betweenBox} from "./components/betweenBox";

/**
 * リポジトリ情報をメッセージに変換する
 * @param {GitHubRepo[]} repositories - リポジトリ情報
 * @return {Message} - リポジトリ情報メッセージ
 */
export default function createRepositoriesMessage(repositories: GitHubRepo[]): Message {
  if (repositories.length === 0) {
    return {
      type: "text",
      text: "リポジトリが見つかりませんでした",
    };
  }
  return {
    type: "flex",
    altText: "リポジトリ",
    contents: {
      type: "carousel",
      contents: repositories.slice(0, 10).map(createReposiotryBubble),
    },
  };
}

/**
 * リポジトリ情報をバブルに変換する
 * @param {GitHubRepo} repository - リポジトリ情報
 * @return {FlexBubble} - リポジトリ情報バブル
 */
function createReposiotryBubble(repository: GitHubRepo): FlexBubble {
  const topBox: FlexBox = {
    type: "box",
    layout: "vertical",
    contents: [],
    spacing: "md",
  };
  topBox.contents.push(categoryText("リポジトリ"));
  topBox.contents.push(titleText(repository.name));
  if (repository.language !== "") topBox.contents.push(tagsComponent([repository.language]));
  if (repository.description !== "") {
    topBox.contents.push(
      normalText(
        repository.description,
        "md",
        true,
      )
    );
  }
  const bottomBox: FlexBox = {
    type: "box",
    layout: "vertical",
    contents: [],
    spacing: "md",
  };
  const createdAt = repository.created_at.toISOString().split("T")[0];
  bottomBox.contents.push(oneLineSubComponent("作成日", createdAt));
  const updatedAt = repository.updated_at.toISOString().split("T")[0];
  if (createdAt !== updatedAt) {
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
        uriButton("GitHubで見る", repository.html_url),
      ],
    },
  };
}
