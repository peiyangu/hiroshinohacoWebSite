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
  highlight?: string;
};

const lineupItems: LineupItem[] = [
  {
    id: "01",
    nameEn: "Original Blend",
    name: "宝満おろし",
    tag: "BLEND",
    desc: "ローズマリー、明るい果実、黒糖の甘さ、カカオの余韻。すっと抜けるクリーンな後味が特徴のヒロシノハコ看板ブレンド。",
    price: "¥1,300 / 100g",
    href: "https://hirohaco.base.shop/items/135027079",
    photo: "/images/LineUP/宝満おろし.jpg",
    highlight: "迷ったら、まずは宝満おろし",
  },
  {
    id: "02",
    nameEn: "Ethiopia Kaffa Bonga Shishinda",
    name: "エチオピア カッファ ボンガ シシンダ｜浅煎り",
    tag: "SPECIAL",
    desc: "ピンクグアバ、スイカ、レモングラス。果実感がありながら後味はきれいで、シルキーな口当たりが続く複雑な一杯。",
    price: "¥1,700 / 100g",
    href: "https://hirohaco.base.shop/items/135038555",
    photo: "/images/LineUP/エチオピアカッファボンがシシンダ浅煎り.jpg",
  },
  {
    id: "03",
    nameEn: "Ethiopia Tiere",
    name: "エチオピア チレ｜中煎り",
    tag: "SELECT",
    desc: "タンジェリン、ベルガモット、ダージリン。すっきり飲みやすく、まるい甘みが広がるウォッシュト。忙しい日のリセットに。",
    price: "¥1,200 / 100g",
    href: "https://hirohaco.base.shop/items/100163460",
    photo: "/images/LineUP/エチオピアチレ中煎り.jpg",
  },
  {
    id: "04",
    nameEn: "Guatemala El Cerro",
    name: "グアテマラ エル・セロ｜中深煎り",
    tag: "SELECT",
    desc: "レーズン、黒糖、チョコレート、アーモンド。ゆっくり飲むほど良さが見えてくる、甘い余韻が続く一杯。",
    price: "¥1,200 / 100g",
    href: "https://hirohaco.base.shop/items/115122048",
    photo: "/images/LineUP/グアテマラエルセロ中深煎り.jpg",
  },
  {
    id: "05",
    nameEn: "Decaf Ethiopia",
    name: "カフェインレス エチオピア｜中深煎り",
    tag: "DECAF",
    desc: "焼いも、干しブドウ、シナモン、甘い余韻。カフェインレスとは思えない満足感。夜でも安心して飲める一杯。",
    price: "¥1,200 / 100g",
    href: "https://hirohaco.base.shop/items/104576401",
    photo: "/images/LineUP/カフェインレスエチオピア中深煎り.jpg",
  },
  {
    id: "06",
    nameEn: "Drip Bag",
    name: "ドリップバッグ 10個セット",
    tag: "GIFT",
    desc: "飲み比べセットやギフトにもぴったりな10個入り。Daily／Selectを中心に、ご褒美のSpecial・Premiumも2個入り。送料無料。",
    price: "¥3,000 / 10個 送料無料",
    href: "https://hirohaco.base.shop/items/128695835",
    soldOut: true,
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
                      sizes="(min-width: 1024px) 33vw, 50vw"
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
                  {item.highlight && (
                    <span className={styles.lineup__highlight}>{item.highlight}</span>
                  )}
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
