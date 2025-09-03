import type { Metadata } from "next";

import "../globals.css";
import Navbar  from "@/app/shared/navbar/navbar";
import { Noto_Serif_Ethiopic } from "next/font/google";
import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import Script from "next/script";

const notoSerifEthiopic = Noto_Serif_Ethiopic({
  weight: ["400"], // normal
  subsets: ["ethiopic"], // supports Amharic, Tigrinya, etc.
  display: "swap",
  variable: "--font-noto-ethiopic",
});

export const metadata: Metadata = {
  icons: {
    icon: '/asset/surgelogo.png',
  },
  title: "Yetarik Adera",
  description: "Yetarik Adera",
  openGraph: {
    title: "Yetarik Adera",
    description: "yetarik adera description",
    url: "https://surgecrops.com",
    siteName: "Yetarik Adera",
    images: [
      {
        url: '/asset/OG.png', // Replace this with your image name
        width: 1200,
        height: 630,
        alt: "yetarik adera description", // Optional alt text
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    images: [
      {
        url: '/asset/OG.png', // Replace this with your image name
        width: 1200,
        height: 630,
        alt: "yetarik adera description", // Optional alt text
      },
    ],
    creator: "@yetarikadera",
    site: "surgecrops.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <meta property="og:image" content="https://i.postimg.cc/xjHtX95b/OG.png" />
      <meta property="og:image:type" content="image/png" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content="Yetarik Adera - To honor the legacy and sacrifice of the Imperial Ethiopian government officials who perished at the hands of the Derg, and their colleagues who served in the administration of Emperor Haile Selassie I." />
      <meta property="og:image:url" content="https://i.postimg.cc/xjHtX95b/OG.png" />
      <meta property="og:image:secure_url" content="https://i.postimg.cc/xjHtX95b/OG.png" />
      <meta property="og:image:type" content="image/png" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content="Yetarik Adera - To honor the legacy and sacrifice of the Imperial Ethiopian government officials who perished at the hands of the Derg, and their colleagues who served in the administration of Emperor Haile Selassie I." />
      <meta property="og:image:url" content="https://i.postimg.cc/xjHtX95b/OG.png" />
      <Script id="microsoft-clarity" strategy="afterInteractive">
        {`
    (function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "po18vi2fr8");
  `}
      </Script>
      <Script id="google-analytics" strategy="afterInteractive">
        {
          `<script async src="https://www.googletagmanager.com/gtag/js?id=G-ZJDYF9BQS6"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-ZJDYF9BQS6');
</script> `
        }
      </Script>

      <MantineProvider>
        <div className={`${notoSerifEthiopic.variable} font-notoSerifEthiopic`}>
          <Navbar />
          {children}
        </div>
      </MantineProvider>
    </>
  );
}
