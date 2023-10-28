import {DependencyContainer} from "tsyringe";
import TriviaRepositoryImpl from "../infra/repository/TriviaRepositoryImpl";
import ScrapBoxServiceImpl from "../infra/service/scrapbox/ScrapBoxServiceImpl";

/**
 * 雑学周りのDI
 * @param {DependencyContainer} container - DIコンテナ
 */
export default function triviaModule(container: DependencyContainer) {
  container.register("TriviaRepository", {
    useClass: TriviaRepositoryImpl,
  });
  container.register("ScrapBoxService", {
    useClass: ScrapBoxServiceImpl,
  });
}
