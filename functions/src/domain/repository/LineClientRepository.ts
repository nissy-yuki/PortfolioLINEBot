export interface LineClientRepository {
  pushMessage(userId: string, message: string): Promise<void>;
  setDefaultRichMenu(): Promise<void>;
}
