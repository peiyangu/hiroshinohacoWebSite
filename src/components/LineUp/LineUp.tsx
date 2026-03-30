import { FadeInSection } from "@/components/common/FadeInSection";
import styles from "./LineUp.module.scss";

const lineupItems = [
  {
    id: "01",
    nameEn: "Original Blend",
    name: "宝満おろし",
    tag: "BLEND",
    desc: "店主が手鍋自分焙煎で仕上げるオリジナルブレンド。果実味とほのかな甘みが幾重にも重なり、毎日飲みたくなる一杯。",
    price: "¥1,200 / 100g",
  },
  {
    id: "02",
    nameEn: "Daily",
    name: "デイリー",
    tag: "EVERYDAY",
    desc: "毎日飲みたい、実用的な一杯。苦味が少なく軽やかな飲み口で、コーヒーが苦手な方や初めての方にもおすすめできます。",
    price: "¥1,100 / 100g",
  },
  {
    id: "03",
    nameEn: "Select",
    name: "セレクト",
    tag: "ORIGIN",
    desc: "産地の個性を楽しむシングルオリジン。エチオピア・グアテマラなど、季節ごとに変わる豆でその土地の味を楽しめます。",
    price: "¥1,200 / 100g",
  },
  {
    id: "04",
    nameEn: "Special",
    name: "スペシャル",
    tag: "PREMIUM",
    desc: "エチオピアの希少品種など、ぜひ味わってほしい生産者直送の一杯。店主の真骨頂を込めたスペシャルティ側面。",
    price: "¥1,700 / 100g",
  },
  {
    id: "05",
    nameEn: "Drip Bag",
    name: "ドリップバッグ",
    tag: "GIFT",
    desc: "飲み比べセットやギフトにもぴったりな10個入り。コーヒーが飲みたくなった時、思い出していただけるように。",
    price: "¥3,000 / 10個 送料無料",
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
            <h2 className={styles.lineup__title}>LINE UP</h2>
            <p className={styles.lineup__subtitle}>商品ラインナップ</p>
          </div>
        )}
        <ul className={styles.lineup__list}>
          {lineupItems.map((item) => (
            <li key={item.id} className={styles.lineup__item}>
              <div className={styles.lineup__itemNumber}>{item.id}</div>
              <div className={styles.lineup__itemBody}>
                <div className={styles.lineup__itemMeta}>
                  <span className={styles.lineup__itemTag}>{item.tag}</span>
                  <span className={styles.lineup__itemPrice}>{item.price}</span>
                </div>
                <h3 className={styles.lineup__itemNameEn}>{item.nameEn}</h3>
                <h4 className={styles.lineup__itemName}>{item.name}</h4>
                <p className={styles.lineup__itemDesc}>{item.desc}</p>
              </div>
              <div className={styles.lineup__itemBar}></div>
            </li>
          ))}
        </ul>
        <div className={styles.lineup__action}>
          <a
            className={styles.lineup__button}
            href="https://hiroshinohaco.base.shop/"
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
