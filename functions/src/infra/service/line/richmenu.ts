import {Area, MessageAction, RichMenu} from "@line/bot-sdk";
import {richmenuMessage} from "../../../resource/message";
import {liffUrl} from "../../../env/line";

const horizontalQuarterBound = (x: number, y: number): Area => ({
  x,
  y,
  width: 625,
  height: 843,
});

const horizontalQuarterHalfBound = (x: number, y: number): Area => ({
  x,
  y,
  width: 625,
  height: 421,
});

const messageAction = (message: string): MessageAction => ({
  type: "message",
  text: message,
});

export const HOME_RICH_MENU: RichMenu = {
  size: {
    width: 2500,
    height: 843,
  },
  selected: true,
  name: "home-menu",
  chatBarText: "メニュー",
  areas: [
    {
      bounds: horizontalQuarterBound(0, 0),
      action: messageAction(richmenuMessage.profile),
    },
    {
      bounds: horizontalQuarterBound(625, 0),
      action: messageAction(richmenuMessage.repository),
    },
    {
      bounds: horizontalQuarterBound(1250, 0),
      action: messageAction(richmenuMessage.article),
    },
    {
      bounds: horizontalQuarterHalfBound(1875, 0),
      action: {
        type: "uri",
        uri: liffUrl,
      },
    },
    {
      bounds: horizontalQuarterHalfBound(1875, 421),
      action: messageAction(richmenuMessage.trivia),
    },
  ],
};
