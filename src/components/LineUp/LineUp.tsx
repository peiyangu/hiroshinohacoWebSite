import Image from "next/image";
import { FadeInSection } from "@/components/common/FadeInSection";
import styles from "./LineUp.module.scss";

type LineupItem = {
  id: string;
  nameEn: string;
  name: string;
  tag: string;
  desc: string;
  price: string;
  href: string;
  soldOut?: boolean;
  photo?: string;
};

const lineupItems: LineupItem[] = [
  {
    id: "01",
    nameEn: "Original Blend",
    name: "宝満おろし",
    tag: "BLEND",
    desc: "店主が手鍋自家焙煎で仕上げるオリジナルブレンド。果実味とほのかな甘みが幾重にも重なり、毎日飲みたくなる一杯。",
    price: "¥1,200 / 100g",
    href: "https://hirohaco.base.shop/items/135027079",
    photo: "/images/LineUP/宝満おろし.jpg",
  },
  {
    id: "02",
    nameEn: "Daily",
    name: "デイリー",
    tag: "EVERYDAY",
    desc: "毎日飲みたい、実用的な一杯。苦味が少なく軽やかな飲み口で、コーヒーが苦手な方や初めての方にもおすすめ。",
    price: "¥1,100 / 100g",
    href: "https://hirohaco.base.shop/items/86292742",
    photo: "/images/LineUP/DSC_1043.jpg",
  },
  {
    id: "03",
    nameEn: "Select — Decaf Ethiopia",
    name: "カフェインレス エチオピア グジ ハンベラ（ナチュラル）中深煎り",
    tag: "SELECT / DECAF",
    desc: "カフェインを除去しながらも、ナチュラル精製ならではの甘みと果実感が残る一杯。夜でも安心して飲めます。",
    price: "¥1,200 / 100g",
    href: "https://hirohaco.base.shop/items/104576401",
    photo: "/images/LineUP/カフェインレスエチオピア中深煎り.jpg",
  },
  {
    id: "04",
    nameEn: "Select — Guatemala",
    name: "グアテマラ エル・セロ 中〜中深煎り",
    tag: "SELECT / ORIGIN",
    desc: "グアテマラの高地で育ったエル・セロ。バランスの取れた酸味とナッツのような甘い余韻が続きます。",
    price: "¥1,200 / 100g",
    href: "https://hirohaco.base.shop/items/115122048",
    photo: "/images/LineUP/グアテマラエルセロ中深煎り.jpg",
  },
  {
    id: "05",
    nameEn: "Select — Ethiopia",
    name: "エチオピア チレ 中煎り",
    tag: "SELECT / ORIGIN",
    desc: "エチオピア南部チレ産。華やかな柑橘系の香りと繊細な甘みが特徴のウォッシュト。",
    price: "¥1,200 / 100g",
    href: "https://hirohaco.base.shop/items/100163460",
    photo: "/images/LineUP/エチオピアチレ中煎り.jpg",
  },
  {
    id: "06",
    nameEn: "Special",
    name: "スペシャル",
    tag: "PREMIUM",
    desc: "エチオピアの希少品種など、ぜひ味わってほしい生産者直送の一杯。店主の真骨頂を込めたスペシャルティ。",
    price: "¥1,700 / 100g",
    href: "https://hirohaco.base.shop/items/135038555",
    soldOut: true,
    photo: "/images/LineUP/エチオピアカッファボンがシシンダ浅煎り.jpg",
  },
  {
    id: "07",
    nameEn: "Drip Bag",
    name: "ドリップバッグ",
    tag: "GIFT",
    desc: "飲み比べセットやギフトにもぴったりな10個入り。コーヒーが飲みたくなった時、思い出していただけるように。",
    price: "¥3,000 / 10個 送料無料",
    href: "https://hirohaco.base.shop/items/128695835",
    photo: "/images/LineUP/ドリップバッグ10個.jpg",
  },
];

interface LineUpProps {
  hideHeader?: boolean;
}

export function LineUp({ hideHeader = false }: LineUpProps) {
  return (
    <section
      id="lineup"
      className={`${styles.lineup}${hideHeader ? ` ${styles["lineup--page"]}` : ""}`}
    >
      {!hideHeader && (
        <FadeInSection className={styles.lineup__label}>
          <span>— LINE UP</span>
        </FadeInSection>
      )}
      <FadeInSection className={styles.lineup__inner}>
        {!hideHeader && (
          <div className={styles.lineup__header}>
            <h2 className={styles.lineup__title}>COFFEE BEANS</h2>
            <p className={styles.lineup__subtitle}>コーヒー豆 ラインナップ</p>
          </div>
        )}
        <ul className={styles.lineup__grid}>
          {lineupItems.map((item) => (
            <li key={item.id} className={styles.lineup__item}>
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles.lineup__card}${item.soldOut ? ` ${styles["lineup__card--soldout"]}` : ""}`}
                aria-label={`${item.nameEn} — ${item.name}`}
              >
                {/* 商品写真 */}
                <div className={styles.lineup__cardPhoto}>
                  {item.photo ? (
                    <Image
                      src={item.photo}
                      alt={item.name}
                      fill
                      className={styles.lineup__cardPhotoImg}
                      sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                    />
                  ) : (
                    <div className={styles.lineup__cardPhotoPlaceholder} />
                  )}
                  <div className={styles.lineup__cardOverlay}>
                    <span className={styles.lineup__itemTag}>{item.tag}</span>
                    {item.soldOut && (
                      <span className={styles.lineup__soldOut}>SOLD OUT</span>
                    )}
                  </div>
                </div>

                {/* テキスト */}
                <div className={styles.lineup__cardBody}>
                  <span className={styles.lineup__cardNumber}>{item.id}</span>
                  <h3 className={styles.lineup__itemNameEn}>{item.nameEn}</h3>
                  <h4 className={styles.lineup__itemName}>{item.name}</h4>
                  <p className={styles.lineup__itemDesc}>{item.desc}</p>
                  <div className={styles.lineup__cardFooter}>
                    <span className={styles.lineup__itemPrice}>{item.price}</span>
                    {!item.soldOut && (
                      <span className={styles.lineup__cardLink}>
                        BASE で購入 <span aria-hidden="true">→</span>
                      </span>
                    )}
                  </div>
                </div>
              </a>
            </li>
          ))}
        </ul>

        <div className={styles.lineup__action}>
          <a
            className={styles.lineup__button}
            href="https://hirohaco.base.shop/"
            target="_blank"
            rel="noopener noreferrer"
          >
            オンラインショップへ
            <span className={styles.lineup__buttonArrow} aria-hidden="true">→</span>
          </a>
        </div>
      </FadeInSection>
    </section>
  );
}
