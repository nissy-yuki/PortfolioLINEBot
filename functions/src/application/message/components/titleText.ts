import {FlexText} from "@line/bot-sdk";

export const titleText = (text: string): FlexText => ({
  type: "text",
  text: text,
  weight: "bold",
  size: "xl",
  margin: "md",
  wrap: true,
});
