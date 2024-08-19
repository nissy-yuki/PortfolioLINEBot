import {FlexBox} from "@line/bot-sdk";
import {Account} from "../../../domain/dataModel/MyProfile";
import {urlText} from "./urlText";

/**
 * アカウントコンポーネントを作成する
 * @param {Account} account - アカウント情報
 * @return {FlexBox}
 */
export default function accountComponent(account: Account): FlexBox {
  return {
    type: "box",
    layout: "baseline",
    contents: [
      {
        type: "icon",
        url: account.icon+".png",
        size: "md",
      },
      urlText(account.name, account.url, "md", "md"),
    ],
    action: {
      type: "uri",
      label: "action",
      uri: account.url,
    },
  };
}
