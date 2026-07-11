import { Header } from "@/components/Header/Header";
import { Footer } from "@/components/Footer/Footer";
import { LineUp } from "@/components/LineUp/LineUp";
import styles from "./page.module.scss";

export const metadata = {
  title: "Coffee Beans | ヒロシノハコ",
  description: "ヒロシノハコのコーヒー豆ラインナップ。自家焙煎のブレンド・シングルオリジンなど。",
};

export default function LineupPage() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <div className={styles.pageHeader}>
          <div className={styles.pageHeader__inner}>
            <div className={styles.pageHeader__labelGroup}>
              <span className={styles.pageHeader__label}>— COFFEE BEANS</span>
              <p className={styles.pageHeader__subtitle}>コーヒー豆 ラインナップ</p>
            </div>
            <h1 className={styles.pageHeader__title}>Line Up</h1>
          </div>
          <hr className={styles.pageHeader__rule} />
        </div>
        <LineUp hideHeader />
      </main>
      <Footer />
    </>
  );
}
