import {Article} from "../../../domain/Article";

export interface ZennService {
  getArticles(): Promise<Article[]>;
}
