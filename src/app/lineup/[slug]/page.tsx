import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Header } from "@/components/Header/Header";
import { Footer } from "@/components/Footer/Footer";
import { lineupItems, getLineupItemBySlug } from "@/data/lineupItems";
import styles from "./page.module.scss";

export function generateStaticParams() {
  return lineupItems.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const item = getLineupItemBySlug(slug);
  if (!item) return {};
  const title = `${item.name} | ヒロシノハコ`;
  const image = item.photo ?? "/ogp.jpg";
  return {
    title,
    description: item.desc,
    alternates: {
      canonical: `/lineup/${item.slug}/`,
    },
    openGraph: {
      title,
      description: item.desc,
      url: `/lineup/${item.slug}/`,
      images: [{ url: image, width: 1200, height: 1200, alt: item.name }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: item.desc,
      images: [image],
    },
  };
}

export default async function LineupDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = getLineupItemBySlug(slug);

  if (!item) {
    notFound();
  }

  return (
    <>
      <Header />
      <main className={styles.main}>
        <div className={styles.inner}>
          <Link href="/lineup" className={styles.back}>
            <span aria-hidden="true">←</span> Line Up 一覧へ
          </Link>

          <div className={styles.layout}>
            <div className={styles.photoCol}>
              <div className={styles.photoWrapper}>
                {item.photo ? (
                  <Image
                    src={item.photo}
                    alt={item.name}
                    fill
                    className={styles.photo}
                    sizes="(min-width: 1024px) 45vw, 100vw"
                    priority
                  />
                ) : (
                  <div className={styles.photoPlaceholder} />
                )}
                <div className={styles.photoOverlay}>
                  <span className={styles.tag}>{item.tag}</span>
                </div>
              </div>
            </div>

            <div className={styles.infoCol}>
              {item.highlight && (
                <span className={styles.highlight}>{item.highlight}</span>
              )}
              <p className={styles.nameEn}>{item.nameEn}</p>
              <h1 className={styles.name}>{item.name}</h1>
              <p className={styles.price}>{item.price}</p>

              <a
                className={styles.purchaseButton}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                BASE で購入する
                <span aria-hidden="true">→</span>
              </a>

              <p className={styles.leadDesc}>{item.desc}</p>
            </div>
          </div>

          <div
            className={styles.detail}
            dangerouslySetInnerHTML={{ __html: item.detail }}
          />

          <div className={styles.bottomAction}>
            <a
              className={styles.purchaseButton}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              BASE で購入する
              <span aria-hidden="true">→</span>
            </a>
            <Link href="/lineup" className={styles.backSecondary}>
              他のコーヒー豆を見る
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
