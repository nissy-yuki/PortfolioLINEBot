import {container} from "tsyringe";
import {MyProfileRepositoryImpl} from "../infra/MyProfileRepositoryImpl";

/**
 * プロフィール関連のDI
 */
export function profileModule() {
  container.register("MyProfileRepository", {
    useClass: MyProfileRepositoryImpl,
  });
}
