import { Header } from "@/components/Header/Header";
import { Footer } from "@/components/Footer/Footer";
import styles from "./page.module.scss";

export const metadata = {
  title: "Menu | ヒロシノハコ",
  description: "ヒロシノハコの店舗メニュー。ネルドリップコーヒーからエスプレッソドリンクまで。",
};

const menuSections = [
  {
    id: "coffee",
    num: "01",
    labelEn: "Coffee",
    labelJa: "コーヒー",
    items: [
      { name: "ネルドリップコーヒー", description: "苦くない / 澄んだ一杯。豆を選べます。" },
    ],
  },
  {
    id: "milk",
    num: "02",
    labelEn: "Milk",
    labelJa: "ミルク",
    items: [
      { name: "カフェラテ", description: "手しぼりエスプレッソ。優しいコク" },
      { name: "オーツミルクラテ", description: "オーツ麦の自然な甘み。軽やかに" },
    ],
  },
  {
    id: "tonic",
    num: "03",
    labelEn: "Tonic",
    labelJa: "トニック",
    items: [
      { name: "エスプレッソトニック", description: "トニックの爽快感に果実味の余韻" },
      { name: "はちみつレモントニック", description: "自家製はちみつレモンで、シュワっと" },
    ],
  },
  {
    id: "specials",
    num: "04",
    labelEn: "Specials",
    labelJa: "スペシャル",
    items: [
      { name: "エスプレッソバナナシェイク", description: "濃厚バナナ 1.5本 × エスプレッソ" },
    ],
  },
  {
    id: "non-coffee",
    num: "05",
    labelEn: "Non Coffee",
    labelJa: "ノンコーヒー",
    items: [
      { name: "ホットはちみつレモン", description: "あったかい、甘酸っぱい一息" },
      { name: "ミルクココア", description: "ほっと甘い時間。" },
      { name: "キッズコーヒー", description: "同じ量でご用意します。" },
    ],
  },
];

export default function MenuPage() {
  return (
    <>
      <Header />
      <main className={styles.main}>

        {/* ページヘッダー */}
        <div className={styles.pageHeader}>
          <div className={styles.pageHeader__inner}>
            <span className={styles.pageHeader__label}>— STORE MENU</span>
            <h1 className={styles.pageHeader__title}>Menu.</h1>
          </div>
          <hr className={styles.pageHeader__rule} />
        </div>

        {/* カテゴリリスト */}
        <div className={styles.sections}>
          {menuSections.map((section) => (
            <div key={section.id} className={styles.section}>
              <div className={styles.section__head}>
                <span className={styles.section__num}>{section.num}</span>
                <div className={styles.section__titles}>
                  <h2 className={styles.section__en}>{section.labelEn}</h2>
                  <span className={styles.section__ja}>{section.labelJa}</span>
                </div>
              </div>
              <ul className={styles.section__list}>
                {section.items.map((item) => (
                  <li key={item.name} className={styles.item}>
                    <span className={styles.item__name}>{item.name}</span>
                    <p className={styles.item__desc}>{item.description}</p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className={styles.note}>
          価格は店頭にてご確認ください。メニューは季節により変更になる場合がございます。
        </p>
      </main>
      <Footer />
    </>
  );
}
