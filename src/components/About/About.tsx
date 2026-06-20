import Image from "next/image";
import { FadeInSection } from "@/components/common/FadeInSection";
import styles from "./About.module.scss";

export function About() {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.about__bgText}>ABOUT</div>
      <FadeInSection className={styles.about__inner}>
        <div className={styles.about__content}>
          <div className={styles.about__imageFrame}>
            <div className={styles.about__imageWrapper}>
              <Image
                src="/images/coffee/neldrip.jpg"
                alt="コーヒー豆のイメージ"
                width={640}
                height={853}
                sizes="(min-width: 768px) 50vw, 100vw"
                className={styles.about__image}
              />
              <div className={styles.about__imageOverlay} aria-hidden="true">
                <p className={styles.about__overlayTitle}>ABOUT</p>
                <p className={styles.about__overlaySubtitle}>
                  慌ただしい毎日に、<br />
                  やさしい余白を。
                </p>
              </div>
            </div>
          </div>
          <div className={styles.about__textContainer}>
            <div className={styles.about__header}>
              <h2 className={styles.about__title}>ABOUT</h2>
              <h3 className={styles.about__subtitle}>
                慌ただしい毎日に、<br />
                やさしい余白を。
              </h3>
            </div>
            <div className={styles.about__text}>
              <p>
                苦いコーヒーが苦手な店主が焙煎する、<br />
                苦味が少なく、豆本来の果実味を感じるコーヒーと<br />
                古き良きネルドリップのありそうで無かった組み合わせ。
              </p>
              <p>
                慌ただしい毎日にホッと一息をする<br />
                コーヒーのある暮らしを<br />
                ご縁でひろがるコーヒーの和を大切にしています。
              </p>
            </div>
            <div className={styles.about__neldripBlock}>
              <h4 className={styles.about__neldripTitle}>ネルドリップとは</h4>
              <p className={styles.about__neldripText}>
                ネルドリップとは、フランネル（起毛した布）のフィルターを用いたコーヒーの抽出方法です。
                ペーパーと異なり布の目が細かいため、コーヒーオイルが適度に残り、
                まろやかで口当たりの柔らかい風味が生まれます。
                手間と時間がかかる分、丁寧に淹れた一杯ならではの深みと甘みをお楽しみいただけます。
              </p>
            </div>
          </div>
        </div>
      </FadeInSection>
    </section>
  );
}
