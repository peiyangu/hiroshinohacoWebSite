"use client";

import { useState, useEffect, Fragment } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./Loading.module.scss";

const words = ["hirosHi.", "no.", "haco"];
const CHAR_DELAY = 0.1;
const WORD_GAP = 0.4;

function getWordStartDelay(wordIndex: number): number {
  let delay = 0;
  for (let i = 0; i < wordIndex; i++) {
    delay += words[i].length * CHAR_DELAY + WORD_GAP;
  }
  return delay;
}

export function Loading() {
  const [visible, setVisible] = useState(true);
  const [cursorPos, setCursorPos] = useState<{ wi: number; ci: number } | null>(null);

  useEffect(() => {
    try {
      if (sessionStorage.getItem("hasLoaded")) {
        setVisible(false);
      } else {
        sessionStorage.setItem("hasLoaded", "true");
      }
    } catch {
      // sessionStorage が利用できない環境ではロード画面を毎回表示
    }
  }, []);

  const handleLastComplete = () => {
    setTimeout(() => setVisible(false), 1200);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className={styles.loading}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
        >

          <div className={styles.loading__texts}>
            {words.map((word, wi) => {
              const wordStart = getWordStartDelay(wi);
              const isLastWord = wi === words.length - 1;
              return (
                <span key={word} className={styles.loading__word}>
                  {word.split("").map((char, ci) => {
                    const isLastChar = isLastWord && ci === word.length - 1;
                    return (
                      <Fragment key={ci}>
                        <motion.span
                          className={styles.loading__char}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{
                            delay: wordStart + ci * CHAR_DELAY,
                            duration: 0.05,
                            ease: "linear",
                          }}
                          onAnimationComplete={() => {
                            setCursorPos({ wi, ci });
                            if (isLastChar) handleLastComplete();
                          }}
                        >
                          {char}
                        </motion.span>
                        {cursorPos?.wi === wi && cursorPos?.ci === ci && (
                          <span className={styles["loading__cursor--blink"]} />
                        )}
                      </Fragment>
                    );
                  })}
                </span>
              );
            })}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
