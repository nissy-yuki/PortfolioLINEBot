import {inject, injectable} from "tsyringe";
import {GitHubRepository} from "../../domain/repository/GitHubRepository";
import {GitHubService} from "../service/github/GitHubService";
import {GitHubRepo} from "../../domain/dataModel/GitHub";

@injectable()
/**
 * GitHubRepositoryの実装
 */
export default class GitHubRepositoryImpl implements GitHubRepository {
  /**
   * @constructor
   */
  constructor(
    @inject("GitHubService")
    private readonly gitHubService: GitHubService,
  ) {}
  /**
   * リポジトリ情報を取得する
   * @return {Promise<GitHubRepo[]>}
   */
  async fetchRepositories(): Promise<GitHubRepo[]> {
    const repos = await this.gitHubService.fetchRepositories();
    return repos.map((repo) => {
      return {
        id: repo.id,
        name: repo.name,
        description: repo.description || "",
        language: repo.language || "",
        html_url: repo.html_url,
        created_at: new Date(repo.created_at || ""),
        updated_at: new Date(repo.updated_at || ""),
      };
    });
  }
}
