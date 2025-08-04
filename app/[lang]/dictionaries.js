import "server-only";
import { notFound } from "next/navigation";
const dictionaries = {
  en: () => import("./dictionaries/en.json").then((module) => module.default),
  am: () => import("./dictionaries/am.json").then((module) => module.default),
};

export const getDictionary = async (locale) => {
  try {
    return await dictionaries[locale]();
  } catch (error) {
    notFound();
  }
};
