import { FadeInSection } from "../common/FadeInSection";
import styles from "./Menu.module.scss";

export const Menu = () => {
  return (
    <section className={styles.menu} id="menu">
      <FadeInSection>
        <div className={styles.inner}>
          <h2 className={styles.title}>Menu</h2>
          <p className={styles.subtitle}>店舗メニュー</p>
          <div className={styles.content}>
            <div className={styles.category}>
              <h3 className={styles.categoryTitle}>Coffee</h3>
              <ul className={styles.list}>
                <li className={styles.item}>
                  <span className={styles.name}>ブレンドコーヒー</span>
                  <span className={styles.price}>¥500</span>
                </li>
                <li className={styles.item}>
                  <span className={styles.name}>シングルオリジン</span>
                  <span className={styles.price}>¥600〜</span>
                </li>
                <li className={styles.item}>
                  <span className={styles.name}>カフェラテ</span>
                  <span className={styles.price}>¥550</span>
                </li>
              </ul>
            </div>
            <div className={styles.category}>
              <h3 className={styles.categoryTitle}>Others</h3>
              <ul className={styles.list}>
                <li className={styles.item}>
                  <span className={styles.name}>自家製レモネード</span>
                  <span className={styles.price}>¥500</span>
                </li>
                <li className={styles.item}>
                  <span className={styles.name}>季節の焼き菓子</span>
                  <span className={styles.price}>¥350〜</span>
                </li>
              </ul>
            </div>
          </div>
          <div className={styles.buttonWrapper}>
            <a href="/menu" className={styles.button}>
              メニュー詳細を見る
            </a>
          </div>
        </div>
      </FadeInSection>
    </section>
  );
};
