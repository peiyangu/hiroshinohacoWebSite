import type { Metadata } from "next";
import "@/styles/globals.scss";

export const metadata: Metadata = {
  metadataBase: new URL("https://hiroshinohaco.jp"),
  title: "ヒロシノハコ | 公式サイト",
  description:
    "果実味のあるコーヒーと、静かな時間を届けるヒロシノハコ公式サイト。",
  openGraph: {
    title: "ヒロシノハコ | 公式サイト",
    description:
      "苦味を抑え、豆本来の果実味を大切にしたコーヒー。ご縁でひろがるコーヒーの和。",
    url: "https://hiroshinohaco.jp",
    siteName: "ヒロシノハコ",
    locale: "ja_JP",
    type: "website"
  }
};

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
