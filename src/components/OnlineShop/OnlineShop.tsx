import Image from "next/image";
import { FadeInSection } from "../common/FadeInSection";
import styles from "./OnlineShop.module.scss";

export const OnlineShop = () => {
  return (
    <section className={styles.onlineShop} id="online-shop">
      <FadeInSection>
        <div className={styles.inner}>
          {/* 左: 写真枚（TODO: 商品パッケージ・豆袋の写真に差し替える） */}
          <div className={styles.imageWrapper}>
            <Image
              src="/images/coffee/neldrip.jpg"
              alt="ネルドリップで淡れたコーヒー"
              width={640}
              height={800}
              className={styles.image}
            />
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
                href="https://hiroshinohaco.base.shop/"
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
