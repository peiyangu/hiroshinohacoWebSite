import Image from "next/image";
import Link from "next/link";
import { FadeInSection } from "../common/FadeInSection";
import { getAllMenuItems } from "@/data/menu";
import styles from "./Menu.module.scss";

const featuredNameEn: Record<string, string> = {
  "ネルドリップコーヒー": "Nel Drip Coffee",
  "カフェラテ": "Café Latte",
  "ホットサンド": "Hot Sand",
};

const allMenuItems = getAllMenuItems();
const featuredItems = Object.keys(featuredNameEn)
  .map((name) => allMenuItems.find((item) => item.name === name))
  .filter((item): item is NonNullable<typeof item> => Boolean(item))
  .map((item) => ({ ...item, nameEn: featuredNameEn[item.name] }));

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
                {item.image && (
                  <div className={styles.imageWrapper}>
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className={styles.image}
                      sizes="(min-width: 768px) 33vw, 88px"
                    />
                  </div>
                )}
                <div className={styles.body}>
                  <p className={styles.nameEn}>{item.nameEn}</p>
                  <p className={styles.name}>{item.name}</p>
                  <p className={styles.price}>{item.price}</p>
                  <p className={styles.description}>{item.description}</p>
                </div>
              </li>
            ))}
          </ul>

          <p className={styles.note}>
            自家焙煎豆・ドリップバッグの店頭販売もございます。
          </p>

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
