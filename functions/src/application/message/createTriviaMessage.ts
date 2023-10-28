import {FlexMessage} from "@line/bot-sdk";
import {Trivia} from "../../domain/dataModel/Trivia";
import {categoryText} from "./components/categoryText";
import {titleText} from "./components/titleText";
import {normalText} from "./components/text";
import {oneLineSubComponent} from "./components/oneLineSubComponent";

/**
 * 雑学のメッセージを作成する
 * @param {Trivia} trivia - 雑学データ
 * @return {FlexMessage}
 */
export function createTriviaMessage(trivia: Trivia): FlexMessage {
  const createdAt = trivia.createdAt.toISOString().split("T")[0];
  return {
    type: "flex",
    altText: "雑学",
    contents: {
      type: "bubble",
      body: {
        type: "box",
        layout: "vertical",
        contents: [
          categoryText("雑学"),
          titleText(trivia.title),
          normalText(trivia.description),
          oneLineSubComponent("作成日", createdAt),
        ],
        spacing: "md",
      },
    },
  };
}
