import {GitHubRepo} from "../dataModel/GitHub";

export interface GitHubRepository {
  fetchRepositories(): Promise<GitHubRepo[]>;
}
