import {FlexBox, FlexBubble, FlexComponent, FlexMessage, FlexText} from "@line/bot-sdk";
import {Account, Career, MyProfile, ProfileDetail} from "../../domain/dataModel/MyProfile";
import {primaryText} from "./components/primaryText";
import accountComponent from "./components/accountComponent";
import {categoryText} from "./components/categoryText";
import {indentionPairText} from "./components/pairText";

/**
 * プロフィールメッセージを作成する
 * @param {MyProfile} profile - プロフィール
 * @return {FlexMessage} - プロフィールメッセージ
 */
export default function createProfileMessage(profile: MyProfile): FlexMessage {
  const bubbles: FlexBubble[] = [];
  bubbles.push(createMainProfileBubble(profile.detail));
  bubbles.push(createAccountBubble(profile.accounts));
  bubbles.push(createCareerProfileBubble(profile.careers));
  return {
    type: "flex",
    altText: "プロフィール",
    contents: {
      type: "carousel",
      contents: bubbles,
    },
  };
}

/**
 * メインプロフィールバブルを作成する
 * @param {ProfileDetail} profile - プロフィール
 * @return {FlexBubble}
 */
function createMainProfileBubble(profile: ProfileDetail): FlexBubble {
  const bubble: FlexBubble = {
    type: "bubble",
  };
  const bodyContents: FlexComponent[] = [primaryText(profile.name)];
  if (profile.imageUrl !== "") {
    bubble.hero = {
      type: "image",
      url: profile.imageUrl+".png",
      size: "full",
      aspectRatio: "20:13",
      aspectMode: "cover",
    };
  }
  bubble.body = {
    type: "box",
    layout: "vertical",
    spacing: "md",
    contents: bodyContents,
  };
  return {
    type: "bubble",
    body: {
      type: "box",
      layout: "vertical",
      contents: [
        categoryText("プロフィール"),
        // {
        //   "type": "box",
        //   "layout": "vertical",
        //   "contents": [
        //     {
        //       "type": "box",
        //       "layout": "vertical",
        //       "contents": [
        //         {
        //           "type": "image",
        //           "url": profile.imageUrl+".png",
        //           "size": "full",
        //           "aspectMode": "cover",
        //         },
        //       ],
        //       "width": "200px",
        //       "cornerRadius": "150px",
        //     },
        //   ],
        //   "alignItems": "center",
        // },
        {
          "type": "text",
          "text": profile.name,
          "align": "center",
          "size": "xl",
          "weight": "bold",
        },
        indentionPairText("所属", profile.affiliation),
        indentionPairText("職種", profile.occupation),
        indentionPairText("趣味", profile.hobby),
        indentionPairText("メール", profile.mail),
      ],
      spacing: "md",
    },
  };
}

/**
 * アカウントバブルを作成する
 * @param {Account[]} accounts - アカウント
 * @return {FlexBubble}
 */
function createAccountBubble(accounts: Account[]): FlexBubble {
  return {
    type: "bubble",
    body: {
      type: "box",
      layout: "vertical",
      contents: [
        categoryText("アカウント"),
        ...accounts.map((account) => {
          return accountComponent(account);
        }),
      ],
      spacing: "md",
    },
  };
}

/**
 * 経歴プロフィールバブルを作成する
 * @param {Career[]} careers - 経歴
 * @return {FlexBubble}
 */
function createCareerProfileBubble(careers: Career[]): FlexBubble {
  const bodyContents: FlexComponent[] = [categoryText("経歴")];
  const yearText = (year: string): FlexText => {
    return {
      "type": "text",
      "text": year+"年",
      "align": "center",
      "weight": "bold",
    };
  };
  const monthBox = (month: string, contents: FlexComponent[]): FlexBox => {
    return {
      type: "box",
      layout: "horizontal",
      contents: [
        {
          type: "text",
          text: month+"月",
          flex: 1,
          size: "sm",
          gravity: "top",
          align: "end",
        },
        {
          type: "box",
          layout: "vertical",
          contents: contents,
          flex: 7,
          spacing: "sm",
        },
      ],
      spacing: "sm",
    };
  };
  let year = "";
  let month = "";
  const monthContents: FlexComponent[] = [];
  console.log(careers);
  careers.forEach((career) => {
    if (year !== career.year) {
      bodyContents.push(yearText(career.year));
      year = career.year;
      month = career.month;
      monthContents.push(primaryText(career.event, 4, true));
    } else {
      if (month !== career.month) {
        bodyContents.push(monthBox(month, [...monthContents]));
        monthContents.length = 0;
        month = career.month;
      }
      monthContents.push(primaryText(career.event, 4, true));
    }
  });
  bodyContents.push(monthBox(month, [...monthContents]));
  return {
    type: "bubble",
    body: {
      type: "box",
      layout: "vertical",
      contents: bodyContents,
      spacing: "md",
    },
  };
}
