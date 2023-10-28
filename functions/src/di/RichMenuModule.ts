import {DependencyContainer} from "tsyringe";
import RichMenuRepositoryImpl from "../infra/repository/RichMenuRepositoryImpl";
import LineClientServiceImpl from "../infra/service/line/LineClientServiceImpl";
import {Client} from "@line/bot-sdk";

/**
 * リッチメニュー周りのDI
 * @param {DependencyContainer} container - DIコンテナ
 */
export default function richMenuModule(container: DependencyContainer) {
  container.register("RichMenuRepository", {
    useClass: RichMenuRepositoryImpl,
  });
  container.register("LineClientService", {
    useClass: LineClientServiceImpl,
  });
  container.register("LineClient", {
    useValue: new Client({
      channelAccessToken: "",
    }),
  });
}
