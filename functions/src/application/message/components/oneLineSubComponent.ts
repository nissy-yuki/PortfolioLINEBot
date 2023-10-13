import {FlexBox} from "@line/bot-sdk";

export const oneLineSubComponent = (
  title: string,
  text: string,
  margin: "none" | "xs" | "sm" | "md" | "lg" | "xl" | "xxl" = "md"
): FlexBox => ({
  type: "box",
  layout: "horizontal",
  margin: margin,
  contents: [
    {
      type: "text",
      text: title,
      size: "xs",
      color: "#aaaaaa",
      flex: 0,
    },
    {
      type: "text",
      text: text,
      color: "#aaaaaa",
      size: "xs",
      align: "end",
    },
  ],
});
