import type { Metadata } from "next";
import Script from "next/script";
import "@/styles/globals.scss";
import { LoadingClient } from "@/components/Loading/LoadingClient";

export const metadata: Metadata = {
  metadataBase: new URL("https://hiroshinohaco.com"),
  title: "ヒロシノハコ | 公式サイト",
  description:
    "果実味のあるコーヒーと、静かな時間を届けるヒロシノハコ公式サイト。",
  openGraph: {
    title: "ヒロシノハコ | 公式サイト",
    description:
      "苦味を抑え、豆本来の果実味を大切にしたコーヒー。ご縁でひろがるコーヒーの和。",
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
    title: "ヒロシノハコ | 公式サイト",
    description:
      "苦味を抑え、豆本来の果実味を大切にしたコーヒー。ご縁でひろがるコーヒーの和。",
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
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-DQH7KYWJPM"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-DQH7KYWJPM');
          `}
        </Script>
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
