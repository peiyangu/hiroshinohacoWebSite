import { FadeInSection } from "@/components/common/FadeInSection";
import styles from "./Access.module.scss";

export function Access() {
  return (
    <section id="access" className={styles.access}>
      <FadeInSection className={styles.access__inner}>
        <div className={styles.access__header}>
          <h2 className={styles.access__title}>ACCESS</h2>
          <h3 className={styles.access__subtitle}>店舗情報</h3>
        </div>
        <div className={styles.access__content}>
          <div className={styles.access__info}>
            <dl className={styles.access__list}>
              <div className={styles.access__row}>
                <dt>住所</dt>
                <dd>
                  〒818-0005
                  <br />
                  福岡県筑紫野市原６３３−１８
                </dd>
              </div>
              <div className={styles.access__row}>
                <dt>営業時間</dt>
                <dd>最新情報はInstagramをご確認ください</dd>
              </div>
              <div className={styles.access__row}>
                <dt>駐車場</dt>
                <dd>店舗前に駐車スペースあり</dd>
              </div>
            </dl>
            <div className={styles.access__action}>
              <a
                className={styles.access__button}
                href="https://maps.app.goo.gl/search"
                target="_blank"
                rel="noopener noreferrer"
              >
                Google Mapで見る
              </a>
            </div>
          </div>
          <div className={styles.access__map}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3328.8888888888887!2d130.5333333!3d33.4833333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzPCsDI5JzAwLjAiTiAxMzDCsDMyJzAwLjAiRQ!5e0!3m2!1sja!2sjp!4v1600000000000!5m2!1sja!2sjp"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="ヒロシノハコ 店舗位置"
            ></iframe>
          </div>
        </div>
      </FadeInSection>
    </section>
  );
}
