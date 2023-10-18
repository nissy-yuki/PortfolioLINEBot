import {FlexText} from "@line/bot-sdk";

export const urlText = (
  label: string,
  url: string,
  margin: "none" | "sm" | "md" | "lg" = "none",
  size: "sm" | "md" | "lg" = "md",
): FlexText => ({
  type: "text",
  text: label,
  margin: margin,
  size: size,
  color: "#0000ff",
  decoration: "underline",
  action: {
    type: "uri",
    label: label,
    uri: url,
  },
});
