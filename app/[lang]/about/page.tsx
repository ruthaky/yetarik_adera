export const dynamic = "force-static";
import React from "react";
import AboutPage from "./sections/aboutsection";
import { getDictionary } from "../dictionaries";

export default async function About({
  params,
}: {
  params: Promise<{ lang: string }>
}) {
  const lang = (await params).lang;
  const dictionary = await getDictionary(lang);
  return <AboutPage  />;
}
