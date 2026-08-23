import Image from "next/image";
import Link from "next/link";
import { FadeInSection } from "@/components/common/FadeInSection";
import { lineupItems } from "@/data/lineupItems";
import styles from "./LineUp.module.scss";

interface LineUpProps {
  hideHeader?: boolean;
}

export function LineUp({ hideHeader = false }: LineUpProps) {
  const innerContent = (
    <>
      {!hideHeader && (
        <div className={styles.lineup__header}>
          <h2 className={styles.lineup__title}>COFFEE BEANS</h2>
          <p className={styles.lineup__subtitle}>コーヒー豆 ラインナップ</p>
        </div>
      )}
      <ul className={styles.lineup__grid}>
        {lineupItems.map((item, index) => (
          <li key={item.slug} className={styles.lineup__item}>
            <Link
              href={`/lineup/${item.slug}/`}
              className={styles.lineup__card}
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
                </div>
              </div>

              {/* テキスト */}
              <div className={styles.lineup__cardBody}>
                <span className={styles.lineup__cardNumber}>
                  {String(index + 1).padStart(2, "0")}
                </span>
                {item.highlight && (
                  <span className={styles.lineup__highlight}>{item.highlight}</span>
                )}
                <h3 className={styles.lineup__itemNameEn}>{item.nameEn}</h3>
                <h4 className={styles.lineup__itemName}>{item.name}</h4>
                <p className={styles.lineup__itemDesc}>{item.desc}</p>
                <div className={styles.lineup__cardFooter}>
                  <span className={styles.lineup__itemPrice}>{item.price}</span>
                  <span className={styles.lineup__cardLink}>
                    詳細を見る <span aria-hidden="true">→</span>
                  </span>
                </div>
              </div>
            </Link>
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
    </>
  );

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
      {hideHeader ? (
        // 商品一覧ページ本体ではスクロール連動のフェードインを使わない。
        // whileInViewはページ読み込み直後にすでに画面内にある要素でも
        // モバイルSafari等で初回判定が発火せず、スクロールするまで
        // 非表示（opacity:0）のままになることがあるため。
        <div className={styles.lineup__inner}>{innerContent}</div>
      ) : (
        <FadeInSection className={styles.lineup__inner}>{innerContent}</FadeInSection>
      )}
    </section>
  );
}
