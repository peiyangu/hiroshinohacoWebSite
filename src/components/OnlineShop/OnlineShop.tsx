import Image from "next/image";
import { FadeInSection } from "../common/FadeInSection";
import styles from "./OnlineShop.module.scss";

export const OnlineShop = () => {
  return (
    <section className={styles.onlineShop} id="online-shop">
      <FadeInSection>
        <div className={styles.inner}>
          <div className={styles.imageWrapper}>
            <Image
              src="/images/coffee/coffeebeans.png"
              alt="ネルドリップで淡れたコーヒー"
              width={640}
              height={800}
              className={styles.image}
            />
            <div className={styles.imageOverlay} aria-hidden="true">
              <span className={styles.overlayLabel}>— ONLINE SHOP</span>
              <p className={styles.overlayTitle}>
                Online<br />Shop
              </p>
            </div>
          </div>
          {/* 右: テキスト・ボタン */}
          <div className={styles.textSide}>
            <span className={styles.label}>— ONLINE SHOP</span>
            <h2 className={styles.title}>Online<br />Shop</h2>
            <p className={styles.description}>
              ヒロシノハコのコーヒー豆やオリジナルグッズは、
              オンラインショップでもお買い求めいただけます。
              ご自宅でも、お店の味をお楽しみください。
            </p>
            <div className={styles.actionSide}>
              <a
                href="https://hirohaco.base.shop/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.button}
              >
                <span className={styles.buttonText}>購入はこちら</span>
                <span className={styles.buttonArrow} aria-hidden="true">→</span>
              </a>
              <p className={styles.note}>BASE オンラインショップへ</p>
            </div>
          </div>
        </div>
      </FadeInSection>
    </section>
  );
};
