import { Header } from "@/components/Header/Header";
import { Footer } from "@/components/Footer/Footer";
import styles from "./page.module.scss";

export const metadata = {
  title: "Menu | ヒロシノハコ",
  description: "ヒロシノハコの店舗メニュー。ネルドリップコーヒーからエスプレッソドリンクまで。",
};

type MenuItem = {
  name: string;
  description: string;
  price: string;
  note?: string;
};

type MenuSection = {
  id: string;
  num: string;
  labelEn: string;
  labelJa: string;
  items: MenuItem[];
};

const menuSections: MenuSection[] = [
  {
    id: "coffee",
    num: "01",
    labelEn: "Coffee",
    labelJa: "コーヒー",
    items: [
      {
        name: "ネルドリップコーヒー",
        description: "苦くない / 澄んだ一杯。豆を選べます。",
        price: "HOT ¥550 / ICE ¥600",
        note: "※豆表からお選びください。",
      },
    ],
  },
  {
    id: "milk",
    num: "02",
    labelEn: "Milk",
    labelJa: "ミルク",
    items: [
      {
        name: "カフェラテ",
        description: "手しぼりエスプレッソ。やさしいコク。",
        price: "HOT / ICE ¥650",
      },
      {
        name: "オーツミルクラテ",
        description: "オーツ麦の自然な甘み。軽やかに。",
        price: "HOT / ICE ¥700",
        note: "※カフェインレスにもできます。",
      },
    ],
  },
  {
    id: "tonic",
    num: "03",
    labelEn: "Tonic",
    labelJa: "トニック（炭酸・ノンアル）",
    items: [
      {
        name: "エスプレッソトニック",
        description: "トニックの爽快感に、果実味の余韻。",
        price: "¥650",
        note: "※カフェインレスにもできます。",
      },
      {
        name: "はちみつレモントニック",
        description: "自家製はちみつレモンで、シュワっと。",
        price: "¥650",
        note: "※アルコールは入っていません。",
      },
    ],
  },
  {
    id: "specials",
    num: "04",
    labelEn: "Specials",
    labelJa: "スペシャル",
    items: [
      {
        name: "エスプレッソバナナシェイク",
        description: "濃厚バナナ 1.5本 × エスプレッソ",
        price: "¥850",
        note: "※カフェインレスにもできます。",
      },
    ],
  },
  {
    id: "non-coffee",
    num: "05",
    labelEn: "Non Coffee",
    labelJa: "ノンコーヒー",
    items: [
      {
        name: "ホットはちみつレモン",
        description: "あたたかい、甘酸っぱい一息。",
        price: "¥600",
      },
      {
        name: "ミルクココア",
        description: "ホッと甘い時間。",
        price: "HOT / ICE ¥450",
      },
      {
        name: "キッズコア（中学生まで）",
        description: "同じ量でご用意します。",
        price: "HOT / ICE ¥250",
      },
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
                    <div className={styles.item__top}>
                      <span className={styles.item__name}>{item.name}</span>
                      <span className={styles.item__price}>{item.price}</span>
                    </div>
                    <p className={styles.item__desc}>{item.description}</p>
                    {item.note && (
                      <p className={styles.item__note}>{item.note}</p>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className={styles.note}>
          自家焙煎豆・ドリップバッグも販売しています（レジショーケース）<br />
          コーヒーに合う「おやつ」もどうぞ。ご注文はレジにて承ります。
        </p>
      </main>
      <Footer />
    </>
  );
}
