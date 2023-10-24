import {DependencyContainer} from "tsyringe";
import {ArticleRepositoryImpl} from "../infra/ArticleRepositoryImpl";
import {QiitaServiceImpl} from "../infra/qiita/QiitaServiceImpl";

/**
 * 記事関連のDI
 * @param {DependencyContainer} container - DIコンテナ
 */
export default function articleModule(container: DependencyContainer) {
  container.register("ArticleRepository", {
    useClass: ArticleRepositoryImpl,
  });
  container.register("QiitaService", {
    useClass: QiitaServiceImpl,
  });
}

