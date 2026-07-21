import type { Metadata } from "next";
import "@/styles/globals.scss";
import { LoadingClient } from "@/components/Loading/LoadingClient";

const JSON_LD = {
  "@context": "https://schema.org",
  "@type": "CafeOrCoffeeShop",
  name: "ヒロシノハコ",
  description:
    "福岡県筑紫野市（太宰府エリア）にある自家焙煎コーヒー店。ネルドリップで丁寧に淹れる一杯と、コーヒー豆・ドリップバッグを取り扱っています。",
  image: "https://hiroshinohaco.com/ogp.jpg",
  url: "https://hiroshinohaco.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "原633-18",
    addressLocality: "筑紫野市",
    addressRegion: "福岡県",
    postalCode: "818-0005",
    addressCountry: "JP",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "12:00",
      closes: "19:00",
    },
  ],
  sameAs: ["https://www.instagram.com/hiroshi.no.haco_/"],
};

const SEO_TITLE = "ヒロシノハコ | 福岡県筑紫野市の自家焙煎コーヒー店・ネルドリップ";
const SEO_DESCRIPTION =
  "福岡県筑紫野市（太宰府エリア）にある小さな自家焙煎コーヒー店、ヒロシノハコの公式サイト。苦みを抑えネルドリップで丁寧に淹れる一杯と、コーヒー豆・ドリップバッグを取り扱っています。";

export const metadata: Metadata = {
  metadataBase: new URL("https://hiroshinohaco.com"),
  title: SEO_TITLE,
  description: SEO_DESCRIPTION,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: SEO_TITLE,
    description: SEO_DESCRIPTION,
    url: "https://hiroshinohaco.com",
    siteName: "ヒロシノハコ",
    locale: "ja_JP",
    type: "website",
    images: [
      {
        url: "/ogp.jpg",
        width: 1200,
        height: 630,
        alt: "ヒロシノハコ",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SEO_TITLE,
    description: SEO_DESCRIPTION,
    images: ["/ogp.jpg"],
  },
};

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="ja" suppressHydrationWarning>
      <head>
        {/* hydration より前に実行し、2回目以降のローディング表示を CSS で即時抑制 */}
        <script dangerouslySetInnerHTML={{ __html: `try{if(sessionStorage.getItem('hasLoaded'))document.documentElement.classList.add('has-loaded')}catch(e){}` }} />
        {/* Google tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-DQH7KYWJPM" />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

gtag('config', 'G-DQH7KYWJPM');`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }}
        />
      </head>
      <body
        style={
          {
            "--noise-bg": `url(${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/images/background/noise.png)`,
          } as React.CSSProperties
        }
      >
        <LoadingClient />
        {children}
      </body>
    </html>
  );
}
