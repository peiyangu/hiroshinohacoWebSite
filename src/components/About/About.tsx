import Image from "next/image";
import { FadeInSection } from "@/components/common/FadeInSection";
import styles from "./About.module.scss";

export function About() {
  return (
    <section id="about" className={styles.about}>
      <FadeInSection className={styles.about__inner}>
        <div className={styles.about__header}>
          <h2 className={styles.about__title}>ABOUT</h2>
          <h3 className={styles.about__subtitle}>
            慌ただしい毎日に、
            <br />
            やさしい余白を。
          </h3>
        </div>
        <div className={styles.about__content}>
          <div className={styles.about__imageWrapper}>
            <Image
              src="/images/coffee/coffee-beans.svg"
              alt="コーヒー豆のイメージ"
              width={640}
              height={420}
              sizes="(min-width: 768px) 50vw, 100vw"
            />
          </div>
          <div className={styles.about__text}>
            <p>
              苦いコーヒーが苦手な店主が焙煎する、
              苦味が少なく、豆本来の果実味を感じるコーヒーと古き良きネルドリップのありそうで無かった組み合わせ。
            </p>
            <p>
              慌ただしい毎日にホッと一息をする
              コーヒーのある暮らしを
              ご縁でひろがるコーヒーの和を大切にしています。
            </p>
          </div>
        </div>
      </FadeInSection>
    </section>
  );
}
