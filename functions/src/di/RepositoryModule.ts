import {DependencyContainer} from "tsyringe";
import GitHubRepositoryImpl from "../infra/repository/GitHubRepositoryImpl";
import GitHubServiceImpl from "../infra/service/github/GitHubServiceImpl";

/**
 * リポジトリ周りのDI
 * @param {DependencyContainer} container - DIコンテナ
 */
export default function repositoryModule(container: DependencyContainer) {
  container.register("GitHubRepository", {
    useClass: GitHubRepositoryImpl,
  });
  container.register("GitHubService", {
    useClass: GitHubServiceImpl,
  });
}
