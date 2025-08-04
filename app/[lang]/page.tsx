

import Home from "./home";
import { getDictionary } from "./dictionaries";
export const dynamic = "force-static";

export default async function Page({
  params,
}: {
  params: Promise<{ lang: string }>
}) {
  const lang = (await params).lang;
  const dictionary = await getDictionary(lang);
  return (
    <>
      <Home
        heroTexts={dictionary.heroSection}

      />
    </>
  );
}
