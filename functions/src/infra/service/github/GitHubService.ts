import {RestEndpointMethodTypes} from "@octokit/plugin-rest-endpoint-methods";

export interface GitHubService {
  fetchRepositories(): Promise<RestEndpointMethodTypes["repos"]["listForAuthenticatedUser"]["response"]["data"]>;
}
