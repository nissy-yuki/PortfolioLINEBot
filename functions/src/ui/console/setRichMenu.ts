import "reflect-metadata";
import {container} from "tsyringe";
import lineClientModule from "../../di/LineClientModule";
import SetRichMenuUseCase from "../../application/SetRichMenuUseCase";

const main = async () => {
  lineClientModule(container);
  const usecase = container.resolve(SetRichMenuUseCase);
  await usecase.execute().then(() => {
    console.log("success");
  }).catch((e) => {
    console.log(e);
  });
};

main();
