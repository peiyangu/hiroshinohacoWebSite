import { FadeInSection } from "@/components/common/FadeInSection";
import styles from "./ModelCourse.module.scss";

export function ModelCourse() {
  return (
    <section id="course" className={styles.course}>
      <FadeInSection className={styles.course__inner}>
        <div className={styles.course__header}>
          <h2 className={styles.course__title}>MODEL COURSE</h2>
          <h3 className={styles.course__subtitle}>おすすめの過ごし方</h3>
        </div>
        <div className={styles.course__content}>
          <div className={styles.course__item}>
            <h4 className={styles.course__itemTitle}>
              <span>01</span>
              休日の朝、静かな時間を
            </h4>
            <p className={styles.course__itemText}>
              少し早起きした休日の朝。お気に入りの本を片手に、果実味ブレンドを淹れる。
              苦味の少ない爽やかな酸味が、心地よい一日の始まりを告げてくれます。
            </p>
          </div>
          <div className={styles.course__item}>
            <h4 className={styles.course__itemTitle}>
              <span>02</span>
              午後のひととき、ご縁を繋ぐ
            </h4>
            <p className={styles.course__itemText}>
              友人や家族との語らいの時間。ネルドリップで丁寧に淹れたコーヒーが、
              会話をより温かく、豊かなものにしてくれます。
            </p>
          </div>
        </div>
      </FadeInSection>
    </section>
  );
}
