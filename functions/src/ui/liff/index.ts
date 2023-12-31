import * as express from "express";
import {container} from "tsyringe";
import SendMessageUseCase from "../../application/PushMessageUseCase";
import lineClientModule from "../../di/LineClientModule";
import {ownerId} from "../../env/line";
import {hostingUrl} from "../../env/firebase";

export const liffApp = express();

liffApp.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", hostingUrl);
  res.setHeader(
    "Access-Control-Allow-Methods",
    "POST,OPTIONS"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  next();
});

liffApp.post("/sendMessage", (req, res) => {
  lineClientModule(container);
  const usecase = container.resolve(SendMessageUseCase);
  const data: SendMessageRequest = req.body;
  usecase.execute(ownerId, data.message).then(() => {
    res.status(200).send("ok");
  }).catch((err) => {
    res.status(500).send(err);
  });
});

type SendMessageRequest = {
  message: string;
}
