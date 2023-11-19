import {FlexBox} from "@line/bot-sdk";

export const oneLinePairText = (
  mainLabel: string,
  subLabel: string
): FlexBox => ({
  type: "box",
  layout: "baseline",
  contents: [
    {
      type: "text",
      text: mainLabel,
      weight: "bold",
      size: "md",
    },
    {
      type: "text",
      text: subLabel,
      size: "md",
      color: "#555555",
    },
  ],
  spacing: "sm",
});

export const indentionPairText = (
  title: string,
  content: string
): FlexBox => ({
  type: "box",
  layout: "vertical",
  contents: [
    {
      type: "text",
      text: title,
      color: "#aaaaaa",
    },
    {
      type: "text",
      text: content,
    },
  ],
});
