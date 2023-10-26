export type Article = {
  id: string;
  platform: "Qiita" | "Zenn";
  tags: string[];
  title: string;
  body: string;
  createdAt: Date;
  updatedAt: Date;
  url: string;
};
