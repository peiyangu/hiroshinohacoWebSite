import { FadeInSection } from "../common/FadeInSection";
import styles from "./Menu.module.scss";

const menuCategories = [
  {
    id: "coffee",
    titleEn: "Coffee",
    titleJa: "コーヒー",
    items: [
      { name: "ヒロシノハコ ブレンド", price: "¥500", note: "果実味を感じる看板ブレンド" },
      { name: "シングルオリジン", price: "¥600〜", note: "季節ごとに変わる産地の個性" },
      { name: "カフェラテ", price: "¥550", note: "エスプレッソとミルクの調和" },
    ],
  },
  {
    id: "others",
    titleEn: "Others",
    titleJa: "その他",
    items: [
      { name: "自家製レモネード", price: "¥500", note: "国産レモンの爽やかな一杯" },
      { name: "季節の焼き菓子", price: "¥350〜", note: "コーヒーに合わせた日替わり" },
    ],
  },
];

export const Menu = () => {
  return (
    <section className={styles.menu} id="menu">
      <FadeInSection>
        <div className={styles.inner}>
          <div className={styles.header}>
            <h2 className={styles.title}>Menu</h2>
            <p className={styles.subtitle}>店舗メニュー</p>
          </div>
          <div className={styles.grid}>
            {menuCategories.map((cat) => (
              <div key={cat.id} className={styles.category}>
                <div className={styles.categoryHeader}>
                  <h3 className={styles.categoryTitleEn}>{cat.titleEn}</h3>
                  <span className={styles.categoryTitleJa}>{cat.titleJa}</span>
                </div>
                <ul className={styles.list}>
                  {cat.items.map((item) => (
                    <li key={item.name} className={styles.item}>
                      <div className={styles.itemMain}>
                        <span className={styles.name}>{item.name}</span>
                        <span className={styles.dots}></span>
                        <span className={styles.price}>{item.price}</span>
                      </div>
                      <p className={styles.note}>{item.note}</p>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className={styles.footer}>
            <a href="/menu" className={styles.button}>
              メニュー詳細を見る
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </FadeInSection>
    </section>
  );
};
