import {DependencyContainer} from "tsyringe";
import MyProfileRepositoryImpl from "../infra/repository/MyProfileRepositoryImpl";
import {MyProfileServiceImpl} from "../infra/service/profile/MyProfileServiceImple";

/**
 * プロフィール周りのDI
 * @param {DependencyContainer} container - DIコンテナ
 */
export default function myProfileModule(container: DependencyContainer) {
  container.register("MyProfileRepository", {
    useClass: MyProfileRepositoryImpl,
  });
  container.register("MyProfileService", {
    useClass: MyProfileServiceImpl,
  });
}
