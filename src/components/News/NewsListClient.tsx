"use client";

import { useState } from "react";
import { newsData } from "@/data/news";
import styles from "./News.module.scss";

const ITEMS_PER_PAGE = 2;

export const NewsListClient = () => {
  const [page, setPage] = useState(0);
  const totalPages = Math.ceil(newsData.length / ITEMS_PER_PAGE);
  const items = newsData.slice(page * ITEMS_PER_PAGE, (page + 1) * ITEMS_PER_PAGE);

  return (
    <>
      <ul className={styles.list}>
        {items.map((item) => (
          <li key={item.id} className={styles.item}>
            <div className={styles.itemBody}>
              <div className={styles.meta}>
                <span className={styles.date}>{item.date}</span>
                <span className={styles.category}>{item.category}</span>
              </div>
              <p className={styles.newsTitle}>{item.title}</p>
            </div>
          </li>
        ))}
      </ul>
      {totalPages > 1 && (
        <div className={styles.pagination}>
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              className={`${styles.pageBtn} ${i === page ? styles.pageBtnActive : ""}`}
              onClick={() => setPage(i)}
              aria-label={`ページ ${i + 1}`}
            >
              {i + 1}
            </button>
          ))}
        </div>
      )}
    </>
  );
};
