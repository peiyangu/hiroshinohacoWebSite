import { FadeInSection } from "../common/FadeInSection";
import { NewsListClient } from "./NewsListClient";
import styles from "./News.module.scss";

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
          <NewsListClient />
          <div className={styles.footer}>
            <a
              href="https://www.instagram.com/hiroshi.no.haco_/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.instagramLink}
            >
              最新情報はInstagramで確認する
              <span aria-hidden="true"> →</span>
            </a>
          </div>
        </div>
      </FadeInSection>
    </section>
  );
};
