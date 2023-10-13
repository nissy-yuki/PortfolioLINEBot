import {FlexText} from "@line/bot-sdk";

export const primaryText = (
  text: string,
  maxLines = 1,
  wrap = false,
): FlexText => ({
  type: "text",
  text: text,
  maxLines: maxLines,
  wrap: wrap,
});
