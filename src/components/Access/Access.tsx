import Image from "next/image";
import Link from "next/link";
import { FadeInSection } from "@/components/common/FadeInSection";
import styles from "./Access.module.scss";

const hours = [
  { day: "月・火", time: "定休日", closed: true },
  { day: "水 〜 金", time: "11:00 – 18:00", closed: false },
  { day: "水・日", time: "9:00〜（試運転中）", closed: false },
  { day: "土", time: "11:00 – 18:00", closed: false },
];

const guideLinks = [
  {
    labelEn: "Menu",
    labelJa: "メニューを見る",
    href: "/menu",
    external: false,
  },
  {
    labelEn: "Schedule",
    labelJa: "今月の営業スケジュール",
    href: "/#schedule",
    external: false,
  },
  {
    labelEn: "Instagram",
    labelJa: "最新情報はInstagramで",
    href: "https://www.instagram.com/",
    external: true,


    
  },
];

export function Access() {
  return (
    <section id="access" className={styles.access}>
      <div className={styles.access__bgText}>ACCESS</div>
      <FadeInSection>
        <div className={styles.access__inner}>

          {/* ヘッダー（センタリング） */}
          <header className={styles.access__header}>
            <span className={styles.access__label}>— ACCESS</span>
            <h2 className={styles.access__title}>Access</h2>
            <div className={styles.access__divider}>
              <span className={styles.access__dividerLine} />
              <span className={styles.access__dividerText}>ご来店の前に</span>
              <span className={styles.access__dividerLine} />
            </div>
          </header>

          {/* ボディ（2カラム）*/}
          <div className={styles.access__body}>

            {/* 左: 店内写真 */}
            <div className={styles.access__imageWrapper}>
              <Image
                src="/images/hero/store.jpg"
                alt="ヒロシノハコ 店舗"
                width={600}
                height={800}
                className={styles.access__image}
              />
            </div>

            {/* 右: 情報 */}
            <div className={styles.access__info}>

              {/* 住所 */}
              <div className={styles.access__infoItem}>
                <p className={styles.access__infoLabel}>Address</p>
                <p className={styles.access__infoText}>
                  〒818-0005<br />
                  福岡県筑紫野市原６３３−１８
                </p>
              </div>

              {/* アクセス */}
              <div className={styles.access__infoItem}>
                <p className={styles.access__infoLabel}>Access</p>
                <p className={styles.access__infoText}>西鉄太宰府駅より徒歩約20分</p>
                <p className={`${styles.access__infoText} ${styles["access__infoText--sub"]}`}>
                  駐車場：店舗前 2台
                </p>
              </div>

              {/* 営業時間 */}
              <div className={styles.access__infoItem}>
                <p className={styles.access__infoLabel}>Hours</p>
                <div className={styles.access__hoursTable}>
                  {hours.map((h) => (
                    <div key={h.day} className={styles.access__hoursRow}>
                      <span className={styles.access__hoursDay}>{h.day}</span>
                      <span
                        className={`${styles.access__hoursTime}${
                          h.closed ? " " + styles["access__hoursTime--closed"] : ""
                        }`}
                      >
                        {h.time}
                      </span>
                    </div>
                  ))}
                </div>
                <p className={styles.access__infoNote}>
                  ※ 定休日：月曜・火曜（祝月曜は営業）
                </p>
              </div>

              {/* リンク */}
              <div className={styles.access__links}>
                <a
                  className={styles.access__link}
                  href="https://maps.app.goo.gl/35SU61hkjfcJKSJ2A"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>Google Map で見る</span>
                  <span className={styles.access__linkArrow}>→</span>
                </a>
                <a
                  className={styles.access__link}
                  href="https://www.instagram.com/stories/highlights/18043771106203960/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>アクセス方法を見る（Instagram）</span>
                  <span className={styles.access__linkArrow}>→</span>
                </a>
              </div>

            </div>{/* /.access__info */}
          </div>{/* /.access__body */}

          {/* Visit Guide（全幅） */}
          <div className={styles.access__guide}>
            <p className={styles.access__guideTitle}>Visit Guide</p>
            <ul className={styles.access__guideList}>
              {guideLinks.map((link) => (
                <li key={link.href} className={styles.access__guideItem}>
                  {link.external ? (
                    <a
                      href={link.href}
                      className={styles.access__guideLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className={styles.access__guideLabelEn}>{link.labelEn}</span>
                      <span className={styles.access__guideLabelJa}>{link.labelJa}</span>
                      <span className={styles.access__guideArrow} aria-hidden="true">→</span>
                    </a>
                  ) : (
                    <Link href={link.href} className={styles.access__guideLink}>
                      <span className={styles.access__guideLabelEn}>{link.labelEn}</span>
                      <span className={styles.access__guideLabelJa}>{link.labelJa}</span>
                      <span className={styles.access__guideArrow} aria-hidden="true">→</span>
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

        </div>
      </FadeInSection>
    </section>
  );
}



