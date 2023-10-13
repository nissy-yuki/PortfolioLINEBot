import {FlexBox} from "@line/bot-sdk";

export const tagsComponent = (tags: string[]): FlexBox => ({
  type: "box",
  layout: "vertical",
  contents: createTagsComponent(tags),
  spacing: "sm",
});


/**
 * タグのコンポーネントを作成する
 * @param {string[]} tags - タグの配列
 * @return {FlexBox[]}
 */
function createTagsComponent(tags: string[]): FlexBox[] {
  const oneLineCharLimit = 28;
  const tagsComponents: FlexBox[] = [];
  const tagsLayer: string[][] = [[]];
  let layer = 0;
  tags.forEach((tag) => {
    const nowOneLineCharLength = tagsLayer[layer].length * 2 + oneLineTagsCharCount([...tagsLayer[layer], tag]);
    if (oneLineCharLimit < nowOneLineCharLength) {
      layer++;
      tagsLayer[layer] = [];
    }
    tagsLayer[layer].push(tag);
  });
  tagsLayer.forEach((oneLineTags) => {
    tagsComponents.push({
      type: "box",
      layout: "horizontal",
      contents: oneLineTags.map(tagBox),
      spacing: "md",
    });
  });
  return tagsComponents;
}

const tagBox = (tag: string): FlexBox => ({
  type: "box",
  layout: "horizontal",
  contents: [
    {
      type: "text",
      text: tag,
      action: {
        type: "message",
        label: tag,
        text: tag,
      },
      color: "#aaaaaa",
      margin: "md",
      flex: 0,
    },
    {
      type: "box",
      layout: "vertical",
      contents: [],
    },
  ],
  flex: 0,
  borderWidth: "normal",
  borderColor: "#aaaaaa",
  cornerRadius: "xxl",
  spacing: "md",
});

/**
 * タグ一列の文字数をカウントする
 * @param {string[]} tags - タグの配列
 * @return {number}
 */
function oneLineTagsCharCount(tags: string[]): number {
  return tags.map(tagCharCount).reduce((sum, currentValue) => sum + currentValue, 0);
}

/**
 * タグの文字数をカウントする
 * 日本語の場合は2文字としてカウント
 * @param {string} tag - タグ
 * @return {number}
 */
function tagCharCount(tag: string): number {
  return tag.split("").map((c) => {
    return c.match(/[ -~]/) ? 1 : 2;
  }).reduce((sum, currentValue) => sum + currentValue, 0);
}

