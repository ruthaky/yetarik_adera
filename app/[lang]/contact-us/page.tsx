export const dynamic = "force-static";
import React from "react";
import ContactSection from "./sections";
import { getDictionary } from "../dictionaries";

export default async function ContactPage({
  params,
}: {
  params: Promise<{ lang: string }>
}) {
  const lang = (await params).lang;
  const dictionary = await getDictionary(lang);
  return <ContactSection contactText={dictionary.contactPage} />;
}
