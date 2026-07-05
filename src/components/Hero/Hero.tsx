"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { StatusBadge } from "@/components/common/StatusBadge";
import styles from "./Hero.module.scss";

const ease = [0.25, 0.1, 0.25, 1] as const;

// 親: 子要素を順番に登場させる（スタガー）
const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.15 },
  },
};

// グループ: さらにその中の要素を細かくスタガー
const group = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1 },
  },
};

// 各テキスト要素: 下からすっと立ち上がる
const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
};

// 見出し: 少しゆったりと settle させて存在感を出す
const heading = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.9, ease } },
};

// アクセント線: 左から引かれる
const line = {
  hidden: { scaleX: 0, opacity: 0 },
  show: { scaleX: 1, opacity: 1, transition: { duration: 0.8, ease, delay: 0.15 } },
};

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
        <motion.div
          className={styles.hero__content}
          variants={container}
          initial="hidden"
          animate="show"
        >
          <motion.div className={styles.hero__top} variants={group}>
            <motion.div className={styles.hero__textGroup} variants={group}>
              <motion.p className={styles.hero__kicker} variants={item}>
                ヒロシノハコ
              </motion.p>
              <motion.h1 className={styles.hero__logo} variants={heading}>
                hirosHi.no.haco
              </motion.h1>
              <motion.span
                className={styles.hero__accentLine}
                variants={line}
                aria-hidden="true"
              />
            </motion.div>
            <motion.p className={styles.hero__tagline} variants={item}>
              Warm break with peace of mind
            </motion.p>
          </motion.div>
          <motion.div className={styles.hero__bottom} variants={group}>
            <motion.p className={styles.hero__description} variants={item}>
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
            </motion.p>
            <motion.div className={styles.hero__action} variants={item}>
              <StatusBadge />
              <a href="#access" className={styles.hero__button}>
                店舗情報・アクセスを見る
              </a>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
      <div className={styles.hero__verticalText}>since 2026.1.23 — Chikushino, Fukuoka</div>
      <div className={styles.hero__scroll}>
        <span className={styles.hero__scrollText}>SCROLL</span>
        <span className={styles.hero__scrollLine}></span>
      </div>
    </section>
  );
}
