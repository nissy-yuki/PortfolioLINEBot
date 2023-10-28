import * as fs from "fs";
import {inject, injectable} from "tsyringe";
import {LineClientService} from "./LineClientService";
import {Client, RichMenu} from "@line/bot-sdk";
import {HOME_RICH_MENU} from "./richmenu";

@injectable()
/**
 * ラインクライアントサービスの実装
 */
export default class LineClientServiceImpl implements LineClientService {
  /**
   * @constructor
   */
  constructor(
    @inject("LineClient")
    private readonly lineClient: Client
  ) {}
  /**
   * リッチメニューを設定する
   */
  async setDefaultRichMenu(): Promise<void> {
    const richMenuCreater = new RichMenuCreater(
      this.lineClient,
      HOME_RICH_MENU,
      "./functions/img/richmenu.png"
    );
    await richMenuCreater.applyDefaultRichMenu();
  }
}

/**
 * リッチメニューを作成するクラス
 */
class RichMenuCreater {
  #client: Client;
  #richmenu: RichMenu;
  #richMenuId = "";
  #imagePath = "";

  /**
   * @constructor
   * @param {Client} client - LINEクライアント
   * @param {RichMenu} richmenu - リッチメニュー
   * @param {string} imagePath - リッチメニューの画像パス
   */
  constructor(client: Client, richmenu: RichMenu, imagePath: string) {
    this.#client = client;
    this.#richmenu = richmenu;
    this.#imagePath = imagePath;
  }

  /**
   * デフォルトのリッチメニューを適用する
   */
  async applyDefaultRichMenu() {
    await this.#createRichMenu();
    await this.#setRichMenuImage();
    await this.#setDefaultRichMenu();
  }

  /**
   * リッチメニューを作成する
   */
  async #createRichMenu() {
    await this.#client.createRichMenu(this.#richmenu).then((richMenuId) => {
      this.#richMenuId = richMenuId;
    });
  }

  /**
   * リッチメニューに画像をアップロードして添付する
   */
  async #setRichMenuImage() {
    await this.#client.setRichMenuImage(
      this.#richMenuId,
      fs.createReadStream(this.#imagePath)
    );
  }

  /**
   * デフォルトのリッチメニューを設定する
   */
  async #setDefaultRichMenu() {
    await this.#client.setDefaultRichMenu(this.#richMenuId);
  }
}

