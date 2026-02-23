import { FadeInSection } from "../common/FadeInSection";
import styles from "./News.module.scss";

const newsData = [
  {
    id: 1,
    date: "2026.02.20",
    title: "春の新作ブレンド「Spring Breeze」販売開始のお知らせ",
  },
  {
    id: 2,
    date: "2026.02.10",
    title: "3月の営業日と臨時休業について",
  },
  {
    id: 3,
    date: "2026.01.25",
    title: "オンラインショップでのギフトラッピング対応開始",
  },
];

export const News = () => {
  return (
    <section className={styles.news} id="news">
      <FadeInSection>
        <div className={styles.inner}>
          <h2 className={styles.title}>News</h2>
          <p className={styles.subtitle}>お知らせ</p>
          <ul className={styles.list}>
            {newsData.map((item) => (
              <li key={item.id} className={styles.item}>
                <span className={styles.date}>{item.date}</span>
                <span className={styles.newsTitle}>{item.title}</span>
              </li>
            ))}
          </ul>
        </div>
      </FadeInSection>
    </section>
  );
};
