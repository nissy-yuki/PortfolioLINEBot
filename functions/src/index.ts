import * as functions from "firebase-functions";
import {lineBotApp} from "./lineBotApp";

export const lineBot =
  functions.region("asia-northeast1").https.onRequest(lineBotApp);
