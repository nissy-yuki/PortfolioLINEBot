import {DependencyContainer} from "tsyringe";
import {accessToken} from "../env/notion";
import MyProfileRepositoryImpl from "../infra/repository/MyProfileRepositoryImpl";
import NotionServiceImpl from "../infra/service/notion/NotionServiceImpl";

/**
 * プロフィール周りのDI
 * @param {DependencyContainer} container - DIコンテナ
 */
export default function myProfileModule(container: DependencyContainer) {
  container.register("MyProfileRepository", {
    useClass: MyProfileRepositoryImpl,
  });
  container.register("NotionService", {
    useClass: NotionServiceImpl,
  });
  container.register("NotionAccessToken", {
    useValue: accessToken,
  });
}
