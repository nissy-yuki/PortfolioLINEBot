import {DependencyContainer} from "tsyringe";
import LineClientServiceImpl from "../infra/service/line/LineClientServiceImpl";
import {Client} from "@line/bot-sdk";
import {channelAccessToken} from "../env/line";
import LineClientRepositoryImpl from "../infra/repository/LineClientRepositoryImpl";

/**
 * リッチメニュー周りのDI
 * @param {DependencyContainer} container - DIコンテナ
 */
export default function lineClientModule(container: DependencyContainer) {
  container.register("LineClientRepository", {
    useClass: LineClientRepositoryImpl,
  });
  container.register("LineClientService", {
    useClass: LineClientServiceImpl,
  });
  container.register("LineClient", {
    useValue: new Client({
      channelAccessToken: channelAccessToken,
    }),
  });
}
