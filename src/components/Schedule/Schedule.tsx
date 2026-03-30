"use client";

import { useState } from "react";
import Image from "next/image";
import { FadeInSection } from "../common/FadeInSection";
import styles from "./Schedule.module.scss";

export const Schedule = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <section className={styles.schedule} id="schedule">
      <div className={styles.bgText}>SCHEDULE</div>
      <FadeInSection>
        <div className={styles.inner}>
          <div className={styles.titleGroup}>
            <span className={styles.label}>— SCHEDULE</span>
            <h2 className={styles.title}>Schedule</h2>
            <p className={styles.subtitle}>今月の予定</p>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.instagramLink}
            >
              Instagramでも確認 →
            </a>
          </div>
          <div>
            <button
              className={styles.imageWrapper}
              onClick={() => setExpanded(true)}
              aria-label="スケジュールを拡大表示"
            >
              <Image
                src="/images/schedule/schedule.png"
                alt="今月の予定表"
                width={800}
                height={800}
                className={styles.image}
              />
              <span className={styles.imageHint}>タップして拡大</span>
            </button>
            <p className={styles.note}>
              ※最新の予定はInstagramでもお知らせしております。
            </p>
          </div>
        </div>
      </FadeInSection>

      {expanded && (
        <div
          className={styles.lightbox}
          onClick={() => setExpanded(false)}
          role="dialog"
          aria-modal="true"
          aria-label="スケジュール拡大表示"
        >
          <button
            className={styles.lightbox__close}
            onClick={() => setExpanded(false)}
            aria-label="閉じる"
          >
            ×
          </button>
          <div
            className={styles.lightbox__imageWrapper}
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src="/images/schedule/schedule.png"
              alt="今月の予定表"
              width={1200}
              height={1200}
              className={styles.lightbox__image}
            />
          </div>
        </div>
      )}
    </section>
  );
};
