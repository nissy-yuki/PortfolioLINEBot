import {FlexBox} from "@line/bot-sdk";

export const tagsComponent = (tags: string[]): FlexBox => ({
  type: "box",
  layout: "vertical",
  contents: [
    createTagsComponent(tags),
  ],
});


/**
 * タグのコンポーネントを作成する
 * @param {string[]} tags - タグの配列
 * @return {FlexBox[]}
 */
function createTagsComponent(tags: string[]): FlexBox {
  const oneLineCharLimit = 28;
  const tagsComponents: FlexBox[] = [];
  const oneLineTagsComponents: FlexBox[] = [];
  const oneLineTags: string[] = [];
  tags.forEach((tag) => {
    oneLineTags.push(tag);
    const nowOneLineCharLength = oneLineTags.join("").length + (oneLineTags.length * 2 - 1);
    if (oneLineCharLimit <= nowOneLineCharLength) {
      oneLineTags.map((oneLineTag) => {
        oneLineTagsComponents.push(tagBox(oneLineTag));
      });
      tagsComponents.push({
        type: "box",
        layout: "horizontal",
        contents: oneLineTagsComponents,
      });
      oneLineTags.length = 0;
      oneLineTagsComponents.length = 0;
    }
  });
  return {
    type: "box",
    layout: "vertical",
    contents: tagsComponents,
  };
}


const tagBox = (tag: string): FlexBox => ({
  type: "box",
  layout: "horizontal",
  contents: [
    {
      type: "text",
      text: "TypeScript",
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
