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
  return {
    title: `${item.name} | ヒロシノハコ`,
    description: item.desc,
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
                  {item.soldOut && <span className={styles.soldOut}>SOLD OUT</span>}
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

              {item.soldOut ? (
                <span className={`${styles.purchaseButton} ${styles["purchaseButton--disabled"]}`}>
                  SOLD OUT
                </span>
              ) : (
                <a
                  className={styles.purchaseButton}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  BASE で購入する
                  <span aria-hidden="true">→</span>
                </a>
              )}

              <p className={styles.leadDesc}>{item.desc}</p>
            </div>
          </div>

          <div className={styles.detail}>
            {item.detail.map((section, index) => (
              <div className={styles.detailSection} key={index}>
                {section.heading && (
                  <h2 className={styles.detailHeading}>{section.heading}</h2>
                )}
                {section.paragraphs.map((paragraph, pIndex) => (
                  <p className={styles.detailParagraph} key={pIndex}>
                    {paragraph.split("\n").map((line, lIndex, arr) => (
                      <span key={lIndex}>
                        {line}
                        {lIndex < arr.length - 1 && <br />}
                      </span>
                    ))}
                  </p>
                ))}
              </div>
            ))}
          </div>

          <div className={styles.bottomAction}>
            {item.soldOut ? (
              <span className={`${styles.purchaseButton} ${styles["purchaseButton--disabled"]}`}>
                SOLD OUT
              </span>
            ) : (
              <a
                className={styles.purchaseButton}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                BASE で購入する
                <span aria-hidden="true">→</span>
              </a>
            )}
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
