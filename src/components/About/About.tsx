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
                width={800}
                height={1200}
                sizes="(min-width: 768px) 50vw, 100vw"
                className={styles.about__image}
              />
              <div className={styles.about__imageOverlay} aria-hidden="true">
                <p className={styles.about__overlaySubtitle}>
                  慌ただしい毎日に、<br />
                  やさしい余白を。
                </p>
              </div>
            </div>
          </div>
          <div className={styles.about__textContainer}>
            <div className={styles.about__header}>
              <h2 className={styles.about__subtitle}>
                慌ただしい毎日に、<br />
                やさしい余白を。
              </h2>
            </div>
            <div className={styles.about__text}>
              <div className={styles.about__textBlock}>
                <p>
                  <span className={styles.about__lead}>苦いコーヒーが苦手な店主</span>
                  <br />
                  だからこそ、苦すぎずちゃんとおいしいと思える一杯を目指しています。
                </p>
                <p>
                  <span className={styles.about__lead}>毎日の暮らしの中で「また飲みたい」</span>
                  <br />そう思っていただけるコーヒーを届けたくて、<br />
                  一つひとつ焙煎しています。
                </p>
                <p>
                  <span className={styles.about__lead}>抽出には、昔ながらのネルドリップを</span>
                  <br />
                  手間はかかりますが、やわらかな口当たりと、
                  コーヒー本来の甘さを大切にしています。
                </p>
                <p>
                  <span className={styles.about__lead}>慌ただしい毎日に、ホッとひと息つける時間を</span>
                  <br />
                  コーヒーをきっかけに生まれるご縁を、これからも大切にしていきたいと思っています。
                </p>
              </div>
              <p className={styles.about__signature}>— ヒロシ（店主）</p>
            </div>
            <div className={styles.about__neldripBlock}>
              <h4 className={styles.about__neldripTitle}>ネルドリップとは</h4>
              <div className={styles.about__neldripText}>
                <p>
                  ネルドリップは、布のフィルターを使ってコーヒーを抽出する、昔ながらの淹れ方です。
                </p>
                <p>
                  ペーパーフィルターに比べて、コーヒーの油分や甘さを感じやすく、やわらかな口当たりになります。
                </p>
                <p>
                  手間はかかりますが、そのひと手間が、苦すぎず、やさしい口当たりの一杯につながると考えています。
                </p>
              </div>
            </div>
          </div>
        </div>
      </FadeInSection>
    </section>
  );
}
