import * as express from "express";
import * as line from "@line/bot-sdk";
import {isReplyableEvent} from "./TypeCheck";

const config = {
  channelAccessToken: process.env.LINE_ACCESS_TOKEN || "",
  channelSecret: process.env.LINE_CHANNEL_SECRET || "",
};

const client = new line.Client(config);
export const lineBotApp = express();

process.env.TZ = "Asia/Tokyo";

lineBotApp.post("/", line.middleware(config), (req, res) => {
  Promise.all(req.body.events.map(handleEvent))
    .then(() => res.status(200).end())
    .catch((err) => {
      console.error(err);
      res.status(500).end();
    });
});

/**
 * LINEでメッセージが送信された時の処理
 * @param {Object} event - LINEのWebhookイベントオブジェクト
 * @return {Promise}
 */
async function handleEvent(event: line.WebhookEvent) {
  if (isReplyableEvent(event)) {
    return client.replyMessage(event.replyToken, {
      type: "text",
      text: "message",
    });
  }
}


