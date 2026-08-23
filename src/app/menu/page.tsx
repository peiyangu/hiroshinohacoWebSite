import Image from "next/image";
import { Header } from "@/components/Header/Header";
import { Footer } from "@/components/Footer/Footer";
import { getMenuGroups } from "@/data/menu";
import styles from "./page.module.scss";

const title = "Menu | ヒロシノハコ";
const description = "ヒロシノハコの店舗メニュー。ネルドリップコーヒーからエスプレッソドリンクまで。";

export const metadata = {
  title,
  description,
  alternates: {
    canonical: "/menu/",
  },
  openGraph: {
    title,
    description,
    url: "/menu/",
    images: [{ url: "/ogp.jpg", width: 1200, height: 630, alt: "ヒロシノハコ" }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/ogp.jpg"],
  },
};

const menuGroups = getMenuGroups();

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
