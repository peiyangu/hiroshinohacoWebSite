"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import styles from "./Header.module.scss";

const navItems = [
  { label: "About", href: "/#about" },
  { label: "Line Up", href: "/lineup" },
  { label: "Menu", href: "/menu" },
  { label: "Schedule", href: "/#schedule" },
  { label: "Online Shop", href: "/#online-shop" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // スクロール検知
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // メニューが開いているときスクロールをロック
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  const close = () => setIsOpen(false);

  return (
    <>
      <header className={`${styles.header} ${scrolled ? styles["header--scrolled"] : ""}`}>
        <div className={styles.header__inner}>
          <Link href="/" className={styles.header__logo} onClick={close}>
            <Image
              src="/images/logo/logo.png"
              alt="hirosHi.no.haco"
              width={64}
              height={64}
              priority
              className={styles.header__logoImg}
            />
          </Link>

          {/* PC ナビ */}
          <nav className={styles.header__nav}>
            <ul className={styles.header__list}>
              {navItems.map((item) => (
                <li key={item.href}>
                  {item.href.startsWith("/#") ? (
                    <a href={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${item.href}`}>{item.label}</a>
                  ) : (
                    <Link href={item.href}>{item.label}</Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          {/* ハンバーガーボタン（モバイルのみ） */}
          <button
            className={`${styles.header__burger} ${isOpen ? styles["header__burger--open"] : ""}`}
            onClick={() => setIsOpen((v) => !v)}
            aria-label={isOpen ? "メニューを閉じる" : "メニューを開く"}
            aria-expanded={isOpen}
          >
            <span className={styles.header__burgerLine} />
            <span className={styles.header__burgerLine} />
            <span className={styles.header__burgerLine} />
          </button>
        </div>
      </header>

      {/* フルスクリーン オーバーレイメニュー */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className={styles.mobileMenu}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
          >
            <nav className={styles.mobileMenu__nav}>
              <ul className={styles.mobileMenu__list}>
                {navItems.map((item, i) => (
                  <motion.li
                    key={item.href}
                    className={styles.mobileMenu__item}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.3, delay: i * 0.06 }}
                  >
                    {item.href.startsWith("/#") ? (
                      <a
                        href={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${item.href}`}
                        className={styles.mobileMenu__link}
                        onClick={close}
                      >
                        {item.label}
                      </a>
                    ) : (
                      <Link
                        href={item.href}
                        className={styles.mobileMenu__link}
                        onClick={close}
                      >
                        {item.label}
                      </Link>
                    )}
                  </motion.li>
                ))}
              </ul>
            </nav>
            <p className={styles.mobileMenu__tagline}>
              Warm break with peace of mind
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
