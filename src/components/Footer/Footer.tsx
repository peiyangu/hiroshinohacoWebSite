import Link from "next/link";
import styles from "./Footer.module.scss";
import {
  BUSINESS_HOURS_SUMMARY,
  INSTAGRAM_URL,
  STORE_ADDRESS_LINES,
} from "@/data/site";

const footerLinks = [
  { label: "News", href: "/#news" },
  { label: "About", href: "/#about" },
  { label: "Line Up", href: "/lineup" },
  { label: "Menu", href: "/menu" },
  { label: "Schedule", href: "/#schedule" },
  { label: "Online Shop", href: "/#online-shop" },
];

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__inner}>
        <div className={styles.footer__brand}>
          <p className={styles.footer__logo}>hirosHi.no.haco</p>
          <p className={styles.footer__tagline}>Warm break with peace of mind</p>
        </div>

        <nav className={styles.footer__nav} aria-label="フッターナビゲーション">
          <ul className={styles.footer__list}>
            {footerLinks.map((item) => (
              <li key={item.href}>
                {item.href.startsWith("/#") ? (
                  <a
                    href={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${item.href}`}
                    className={styles.footer__link}
                  >
                    {item.label}
                  </a>
                ) : (
                  <Link href={item.href} className={styles.footer__link}>
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>

        <div className={styles.footer__info}>
          <p className={styles.footer__infoLabel}>Access</p>
          <address className={styles.footer__address}>
            {STORE_ADDRESS_LINES[0]}<br />
            {STORE_ADDRESS_LINES[1]}
          </address>
          <p className={`${styles.footer__infoLabel} ${styles.footer__infoLabelSpacing}`}>Hours</p>
          <p className={styles.footer__hours}>{BUSINESS_HOURS_SUMMARY}</p>
          <p className={styles.footer__hoursSub}>※営業日はスケジュールをご確認ください</p>
        </div>

        <div className={styles.footer__sns}>
          <a
            href={INSTAGRAM_URL}
            className={styles.footer__snsLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
          <a
            href="https://hirohaco.base.shop/"
            className={styles.footer__snsLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            Online Shop
          </a>
        </div>
      </div>

      <div className={styles.footer__bottom}>
        <p className={styles.footer__copy}>© ヒロシノハコ</p>
      </div>
    </footer>
  );
}
