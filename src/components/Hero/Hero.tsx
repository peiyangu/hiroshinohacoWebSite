import Image from "next/image";
import { FadeInSection } from "@/components/common/FadeInSection";
import { StatusBadge } from "@/components/common/StatusBadge";
import styles from "./Hero.module.scss";

export function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.hero__bgImage}>
        <Image
          src="/images/hero/DSC_0938.jpg"
          alt="hirosHi.no.haco 店舗風景"
          fill
          priority
          sizes="100vw"
        />
      </div>
      <div className={styles.hero__inner}>
        <div className={styles.hero__content}>
          <FadeInSection className={styles.hero__top} distance={32}>
            <div className={styles.hero__textGroup}>
              <p className={styles.hero__kicker}>ヒロシノハコ</p>
              <h1 className={styles.hero__logo}>hirosHi.no.haco</h1>
            </div>
            <p className={styles.hero__tagline}>
              Warm break with peace of mind
            </p>
          </FadeInSection>
          <FadeInSection className={styles.hero__bottom} delay={0.4}>
            <p className={styles.hero__description}>
              <span className={styles.hero__descriptionShort}>
                福岡県筑紫野市の住宅街にある
                <br />小さな自家焙煎コーヒー店です。
                <br />
                苦すぎず、すっと飲めるコーヒーを
                <br />
                ネルドリップで一杯ずつ。
                <br />
                店内では、コーヒーやカフェラテのほか、
                <br />
                コーヒー豆やドリップバッグもご用意しています。
              </span>
              <span className={styles.hero__descriptionFull}>
                福岡県筑紫野市の住宅街にある、
                <br />
                小さな自家焙煎コーヒー店です。
                <br />
                苦すぎず、すっと飲めるコーヒーを
                <br />
                ネルドリップで一杯ずつお淹れしています。
                <br />
                店内では、コーヒーやカフェラテのほか、
                <br />
                ご自宅用のコーヒー豆やドリップバッグもご用意しています。
              </span>
            </p>
            <div className={styles.hero__action}>
              <StatusBadge />
              <a href="#access" className={styles.hero__button}>
                店舗情報・アクセスを見る
              </a>
            </div>
          </FadeInSection>
        </div>
      </div>
      <div className={styles.hero__verticalText}>since 2026.1.23 — Chikushino, Fukuoka</div>
      <div className={styles.hero__scroll}>
        <span className={styles.hero__scrollText}>SCROLL</span>
        <span className={styles.hero__scrollLine}></span>
      </div>
    </section>
  );
}
