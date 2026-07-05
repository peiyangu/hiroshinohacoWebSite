import Image from "next/image";
import Link from "next/link";
import { FadeInSection } from "@/components/common/FadeInSection";
import { StatusBadge } from "@/components/common/StatusBadge";
import {
  ACCESS_HOURS,
  BUSINESS_HOURS_NOTE,
  INSTAGRAM_URL,
  STORE_ADDRESS_LINES,
} from "@/data/site";
import styles from "./Access.module.scss";

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
    href: INSTAGRAM_URL,
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

          {/* ボディ（画像 + 情報） */}
          <div className={styles.access__body}>

            {/* 左: 縦長画像＋装飾フレーム */}
            <div className={styles.access__imageFrame}>
              <div className={styles.access__imageWrapper}>
                <Image
                  src="/images/access/storeImage.png"
                  alt="ヒロシノハコ 店舗"
                  width={570}
                  height={836}
                  className={styles.access__image}
                />
              </div>
            </div>

            {/* 右: 情報 */}
            <div className={styles.access__info}>

              <div className={styles.access__infoItem}>
                <p className={styles.access__infoLabel}>Address</p>
                <p className={styles.access__infoText}>
                  {STORE_ADDRESS_LINES[0]}<br />
                  {STORE_ADDRESS_LINES[1]}
                </p>
              </div>

              <div className={styles.access__infoItem}>
                <p className={styles.access__infoLabel}>Access</p>
                <p className={styles.access__infoText}>西鉄太宰府駅より徒歩約20分</p>
                <p className={`${styles.access__infoText} ${styles["access__infoText--sub"]}`}>
                  太宰府天満宮・九州国立博物館から車で約4〜5分。
                  <br />
                  お出かけの途中や、日々のひと休みにお立ち寄りください。
                </p>
              </div>

              <div className={styles.access__infoItem}>
                <p className={styles.access__infoLabel}>Parking</p>
                <p className={styles.access__infoText}>
                  店舗敷地内に2台分の駐車スペースがございます。
                </p>
                <figure className={styles.access__parking}>
                  <Image
                    src="/images/access/parking.png"
                    alt="店舗敷地内の駐車スペース（2台分）"
                    width={496}
                    height={790}
                    sizes="(min-width: 768px) 180px, 40vw"
                    className={styles.access__parkingImage}
                  />
                  <figcaption className={styles.access__parkingCaption}>
                    写真の①②が駐車スペースです。満車の際はお近くのコインパーキングをご利用ください。
                  </figcaption>
                </figure>
              </div>

              <div className={styles.access__infoItem}>
                <p className={styles.access__infoLabel}>Hours</p>
                <div className={styles.access__today}>
                  <span className={styles.access__todayLabel}>本日</span>
                  <StatusBadge />
                </div>
                <div className={styles.access__hoursTable}>
                  {ACCESS_HOURS.map((hour) => (
                    <div key={hour.day} className={styles.access__hoursRow}>
                      <span className={styles.access__hoursDay}>{hour.day}</span>
                      <span
                        className={`${styles.access__hoursTime}${
                          hour.closed ? " " + styles["access__hoursTime--closed"] : ""
                        }`}
                      >
                        {hour.time}
                      </span>
                    </div>
                  ))}
                </div>
                <p className={styles.access__infoNote}>
                  {BUSINESS_HOURS_NOTE}
                </p>
                <p className={styles.access__infoNote}>
                  ※ 最新の営業情報は{" "}
                  <a
                    href={INSTAGRAM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.access__infoNoteLink}
                  >
                    Instagram
                  </a>
                  {" "}をご確認ください
                </p>
              </div>

              <div className={styles.access__links}>
                <a
                  className={styles.access__link}
                  href="https://www.google.com/maps?q=33.51767408340996,130.5438592910404"
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

            </div>
          </div>

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
                  ) : link.href.startsWith("/#") ? (
                    <a href={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${link.href}`} className={styles.access__guideLink}>
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
