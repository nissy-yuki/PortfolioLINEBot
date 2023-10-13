import {Article} from "../../domain/Article";
import {HttpService} from "../HttpService";

export interface QiitaService extends HttpService {
  accessToken: string;
  getArticles(): Promise<Article[]>;
}
