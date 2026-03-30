import { Header } from "@/components/Header/Header";
import { Footer } from "@/components/Footer/Footer";
import { LineUp } from "@/components/LineUp/LineUp";
import styles from "./page.module.scss";

export const metadata = {
  title: "Line Up | ヒロシノハコ",
  description: "ヒロシノハコの商品ラインナップをご紹介します。",
};

export default function LineupPage() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <div className={styles.hero}>
          <span className={styles.hero__label}>— LINE UP</span>
          <h1 className={styles.hero__title}>LINE UP</h1>
          <p className={styles.hero__subtitle}>商品ラインナップ</p>
        </div>
        <LineUp hideHeader />
      </main>
      <Footer />
    </>
  );
}
