export const dynamic = "force-static";
import React from "react";
import AboutPage from "./sections/aboutsection";
import { getDictionary } from "../dictionaries";
import Footer from "@/app/shared/footer/footer";

export default async function About({
  params,
}: {
  params: Promise<{ lang: string }>
}) {
  const lang = (await params).lang;
  const dictionary = await getDictionary(lang);
  return (<><AboutPage aboutpageTexts={dictionary.aboutpage} />
   <Footer /></>)
}
