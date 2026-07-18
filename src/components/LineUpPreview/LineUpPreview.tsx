import Image from "next/image";
import Link from "next/link";
import { FadeInSection } from "@/components/common/FadeInSection";
import { lineupItems } from "@/data/lineupItems";
import styles from "./LineUpPreview.module.scss";

const previewSlugs = ["ethiopia-tiere", "homan-oroshi", "guatemala-el-cerro"] as const;

const previewItems = previewSlugs
  .map((slug) => lineupItems.find((item) => item.slug === slug))
  .filter((item): item is (typeof lineupItems)[number] => Boolean(item))
  .map((item) => ({
    ...item,
    featured: item.slug === "homan-oroshi",
  }));

export function LineUpPreview() {
  return (
    <section className={styles.section} id="lineup-preview">
      <div className={styles.bgText} aria-hidden="true">BEANS</div>
      <FadeInSection className={styles.inner}>
        <div className={styles.header}>
          <div className={styles.headerText}>
            <h2 className={styles.title}>Line Up</h2>
            <p className={styles.subtitle}>コーヒー豆 ラインナップ</p>
          </div>
          <Link href="/lineup" className={styles.viewAll}>
            すべて見る <span aria-hidden="true">→</span>
          </Link>
        </div>

        <ul className={styles.grid}>
          {previewItems.map((item) => (
            <li
              key={item.nameEn}
              className={`${styles.item} ${item.featured ? styles.itemFeatured : ""}`}
            >
              <Link href={`/lineup/${item.slug}/`} className={styles.card}>
                <div className={styles.photoWrapper}>
                  {item.photo && (
                    <Image
                      src={item.photo}
                      alt={item.name}
                      fill
                      className={styles.photo}
                      sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                    />
                  )}
                  <span className={styles.tag}>{item.tag}</span>
                </div>
                <div className={styles.body}>
                  {item.highlight && (
                    <p className={styles.highlight}>{item.highlight}</p>
                  )}
                  <p className={styles.nameEn}>{item.nameEn}</p>
                  <p className={styles.name}>{item.name}</p>
                  <p className={styles.price}>{item.price}</p>
                </div>
              </Link>
            </li>
          ))}
        </ul>

        <div className={styles.action}>
          <Link href="/lineup" className={styles.button}>
            コーヒー豆をすべて見る
            <span aria-hidden="true"> →</span>
          </Link>
        </div>
      </FadeInSection>
    </section>
  );
}
