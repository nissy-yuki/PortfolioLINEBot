import {FlexText} from "@line/bot-sdk";

export const normalText =(
  text: string,
  size: "xxs" | "xs" | "sm" | "md" | "lg" | "xl" | "xxl" | "3xl" | "4xl" | "5xl" | "6xl" | "7xl" = "md",
  wrap = true,
): FlexText => ({
  type: "text",
  text: text,
  size: size,
  wrap: wrap,
});
