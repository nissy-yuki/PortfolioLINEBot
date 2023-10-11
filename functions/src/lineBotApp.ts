import * as functions from "firebase-functions";
import * as express from "express";
import * as line from "@line/bot-sdk";
import {isMessageEvent, isReplyableEvent, isTextMessage} from "./typeCheck";
import {MessageHandlerFactory} from "./MessageHandlerFactory";
import {UnsupportedHandlerFactory} from "./UnsupportedHandlerFactory";

const config = {
  channelSecret: functions.config().line.channel_secret || "",
  channelAccessToken: functions.config().line.channel_access_token || "",
};

const client = new line.Client(config);
export const lineBotApp = express();

process.env.TZ = "Asia/Tokyo";

lineBotApp.post("/webhook", line.middleware(config), (req, res) => {
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
    const userId = event.source.userId;
    if (!userId) throw new Error("userIdが取得できませんでした");
    let factory = new UnsupportedHandlerFactory();
    if (isMessageEvent(event)) {
      let message = "message";
      if (isTextMessage(event.message)) {
        message = event.message.text;
      } else {
        message = event.message.type;
      }
      factory = new MessageHandlerFactory(message, userId);
    }
    const handler = factory.create();
    const message = await handler.getMessage();
    return client.replyMessage(event.replyToken, message);
  }
  return Promise.resolve();
}


