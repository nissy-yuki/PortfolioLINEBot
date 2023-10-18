import {FlexBox} from "@line/bot-sdk";
import {Account} from "../../../domain/Profile";
import {urlText} from "./urlText";

/**
 * アカウントコンポーネントを作成する
 * @param {Account} account - アカウント情報
 * @return {FlexBox}
 */
export function accountComponent(account: Account): FlexBox {
  return {
    type: "box",
    layout: "baseline",
    contents: [
      {
        type: "icon",
        url: account.iconUrl,
        size: "sm",
      },
      urlText(account.name, account.url, "md", "md"),
    ],
  };
}
