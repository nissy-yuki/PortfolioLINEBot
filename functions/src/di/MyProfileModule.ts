import {DependencyContainer} from "tsyringe";
import MyProfileRepositoryImpl from "../infra/MyProfileRepositoryImpl";
import {MyProfileServiceImpl} from "../infra/profile/MyProfileServiceImple";

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
