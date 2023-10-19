import {FlexBox, FlexBubble, FlexComponent, FlexMessage} from "@line/bot-sdk";
import {Account, Career, MyProfile, Skill} from "../../domain/Profile";
import {primaryText} from "./components/primaryText";
import {accountComponent} from "./components/accountComponent";
import {pairText} from "./components/pairText";

/**
 * プロフィールメッセージを作成する
 * @param {MyProfile} profile - プロフィール
 * @return {FlexMessage} - プロフィールメッセージ
 */
export function createProfileMessage(profile: MyProfile): FlexMessage {
  const bubbles: FlexBubble[] = [];
  bubbles.push(createMainProfileBubble(profile.name, profile.imageUrl, profile.accounts, profile.skills));
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
 * @param {string} name - 名前
 * @param {string} imageUrl - 画像URL
 * @param {Account[]} accounts - アカウント
 * @param {string[]} skills - スキル
 * @return {FlexBubble}
 */
function createMainProfileBubble(name: string, imageUrl: string, accounts: Account[], skills: Skill[]): FlexBubble {
  const bodyContents: FlexComponent[] = [primaryText(name)];
  if (accounts.length > 0) bodyContents.push(createAccountsBox(accounts));
  if (skills.length > 0) bodyContents.push(createSkillsBox(skills));
  return {
    type: "bubble",
    hero: {
      type: "image",
      url: imageUrl,
      size: "full",
      aspectRatio: "20:13",
      aspectMode: "cover",
    },
    body: {
      type: "box",
      layout: "vertical",
      spacing: "md",
      contents: bodyContents,
    },
  };
}

/**
 * アカウントボックスを作成する
 * @param {Account[]} accounts - アカウントリスト
 * @return {FlexBox}
 */
function createAccountsBox(accounts: Account[]): FlexBox {
  const accountComponents: FlexBox[] = accounts.map(accountComponent);
  return {
    type: "box",
    layout: "vertical",
    contents: accountComponents,
    spacing: "sm",
  };
}

/**
 * スキルボックスを作成する
 * @param {Skill[]} skills - スキルリスト
 * @return {FlexBox}
 */
function createSkillsBox(skills: Skill[]): FlexBox {
  const skillComponents: FlexBox[] = skills.map((skill) => pairText(skill.name, skill.purpose));
  return {
    type: "box",
    layout: "vertical",
    contents: skillComponents,
  };
}

/**
 * 経歴プロフィールバブルを作成する
 * @param {Career[]} careers - 経歴
 * @return {FlexBubble}
 */
function createCareerProfileBubble(careers: Career[]): FlexBubble {
  return {
    type: "bubble",
    body: {
      type: "box",
      layout: "vertical",
      contents: careers.map((career) => {
        return {
          type: "text",
          text: `${career.date.getFullYear()}年 ${career.event}`,
          wrap: true,
          size: "sm",
        };
      }),
    },
  };
}
