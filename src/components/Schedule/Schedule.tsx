import Image from "next/image";
import { FadeInSection } from "../common/FadeInSection";
import styles from "./Schedule.module.scss";

export const Schedule = () => {
  return (
    <section className={styles.schedule} id="schedule">
      <FadeInSection>
        <div className={styles.inner}>
          <h2 className={styles.title}>Schedule</h2>
          <p className={styles.subtitle}>今月の予定</p>
          <div className={styles.imageWrapper}>
            <Image
              src="/images/schedule/schedule.png"
              alt="今月の予定表"
              width={800}
              height={800}
              className={styles.image}
            />
          </div>
          <p className={styles.note}>
            ※最新の予定はInstagramでもお知らせしております。
          </p>
        </div>
      </FadeInSection>
    </section>
  );
};
