import Image from "next/image";
import Link from "next/link";
import { FadeInSection } from "../common/FadeInSection";
import styles from "./Menu.module.scss";

const featuredItems = [
  {
    name: "ネルドリップコーヒー",
    nameEn: "Nel Drip Coffee",
    price: "HOT ¥600 / ICE ¥650",
    description: "苦くない、澄んだ一杯。豆を選べます。",
    image: "/images/menu/items/nel-drip-coffee.jpg",
  },
  {
    name: "カフェラテ",
    nameEn: "Café Latte",
    price: "HOT / ICE ¥700",
    description: "手しぼりエスプレッソ。やさしいコク。",
    image: "/images/menu/items/cafe-latte.jpg",
  },
  {
    name: "ホットサンド",
    nameEn: "Hot Sand",
    price: "¥650",
    description: "手焼きの厚焼き玉子を、自家製ソースで。",
    image: "/images/menu/items/hot-sand.jpg",
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

          <ul className={styles.grid}>
            {featuredItems.map((item) => (
              <li key={item.name} className={styles.item}>
                <div className={styles.imageWrapper}>
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className={styles.image}
                    sizes="(min-width: 768px) 33vw, 88px"
                  />
                </div>
                <div className={styles.body}>
                  <p className={styles.nameEn}>{item.nameEn}</p>
                  <p className={styles.name}>{item.name}</p>
                  <p className={styles.price}>{item.price}</p>
                  <p className={styles.description}>{item.description}</p>
                </div>
              </li>
            ))}
          </ul>

          <div className={styles.footer}>
            <Link href="/menu" className={styles.button}>
              メニューをすべて見る
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </FadeInSection>
    </section>
  );
};
