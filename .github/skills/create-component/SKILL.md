---
name: create-component
description: 'ヒロシノハコ公式サイトのコンポーネントを新規作成・修正・スタイル調整する。Use when: コンポーネントを新規追加する、ローディング画面を作る、フォントを変える、余白を調整する、アニメーションを追加する、既存のUIを修正する、スタイルを変更する。'
argument-hint: '指示の内容（例: ローディング画面を作って / Heroのフォントを小さく）'
---

# ヒロシノハコ – コンポーネント実装ガイド

このプロジェクトはブランドの「空気感」を大切にしたNext.js（App Router）+ SCSS Moduleサイト。  
指示に従って新規作成・修正を行う前に、必ずこのガイドのルールを守ること。

---

## 作業全般のルール

### やること
- 既存コンポーネントを編集するときは、まず対象ファイルを読んでから変更する
- SCSS の変更は `<Name>.module.scss` のみ。グローバルスタイルは触らない
- 変更後は `get_errors` でエラーがないか確認する
- ユーザーに確認を取ってから編集を実施する

### 禁止事項（絶対に守る）
- `style={{}}` などインラインスタイル禁止
- カラー・スペース・フォントの直書き禁止（例: `color: #3f3a34` → `color: $color-text-main`）
- `export default` 禁止（`export function` を使う）
- グローバルセレクタ（`h1 { }`, `p { }` など）での直接スタイル禁止

---

## 使用できる変数・mixin（`variables.scss` / `mixins.scss`）

### カラー
| 変数 | 値 | 用途 |
|---|---|---|
| `$color-ivory` | `#f7f4ed` | 背景メイン |
| `$color-surface` | `#fcfaf6` | サーフェス背景 |
| `$color-text-main` | `#3f3a34` | 本文テキスト |
| `$color-text-sub` | `#6e665f` | サブテキスト・キャプション |
| `$color-line` | `#dfd8cf` | ボーダー・区切り線 |

### スペース
| 変数 | 値 |
|---|---|
| `$space-xs` | 0.375rem |
| `$space-sm` | 0.75rem |
| `$space-md` | 1.25rem |
| `$space-lg` | 2rem |
| `$space-xl` | 3rem |
| `$space-2xl` | 4rem |
| `$space-3xl` | 6rem |

### フォント
| 変数 | 用途 |
|---|---|
| `$font-heading` | 見出し（Playfair Display / 游明朝系） |
| `$font-body` | 本文（Noto Sans JP） |

### mixin
| mixin | 説明 |
|---|---|
| `@include section-container;` | 最大幅960px・中央揃えのラッパー |
| `@include tablet { }` | `min-width: 768px` のメディアクエリ |
| `@include desktop { }` | `min-width: 1024px` のメディアクエリ |

---

## 新規コンポーネントを作る場合

### ファイル構成
```
src/components/<Name>/
├── <Name>.tsx
└── <Name>.module.scss
```

### TSX の基本形
```tsx
import styles from "./<Name>.module.scss";
// スクロールフェードが必要なときだけ追加
// import { FadeInSection } from "@/components/common/FadeInSection";

export function <Name>() {
  return (
    <section className={styles.<block>}>
      <div className={styles.<block>__inner}>
        <h2 className={styles.<block>__title}></h2>
      </div>
    </section>
  );
}
```

### SCSS の基本形
```scss
@use "@/styles/variables" as *;
@use "@/styles/mixins" as *;

.<block> {
  padding: $space-3xl $space-md;
}

.<block>__inner {
  @include section-container;
}

.<block>__title {
  font-family: $font-heading;
  color: $color-text-main;
}
```

- クラス名は BEM Module方式: `<block>__要素`
- ブロック名は kebab-case（例: `StoreInfo` → `store-info`）
- 画像には必ず `next/image` の `<Image>` を使う

### ページへの組み込み
作成後、`src/app/page.tsx`（または対象ページ）に追加する：
```tsx
import { <Name> } from "@/components/<Name>/<Name>";
// JSX 内に <<Name> /> を追加
```

---

## 既存コンポーネントを修正する場合

1. 対象の `.tsx` と `.module.scss` を読む
2. 変更箇所を特定してユーザーに確認する
3. 編集を実施する
4. `get_errors` でエラーがないか確認する

---

## ブランド設計思想（迷ったときの判断基準）

> 「派手さより空気感」

- **余白を惜しまない** — セクション間は `$space-2xl`〜`$space-3xl` を基準に
- **アニメーションは最小限** — `FadeInSection`（スクロールフェード）程度が上限
- **テキストは少なく・読みやすく** — 長文より短文・改行より余白
- **画像を主役に** — テキストより画像が先。コピーは添える程度

---

## よくある実装パターン

### フォントサイズを変える
```scss
// 変更対象のクラスに font-size を追記
.<block>__title {
  font-size: clamp(1.5rem, 4vw, 2.5rem); // 可変サイズ推奨
}
```

### アニメーションを追加する
```tsx
// FadeInSection でラップするだけ
import { FadeInSection } from "@/components/common/FadeInSection";

<FadeInSection className={styles.<block>__content}>
  {/* コンテンツ */}
</FadeInSection>
```

### ローディング画面
- 画面全体を覆う `position: fixed` のオーバーレイ
- ブランドカラー（`$color-ivory`）を背景に
- アニメーションは控えめ（フェードアウトのみ推奨）
- Framer Motion の `AnimatePresence` + `motion.div` で実装

```tsx
"use client";
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import styles from "./<Name>.module.scss";

export function <Name>() {
  const [visible, setVisible] = useState(true);
  useEffect(() => {
    const t = setTimeout(() => setVisible(false), 1800);
    return () => clearTimeout(t);
  }, []);
  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className={styles.<block>}
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {/* ロゴ等 */}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
```
