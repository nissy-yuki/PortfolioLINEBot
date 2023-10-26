import {Article} from "../../../domain/dataModel/Article";

export interface QiitaService{
  getArticles(): Promise<Article[]>;
}
