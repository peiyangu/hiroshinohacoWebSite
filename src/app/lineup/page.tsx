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
        <div className={styles.hero}>
          <span className={styles.hero__label}>— COFFEE BEANS</span>
          <h1 className={styles.hero__title}>COFFEE BEANS</h1>
          <p className={styles.hero__subtitle}>コーヒー豆 ラインナップ</p>
        </div>
        <LineUp hideHeader />
      </main>
      <Footer />
    </>
  );
}
