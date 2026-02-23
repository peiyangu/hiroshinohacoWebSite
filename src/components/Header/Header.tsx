import Image from "next/image";
import styles from "./Header.module.scss";

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.header__inner}>
        <div className={styles.header__logo}>
          <Image
            src="/images/logo/logo.png"
            alt="hirosHi.no.haco"
            width={60}
            height={60}
            priority
          />
        </div>
        <nav className={styles.header__nav}>
          <ul className={styles.header__list}>
            <li><a href="#news">News</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#lineup">Line Up</a></li>
            <li><a href="#menu">Menu</a></li>
            <li><a href="#schedule">Schedule</a></li>
            <li><a href="#course">Model Course</a></li>
            <li><a href="#online-shop">Online Shop</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
