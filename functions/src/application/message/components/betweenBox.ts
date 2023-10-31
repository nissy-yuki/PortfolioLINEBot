import {FlexBox} from "@line/bot-sdk";

export const betweenBox = (
  topComponent: FlexBox,
  bottomComponent: FlexBox,
  spacing: "none" | "xs" | "sm" | "md" | "lg" | "xl" = "md",
): FlexBox => ({
  type: "box",
  layout: "vertical",
  contents: [topComponent, bottomComponent],
  justifyContent: "space-between",
  spacing: spacing,
});
