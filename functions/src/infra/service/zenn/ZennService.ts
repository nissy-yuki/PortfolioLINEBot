import {Article} from "../../../domain/dataModel/Article";

export interface ZennService {
  getArticles(): Promise<Article[]>;
}
