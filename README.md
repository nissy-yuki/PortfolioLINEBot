# PortfolioLINEBot
ポートフォリオとなるLINEBot

## 環境
- express 4.18.2
- @line/bot-sdk 7.7.0
- firebase-admin 11.8.0
- firebase-functions 4.3.1

## Github Actions

## 更新手順
以下CLIはPortfolioLINEBotをカレントディレクトリとして実行する
### functions
```
$ firebase deploy --only functions
```

### hosting

### rich-menu
```
$ npx ts-node ./functions/src/ui/console/setRichMenu.ts
```
