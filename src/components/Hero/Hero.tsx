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
        <FadeInSection className={styles.hero__content}>
          <div className={styles.hero__textGroup}>
            <p className={styles.hero__kicker}>ヒロシノハコ</p>
            <h1 className={styles.hero__logo}>hirosHi.no.haco</h1>
          </div>
          <div className={styles.hero__messageGroup}>
            <p className={styles.hero__lead}>
              慌ただしい毎日にホッと一息をする
              <br />
              コーヒーのある暮らしを
            </p>
            <p className={styles.hero__tagline}>
              Warm break with peace of mind
            </p>
          </div>
          <div className={styles.hero__action}>
            <StatusBadge />
            <a href="#access" className={styles.hero__button}>
              店舗情報・アクセスを見る
            </a>
          </div>
        </FadeInSection>
      </div>
      <div className={styles.hero__verticalText}>since 2020 — Chikushino, Fukuoka</div>
      <div className={styles.hero__scroll}>
        <span className={styles.hero__scrollText}>SCROLL</span>
        <span className={styles.hero__scrollLine}></span>
      </div>
    </section>
  );
}
