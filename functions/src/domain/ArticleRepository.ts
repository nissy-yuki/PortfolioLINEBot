import {Article} from "./Article";

export interface ArticleRepository {
    get(): Promise<Article[]>;
}
