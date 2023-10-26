import {Article} from "../../../domain/Article";

export interface QiitaService{
  getArticles(): Promise<Article[]>;
}
