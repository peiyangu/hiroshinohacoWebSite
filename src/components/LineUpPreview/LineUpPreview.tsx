import Image from "next/image";
import Link from "next/link";
import { FadeInSection } from "@/components/common/FadeInSection";
import styles from "./LineUpPreview.module.scss";

const previewItems = [
  {
    nameEn: "Original Blend",
    name: "宝満おろし",
    tag: "BLEND",
    price: "¥1,300 / 100g",
    photo: "/images/LineUP/宝満おろし.jpg",
    href: "https://hirohaco.base.shop/items/135027079",
    highlight: "迷ったら、まずは宝満おろし",
  },
  {
    nameEn: "Ethiopia Tiere",
    name: "エチオピア チレ｜中煎り",
    tag: "SELECT",
    price: "¥1,200 / 100g",
    photo: "/images/LineUP/エチオピアチレ中煎り.jpg",
    href: "https://hirohaco.base.shop/items/100163460",
  },
  {
    nameEn: "Guatemala El Cerro",
    name: "グアテマラ エル・セロ｜中深煎り",
    tag: "SELECT",
    price: "¥1,200 / 100g",
    photo: "/images/LineUP/グアテマラエルセロ中深煎り.jpg",
    href: "https://hirohaco.base.shop/items/115122048",
  },
];

export function LineUpPreview() {
  return (
    <section className={styles.section} id="lineup-preview">
      <div className={styles.bgText} aria-hidden="true">BEANS</div>
      <FadeInSection className={styles.inner}>
        <div className={styles.header}>
          <div className={styles.headerText}>
            <span className={styles.label}>— COFFEE BEANS</span>
            <h2 className={styles.title}>Line Up</h2>
            <p className={styles.subtitle}>コーヒー豆 ラインナップ</p>
          </div>
          <Link href="/lineup" className={styles.viewAll}>
            すべて見る <span aria-hidden="true">→</span>
          </Link>
        </div>

        <ul className={styles.grid}>
          {previewItems.map((item) => (
            <li key={item.nameEn} className={styles.item}>
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.card}
              >
                <div className={styles.photoWrapper}>
                  <Image
                    src={item.photo}
                    alt={item.name}
                    fill
                    className={styles.photo}
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                  />
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
              </a>
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
