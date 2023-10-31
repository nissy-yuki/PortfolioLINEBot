import {inject, injectable} from "tsyringe";
import {GitHubRepository} from "../domain/repository/GitHubRepository";
import {Message} from "@line/bot-sdk";
import createRepositoriesMessage from "./message/createRepositoriesMessage";

@injectable()
/**
 * リポジトリのメッセージを取得するユースケース
 */
export default class FetchRepositoriesMessageUseCase {
  /**
   * @constructor
   */
  constructor(
    @inject("GitHubRepository")
    private readonly gitHubRepository: GitHubRepository,
  ) {}
  /**
   * リポジトリのメッセージを取得する
   */
  async execute(): Promise<Message> {
    const repos = await this.gitHubRepository.fetchRepositories();
    return createRepositoriesMessage(repos);
  }
}
