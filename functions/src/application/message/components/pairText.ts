import {FlexBox} from "@line/bot-sdk";

export const pairText = (
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
