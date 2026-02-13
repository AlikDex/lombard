import { promises as fs } from "fs";
import "server-only";
import { IConfig } from "./IConfig";

export const getConfig = async () => {
  //const file = await import(process.cwd() + publicFolder + "/config/config.json");
  const file = await fs.readFile(process.cwd() + "/config/config.json", "utf8");
  const data: IConfig = JSON.parse(file);
  return data;
};
// export const getConfig = cache(async () => {
//   const publicFolder = process.env.NODE_ENV === "development" ? "./public" : "";
//   //const file = await import(process.cwd() + publicFolder + "/config/config.json");
//   const file = await fs.readFile(process.cwd() + "/config/config.json", "utf8");
//   const data: IConfig = JSON.parse(file);
//   return data;
// });
