import {RestEndpointMethodTypes, restEndpointMethods} from "@octokit/plugin-rest-endpoint-methods";
import {GitHubService} from "./GitHubService";
import {Octokit} from "@octokit/core";
import {Api} from "@octokit/plugin-rest-endpoint-methods/dist-types/types";
import {githubToken} from "../../../env/github";

type ReposGetResponseData = RestEndpointMethodTypes["repos"]["listForAuthenticatedUser"]["response"]["data"];

/**
 * GitHubServiceの実装クラス
 */
export default class GitHubServiceImpl implements GitHubService {
  octokit: Octokit & Api;
  /**
   * @constructor
   */
  constructor() {
    const MyOctokit = Octokit.plugin(restEndpointMethods);
    this.octokit = new MyOctokit({auth: githubToken});
  }
  /**
   * リポジトリ情報を取得する
   * @return {Promise<ReposGetResponseData>}
   */
  async fetchRepositories(): Promise<ReposGetResponseData> {
    const {data} = await this.octokit.rest.repos.listForAuthenticatedUser(
      {visibility: "public", affiliation: "owner", sort: "created"}
    );
    return data;
  }
}
