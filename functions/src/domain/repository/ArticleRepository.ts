import {Article} from "../dataModel/Article";

export interface ArticleRepository {
  get(): Promise<Article[]>;
}
