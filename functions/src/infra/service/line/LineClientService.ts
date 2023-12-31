export interface LineClientService {
  pushMessage(userId: string, message: string): Promise<void>;
  setDefaultRichMenu(): Promise<void>;
}
