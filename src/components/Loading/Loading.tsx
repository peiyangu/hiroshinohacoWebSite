"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./Loading.module.scss";

/**
 * logo.png の行レイアウトに合わせて clip-path の上下値を調整してください
 * inset(top right bottom left) — right が 100%→0% にアニメーションし左から右へリビール
 *
 * 行1 「hirosHi.」: 画像上部 0%〜33%
 * 行2 「no.」      : 画像中部 37%〜63%
 * 行3 「haco」     : 画像下部 66%〜99%
 */
const ROWS = [
  { initial: "inset(0%   100% 67%  0%)", end: "inset(0%   0%  67%  0%)", delay: 0.1,  dur: 0.85 },
  { initial: "inset(37%  100% 37%  0%)", end: "inset(37%  0%  37%  0%)", delay: 1.1,  dur: 0.35 },
  { initial: "inset(66%  100% 0%   0%)", end: "inset(66%  0%  0%   0%)", delay: 1.55, dur: 0.55 },
] as const;

export function Loading() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    try {
      if (sessionStorage.getItem("hasLoaded")) {
        setVisible(false);
        return;
      }
      sessionStorage.setItem("hasLoaded", "true");
    } catch {
      // sessionStorage が利用できない環境ではロード画面を毎回表示
    }

    const done = setTimeout(() => setVisible(false), 3100);
    return () => clearTimeout(done);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className={styles.loading}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <div className={styles.loading__logoWrap}>
            {ROWS.map((row, i) => (
              <motion.div
                key={i}
                className={styles.loading__rowClip}
                initial={{ clipPath: row.initial }}
                animate={{ clipPath: row.end }}
                transition={{ delay: row.delay, duration: row.dur, ease: "linear" }}
              >
                <Image
                  src="/images/logo/logo.png"
                  alt={i === 0 ? "hirosHi.no.haco" : ""}
                  width={794}
                  height={718}
                  priority
                  className={styles.loading__logoImg}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
