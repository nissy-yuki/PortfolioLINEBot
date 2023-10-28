import {inject, injectable} from "tsyringe";
import {TriviaRepository} from "../../domain/repository/TriviaRepository";
import {ScrapBoxService} from "../service/scrapbox/ScrapBoxService";
import {Trivia} from "../../domain/dataModel/Trivia";
import {Line} from "../dataModel/ScrapBox";

@injectable()
/**
 * 雑学リポジトリの実装
 */
export default class TriviaRepositoryImpl implements TriviaRepository {
  /**
   * @constructor
   */
  constructor(
    @inject("ScrapBoxService")
    private readonly scrapBoxService: ScrapBoxService,
  ) {}
  /**
   * 雑学を取得する
   * @return {Promise<Trivia>}
   */
  async fetchTrivia(): Promise<Trivia> {
    const scrapBoxPage = await this.scrapBoxService.fetchRandomPage();
    scrapBoxPage.lines.shift();
    const trivia: Trivia = {
      title: scrapBoxPage.title,
      description: scrapBoxPage.lines.map((line: Line) => line.text).join("\n"),
      createdAt: new Date(scrapBoxPage.created * 1000),
    };
    return trivia;
  }
}
