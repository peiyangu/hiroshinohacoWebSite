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
                苦いコーヒーが苦手な店主だからこそ、<br />
                苦すぎず、ちゃんとおいしいと思える一杯を目指しています。
              </p>
              <p>
                毎日の暮らしの中で、<br />
                「また飲みたい」<br />と思っていただけるコーヒーを届けたくて、<br />
                一つひとつ焙煎しています。
              </p>
              <p>
                抽出には、昔ながらのネルドリップを。
              </p>
              <p>
                手間はかかりますが、やわらかな口当たりと、<br />
                コーヒー本来の甘さを大切にしています。
              </p>
              <p>
                慌ただしい毎日に、ホッとひと息つける時間を。
              </p>
              <p>
                コーヒーをきっかけに生まれるご縁を、<br />
                これからも大切にしていきたいと思っています。
              </p>
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
