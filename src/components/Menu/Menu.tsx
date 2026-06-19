import { FadeInSection } from "../common/FadeInSection";
import styles from "./Menu.module.scss";

type MenuItem = {
  name: string;
  price?: string;
  note: string;
};

type MenuCategory = {
  id: string;
  titleEn: string;
  titleJa: string;
  items: MenuItem[];
};

const menuCategories: MenuCategory[] = [
  {
    id: "coffee",
    titleEn: "Coffee",
    titleJa: "コーヒー",
    items: [
      { name: "ネルドリップコーヒー", note: "苦くない/澄んだ一杯。豆を選べます。" },
    ],
  },
  {
    id: "milk",
    titleEn: "Milk",
    titleJa: "ミルク",
    items: [
      { name: "カフェラテ", note: "手しぼりエスプレッソ。優しいコク" },
      { name: "オーツミルクラテ", note: "オーツ麦の自然な甘み。軽やかに" },
    ],
  },
  {
    id: "tonic",
    titleEn: "Tonic",
    titleJa: "トニック",
    items: [
      { name: "エスプレッソトニック", note: "トニックの爽快感に果実味の余韻" },
      { name: "はちみつレモントニック", note: "自家製はちみつレモンで、シュワっと" },
    ],
  },
  {
    id: "specials",
    titleEn: "Specials",
    titleJa: "スペシャル",
    items: [
      { name: "エスプレッソバナナシェイク", note: "濃厚バナナ1.5本×エスプレッソ" },
    ],
  },
  {
    id: "non-coffee",
    titleEn: "Non Coffee",
    titleJa: "ノンコーヒー",
    items: [
      { name: "ホットはちみつレモン", note: "あったかい、甘酸っぱい一息" },
      { name: "ミルクココア", note: "ほっと甘い時間。" },
      { name: "キッズコーヒー", note: "同じ量でご用意します。" },
    ],
  },
];

export const Menu = () => {
  return (
    <section className={styles.menu} id="menu">
      <FadeInSection>
        <div className={styles.inner}>
          <div className={styles.header}>
            <h2 className={styles.title}>Menu</h2>
            <p className={styles.subtitle}>店舗メニュー</p>
          </div>
          <div className={styles.grid}>
            {menuCategories.map((cat) => (
              <div key={cat.id} className={styles.category}>
                <div className={styles.categoryHeader}>
                  <h3 className={styles.categoryTitleEn}>{cat.titleEn}</h3>
                  <span className={styles.categoryTitleJa}>{cat.titleJa}</span>
                </div>
                <ul className={styles.list}>
                  {cat.items.map((item) => (
                    <li key={item.name} className={styles.item}>
                      <div className={styles.itemMain}>
                        <span className={styles.name}>{item.name}</span>
                        {item.price && (
                          <>
                            <span className={styles.dots}></span>
                            <span className={styles.price}>{item.price}</span>
                          </>
                        )}
                      </div>
                      <p className={styles.note}>{item.note}</p>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className={styles.footer}>
            <a href="/menu" className={styles.button}>
              メニュー詳細を見る
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </FadeInSection>
    </section>
  );
};
