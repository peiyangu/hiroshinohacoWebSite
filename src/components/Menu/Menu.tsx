import { FadeInSection } from "../common/FadeInSection";
import styles from "./Menu.module.scss";

type MenuItem = {
  name: string;
  price?: string;
  note: string;
  subNote?: string;
  image?: string;
};

type MenuCategory = {
  id: string;
  titleEn: string;
  titleJa: string;
  items: MenuItem[];
};

type MenuGroup = {
  id: string;
  titleEn: string;
  categories: MenuCategory[];
};

const menuGroups: MenuGroup[] = [
  {
    id: "drink",
    titleEn: "DRINK",
    categories: [
      {
        id: "coffee",
        titleEn: "Coffee",
        titleJa: "コーヒー",
        items: [
          {
            name: "ネルドリップコーヒー",
            price: "HOT ¥600 / ICE ¥650",
            note: "苦くない、澄んだ一杯。豆を選べます。",
            subNote: "※豆表からお選びください。",
          },
        ],
      },
      {
        id: "milk",
        titleEn: "Milk",
        titleJa: "ミルク",
        items: [
          {
            name: "カフェラテ",
            price: "HOT / ICE ¥700",
            note: "手しぼりエスプレッソ。やさしいコク。",
          },
          {
            name: "オーツミルクラテ",
            price: "HOT / ICE ¥750",
            note: "オーツ麦の自然な甘み、軽やかに。",
            subNote: "※カフェインレスにもできます。",
          },
        ],
      },
      {
        id: "tonic",
        titleEn: "Tonic",
        titleJa: "トニック",
        items: [
          {
            name: "エスプレッソトニック",
            price: "¥700",
            note: "トニックの爽快感に、果実味の余韻。",
            subNote: "※カフェインレスにもできます。",
          },
          {
            name: "はちみつレモントニック",
            price: "¥700",
            note: "自家製はちみつレモンを、シュワっと。",
            subNote: "※アルコールは入っていません。",
          },
        ],
      },
      {
        id: "specials",
        titleEn: "Specials",
        titleJa: "スペシャル",
        items: [
          {
            name: "エスプレッソバナナシェイク",
            price: "¥950",
            note: "濃厚。追熟バナナ1.5本×バニラアイス×エスプレッソ",
            subNote: "※カフェインレスにもできます。",
          },
        ],
      },
      {
        id: "non-coffee",
        titleEn: "Non Coffee",
        titleJa: "ノンコーヒー",
        items: [
          {
            name: "ホットはちみつレモン",
            price: "¥650",
            note: "あたたかい、甘酸っぱいひと息。",
          },
          {
            name: "ミルクコア",
            price: "HOT / ICE ¥650",
            note: "ホッと甘い時間。",
          },
        ],
      },
    ],
  },
  {
    id: "food",
    titleEn: "FOOD",
    categories: [
      {
        id: "sandwich",
        titleEn: "Sandwich",
        titleJa: "サンドウィッチ",
        items: [
          {
            name: "ホットサンド",
            price: "¥650",
            note: "手焼きの厚焼き玉子を、自家製ソースで。焼きたてを、コーヒーと一緒に。",
            image: "/images/menu/items/hot-sand.jpg",
          },
        ],
      },
      {
        id: "sweets",
        titleEn: "Sweets",
        titleJa: "スイーツ",
        items: [
          {
            name: "おやつしろ（スノーボール）",
            price: "3ツブ ¥250 / 5ツブ ¥420",
            note: "ミルキーでほろほろ。コーヒーの合間に、ひとつ、ふたつ。",
            image: "/images/menu/items/oyatsu-shiro.jpg",
          },
          {
            name: "チーズケーキ",
            price: "¥700",
            note: "コーヒーの横に置きたくて焼きました。濃厚だけど、ひと口でほどけるチーズケーキ。",
            image: "/images/menu/items/cheesecake.jpg",
          },
        ],
      },
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
          <div className={styles.groups}>
            {menuGroups.map((group) => (
              <div key={group.id} className={styles.group}>
                <p className={styles.groupLabel}>{group.titleEn}</p>
                <div className={styles.groupInner}>
                  <div className={styles.groupContent}>
                    <div className={styles.grid}>
                      {group.categories.map((cat) => (
                        <div key={cat.id} className={styles.category}>
                          <div className={styles.categoryHeader}>
                            <h3 className={styles.categoryTitleEn}>{cat.titleEn}</h3>
                            <span className={styles.categoryTitleJa}>{cat.titleJa}</span>
                          </div>
                          <ul className={styles.list}>
                            {cat.items.map((item) => (
                              <li key={item.name} className={styles.item}>
                                <div className={item.image ? styles.itemWithImage : undefined}>
                                  {item.image && (
                                    <Image
                                      src={item.image}
                                      alt={item.name}
                                      width={68}
                                      height={68}
                                      className={styles.itemImage}
                                    />
                                  )}
                                  <div className={item.image ? styles.itemText : undefined}>
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
                                    {item.subNote && (
                                      <p className={styles.subNote}>{item.subNote}</p>
                                    )}
                                  </div>
                                </div>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
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
