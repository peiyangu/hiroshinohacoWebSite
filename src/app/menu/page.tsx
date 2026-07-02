import Image from "next/image";
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
  image?: string;
};

type MenuSection = {
  id: string;
  num: string;
  labelEn: string;
  labelJa: string;
  items: MenuItem[];
};

type MenuGroup = {
  id: string;
  label: string;
  sections: MenuSection[];
};

const menuGroups: MenuGroup[] = [
  {
    id: "drink",
    label: "DRINK",
    sections: [
      {
        id: "coffee",
        num: "01",
        labelEn: "Coffee",
        labelJa: "コーヒー",
        items: [
          {
            name: "ネルドリップコーヒー",
            description: "苦くない / 澄んだ一杯。豆を選べます。",
            price: "HOT ¥600 / ICE ¥650",
            note: "※豆表からお選びください。",
            image: "/images/menu/items/nel-drip-coffee.jpg",
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
            price: "HOT / ICE ¥700",
            image: "/images/menu/items/cafe-latte.jpg",
          },
          {
            name: "オーツミルクラテ",
            description: "オーツ麦の自然な甘み。軽やかに。",
            price: "HOT / ICE ¥750",
            image: "/images/menu/items/oats-milk-latte.jpg",
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
            price: "¥700",
            image: "/images/menu/items/espresso-tonic.jpg",
          },
          {
            name: "はちみつレモントニック",
            description: "自家製はちみつレモンで、シュワっと。",
            price: "¥700",
            note: "※アルコールは入っていません。",
            image: "/images/menu/items/honey-lemon-tonic.jpg",
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
            description: "濃厚。追熟バナナ1.5本×バニラアイス×エスプレッソ",
            price: "¥950",
            image: "/images/menu/items/espresso-banana-shake.jpg",
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
            price: "¥650",
          },
          {
            name: "ミルクココア",
            description: "ホッと甘い時間。",
            price: "HOT / ICE ¥650",
          },
        ],
      },
    ],
  },
  {
    id: "food",
    label: "FOOD",
    sections: [
      {
        id: "sandwich",
        num: "06",
        labelEn: "Sandwich",
        labelJa: "サンドウィッチ",
        items: [
          {
            name: "ホットサンド",
            description: "手焼きの厚焼き玉子を、自家製ソースで。焼きたてを、コーヒーと一緒に。",
            price: "¥650",
            image: "/images/menu/items/hot-sand.jpg",
          },
        ],
      },
      {
        id: "sweets",
        num: "07",
        labelEn: "Sweets",
        labelJa: "スイーツ",
        items: [
          {
            name: "おやつしろ（スノーボール）",
            description: "ミルキーでほろほろ。コーヒーの合間に、ひとつ、ふたつ。",
            price: "3ツブ ¥250 / 5ツブ ¥420",
            image: "/images/menu/items/oyatsu-shiro.jpg",
          },
          {
            name: "チーズケーキ",
            description: "コーヒーの横に置きたくて焼きました。濃厚だけど、ひと口でほどけるチーズケーキ。",
            price: "¥700",
            image: "/images/menu/items/cheesecake.jpg",
          },
        ],
      },
    ],
  },
];

export default function MenuPage() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <div className={styles.pageHeader}>
          <div className={styles.pageHeader__inner}>
            <span className={styles.pageHeader__label}>— STORE MENU</span>
            <h1 className={styles.pageHeader__title}>Menu.</h1>
          </div>
          <hr className={styles.pageHeader__rule} />
        </div>

        <div className={styles.groups}>
          {menuGroups.map((group) => (
            <div key={group.id} className={styles.group}>
              <p className={styles.groupLabel}>{group.label}</p>
              <div className={styles.sections}>
                {group.sections.map((section) => (
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
                          <div className={item.image ? styles.item__withImage : undefined}>
                            {item.image && (
                              <Image
                                src={item.image}
                                alt={item.name}
                                width={80}
                                height={80}
                                className={styles.item__image}
                              />
                            )}
                            <div className={item.image ? styles.item__text : undefined}>
                              <div className={styles.item__top}>
                                <span className={styles.item__name}>{item.name}</span>
                                <span className={styles.item__price}>{item.price}</span>
                              </div>
                              <p className={styles.item__desc}>{item.description}</p>
                              {item.note && (
                                <p className={styles.item__note}>{item.note}</p>
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
          ))}
        </div>

        <p className={styles.note}>
          ・自家焙煎豆・ドリップバッグも販売しています<br /> （レジショーケース）<br />
          ・コーヒー豆100gご購入ごとにドリンク¥100 OFF<br /> （有効期限1ヶ月）
        </p>
      </main>
      <Footer />
    </>
  );
}
