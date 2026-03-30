import { FadeInSection } from "../common/FadeInSection";
import styles from "./News.module.scss";

const newsData = [
  {
    id: 1,
    date: "2026.02.20",
    category: "NEW",
    title: "春の新作ブレンド「Spring Breeze」販売開始のお知らせ",
  },
  {
    id: 2,
    date: "2026.02.10",
    category: "INFO",
    title: "3月の営業日と臨時休業について",
  },
  {
    id: 3,
    date: "2026.01.25",
    category: "SHOP",
    title: "オンラインショップでのギフトラッピング対応開始",
  },
];

export const News = () => {
  return (
    <section className={styles.news} id="news">
      <div className={styles.bgText} aria-hidden="true">NEWS</div>
      <FadeInSection>
        <div className={styles.inner}>
          <div className={styles.header}>
            <span className={styles.label}>— NEWS</span>
            <h2 className={styles.title}>News</h2>
            <p className={styles.subtitle}>お知らせ</p>
          </div>
          <ul className={styles.list}>
            {newsData.map((item) => (
              <li key={item.id} className={styles.item}>
                <span className={styles.itemNumber} aria-hidden="true">
                  {String(item.id).padStart(2, "0")}
                </span>
                <div className={styles.itemBody}>
                  <div className={styles.meta}>
                    <span className={styles.date}>{item.date}</span>
                    <span className={styles.category}>{item.category}</span>
                  </div>
                  <p className={styles.newsTitle}>{item.title}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </FadeInSection>
    </section>
  );
};
