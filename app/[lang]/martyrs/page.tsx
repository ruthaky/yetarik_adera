import MartyrsPage from "./martyrspage";
import { getDictionary } from "../dictionaries";
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
      <MartyrsPage
        martyrsTexts={dictionary.martyrspage}

      />
    </>
  );
}


