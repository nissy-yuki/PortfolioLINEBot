import {Article} from "./Article";

export interface ArticleRepository {
  findAll(): Promise<Article[]>;
}
