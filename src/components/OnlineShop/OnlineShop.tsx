import { FadeInSection } from "../common/FadeInSection";
import styles from "./OnlineShop.module.scss";

export const OnlineShop = () => {
  return (
    <section className={styles.onlineShop} id="online-shop">
      <FadeInSection>
        <div className={styles.inner}>
          <h2 className={styles.title}>Online Shop</h2>
          <p className={styles.subtitle}>オンラインショップ</p>
          <p className={styles.description}>
            ヒロシノハコのコーヒー豆やオリジナルグッズは、
            <br />
            オンラインショップでもお買い求めいただけます。
            <br />
            ご自宅でも、お店の味をお楽しみください。
          </p>
          <div className={styles.buttonWrapper}>
            <a
              href="https://hiroshinohaco.base.shop/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.button}
            >
              購入はこちら
            </a>
          </div>
        </div>
      </FadeInSection>
    </section>
  );
};
