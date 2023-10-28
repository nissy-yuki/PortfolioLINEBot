import {Trivia} from "../dataModel/Trivia";

export interface TriviaRepository {
  fetchTrivia(): Promise<Trivia>;
}
