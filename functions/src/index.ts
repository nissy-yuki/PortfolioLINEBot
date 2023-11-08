import "reflect-metadata";
import * as functions from "firebase-functions";
import {lineBotApp} from "./ui/lineBot/lineBotApp";
import {liffApp} from "./ui/liff";

if (!process.env.FUNCTION_NAME || process.env.FUNCTION_NAME === "lineBot") {
  exports.lineBot = functions.region("asia-northeast1").https.onRequest(lineBotApp);
}

if (!process.env.FUNCTION_NAME || process.env.FUNCTION_NAME === "liff") {
  exports.liff = functions.region("asia-northeast1").https.onRequest(liffApp);
}
