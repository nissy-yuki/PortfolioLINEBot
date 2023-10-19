import {container} from "tsyringe";
import {ArticleRepositoryImpl} from "../infra/ArticleRepositoryImpl";

/**
 * 記事関連のDI
 */
export function articleModule() {
  container.register("ArticleRepository", {
    useClass: ArticleRepositoryImpl,
  });
}

