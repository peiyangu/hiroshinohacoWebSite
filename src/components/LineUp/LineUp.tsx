import { FadeInSection } from "@/components/common/FadeInSection";
import styles from "./LineUp.module.scss";

const lineupItems = [
  { name: "果実味ブレンド", desc: "フルーティーな酸味と甘み" },
  { name: "シングルオリジン", desc: "季節ごとに変わる特別な一杯" },
  { name: "ネルドリップ", desc: "まろやかで深いコク" },
];

export function LineUp() {
  return (
    <section id="lineup" className={styles.lineup}>
      <FadeInSection className={styles.lineup__inner}>
        <div className={styles.lineup__header}>
          <h2 className={styles.lineup__title}>LINE UP</h2>
          <h3 className={styles.lineup__subtitle}>商品ラインナップ</h3>
        </div>
        <ul className={styles.lineup__list}>
          {lineupItems.map((item) => (
            <li key={item.name} className={styles.lineup__item}>
              <h4 className={styles.lineup__itemName}>{item.name}</h4>
              <p className={styles.lineup__itemDesc}>{item.desc}</p>
            </li>
          ))}
        </ul>
        <div className={styles.lineup__action}>
          <a
            className={styles.lineup__button}
            href="https://thebase.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            オンラインショップへ
          </a>
        </div>
      </FadeInSection>
    </section>
  );
}
