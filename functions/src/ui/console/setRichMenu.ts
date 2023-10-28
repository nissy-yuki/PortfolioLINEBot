import "reflect-metadata";
import {container} from "tsyringe";
import richMenuModule from "../../di/RichMenuModule";
import SetRichMenuUseCase from "../../application/SetRichMenuUseCase";

const main = async () => {
  richMenuModule(container);
  const usecase = container.resolve(SetRichMenuUseCase);
  await usecase.execute().then(() => {
    console.log("success");
  }).catch((e) => {
    console.log(e);
  });
};

main();
