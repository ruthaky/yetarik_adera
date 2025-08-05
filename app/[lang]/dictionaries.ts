import "server-only";
import { notFound } from "next/navigation";

// 1. Define supported locales
const dictionaries: Record<"en" | "am", () => Promise<any>> = {
  en: () => import("./dictionaries/en.json").then((module) => module.default),
  am: () => import("./dictionaries/am.json").then((module) => module.default),
};

// 2. Type `locale` properly and handle unsupported ones
export const getDictionary = async (locale: string) => {
  if (!["en", "am"].includes(locale)) {
    notFound();
  }

  try {
    return await dictionaries[locale as "en" | "am"]();
  } catch (error) {
    notFound();
  }
};
