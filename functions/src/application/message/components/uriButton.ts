import {FlexButton} from "@line/bot-sdk";

export const uriButton = (label: string, uri: string): FlexButton => ({
  "type": "button",
  "action": {
    "type": "uri",
    "label": label,
    "uri": uri,
  },
});
