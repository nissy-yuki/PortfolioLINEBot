import {FlexText} from "@line/bot-sdk";

export const categoryText = (text: string): FlexText => ({
  type: "text",
  text: text,
  weight: "bold",
  color: "#1DB446",
  size: "sm",
});
