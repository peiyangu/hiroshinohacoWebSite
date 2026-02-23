import { Header } from "@/components/Header/Header";
import { Footer } from "@/components/Footer/Footer";
import styles from "./page.module.scss";

export default function MenuPage() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <div className={styles.inner}>
          <h1 className={styles.title}>Menu</h1>
          <p className={styles.subtitle}>店舗メニュー詳細</p>
          
          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>Coffee</h2>
            <ul className={styles.list}>
              <li className={styles.item}>
                <div className={styles.itemHeader}>
                  <span className={styles.name}>ヒロシノハコ ブレンド</span>
                  <span className={styles.price}>¥500</span>
                </div>
                <p className={styles.description}>
                  苦味が少なく、果実味を感じる当店自慢のブレンドです。
                </p>
              </li>
              <li className={styles.item}>
                <div className={styles.itemHeader}>
                  <span className={styles.name}>シングルオリジン（エチオピア）</span>
                  <span className={styles.price}>¥600</span>
                </div>
                <p className={styles.description}>
                  華やかな香りとフルーティーな酸味が特徴です。
                </p>
              </li>
              <li className={styles.item}>
                <div className={styles.itemHeader}>
                  <span className={styles.name}>カフェラテ</span>
                  <span className={styles.price}>¥550</span>
                </div>
                <p className={styles.description}>
                  エスプレッソとミルクの優しいハーモニー。
                </p>
              </li>
            </ul>
          </div>

          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>Others</h2>
            <ul className={styles.list}>
              <li className={styles.item}>
                <div className={styles.itemHeader}>
                  <span className={styles.name}>自家製レモネード</span>
                  <span className={styles.price}>¥500</span>
                </div>
                <p className={styles.description}>
                  国産レモンを使用した、さっぱりとした味わい。
                </p>
              </li>
              <li className={styles.item}>
                <div className={styles.itemHeader}>
                  <span className={styles.name}>季節の焼き菓子</span>
                  <span className={styles.price}>¥350〜</span>
                </div>
                <p className={styles.description}>
                  コーヒーに合う、日替わりの焼き菓子をご用意しています。
                </p>
              </li>
            </ul>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
