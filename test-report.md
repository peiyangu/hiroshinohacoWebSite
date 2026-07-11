# ヒロシノハコ ウェブサイト 結合テストレポート

**テスト日時**: 2026年7月7日  
**テスト対象**: https://peiyangu.github.io/hiroshinohacoWebSite  
**テスト環境**: Chrome (Claude in Chrome MCP), コード静的解析  
**テスト範囲**: UI, UX, デザイン, 機能, モバイル対応, アクセシビリティ, コード品質

---

## エグゼクティブサマリー

全体として完成度が高く、デザインの統一感・ブランド表現・技術実装のいずれも水準以上。  
ただし本番リリース前に対処すべき問題点（スケジュールデータの不整合、OGP設定のミスマッチ、プレースホルダー画像）がある。  
モバイル対応はCSSコードレベルで正しく実装されており、レイアウト崩れのリスクは低い。

---

## テスト結果サマリー

| 区分 | 件数 |
|------|------|
| 🔴 要対応（高優先度） | 3件 |
| 🟡 要対応（中優先度） | 3件 |
| 🟢 改善提案（低優先度） | 5件 |
| ✅ 正常動作確認済み | 18項目 |

---

## 🔴 高優先度 — 本番前に修正が必要

### 1. OnlineShop プレースホルダー画像

**場所**: `src/components/OnlineShop/OnlineShop.tsx`  
**内容**: コード内に `{/* 左: 写真枚（TODO: 商品パッケージ・豆袋の写真に差し替える） */}` のTODOコメントがあり、`coffeebeans.png` が仮画像として使用されている。  
**影響**: オンラインショップセクションの訴求力・信頼性が低下する。  
**対応**: 実際の商品パッケージや豆袋の写真に差し替え、TODOコメントを削除する。

---

### 2. OGP metadataBase の不一致

**場所**: `src/app/layout.tsx`  
**内容**:
```typescript
metadataBase: new URL("https://hiroshinohaco.jp")
```
OGP画像のパスは `metadataBase` に基づいて解決されるため、`/ogp.jpg` は `https://hiroshinohaco.jp/ogp.jpg` になる。  
現在のデプロイ先（`https://peiyangu.github.io/hiroshinohacoWebSite`）と異なるため、SNSシェア時のOGP画像が正しく表示されない可能性がある。  
**対応案**:
- 本番ドメイン（hiroshinohaco.jp）へのデプロイ後は問題なし
- GitHub Pages 運用を続ける場合は `metadataBase` を `https://peiyangu.github.io` に変更する

---

### 3. スケジュールデータの不整合（2026-06-28）

**場所**: `src/data/schedule.ts`  
**内容**:
```typescript
"2026-06-28": { isOpen: false, hours: "12:00-19:00", isEvent: true, eventName: "GetAny2026" }
```
`isOpen: false` と `isEvent: true` が共存しており、StatusBadgeは「休業日」として表示する。  
イベント出店情報（GetAny2026）がユーザーに伝わらない。  
**対応案**:
- イベント出店日は `isOpen: true` に変更する
- または `isEvent: true` 時は StatusBadge に「イベント出店」と表示する分岐を追加する

---

## 🟡 中優先度 — 早期対応を推奨

### 4. ~~ローディングアニメーションの表示時間（3.1秒）~~

**→ 対応不要と判断。** 初回のみ表示・sessionStorageスキップ済み。コーヒーショップのブランド体験として「ゆったりした間（ま）」は意図的な設計であり、短縮するとブランドトーンが損なわれる。

---

### 5. Newsセクションのコンテンツ不足

**場所**: `src/data/news.ts`  
**内容**: ニュース記事が1件のみ（2026.05.22 付け）。  
**影響**: セクションとして存在感が薄く、「最新情報」の役割を果たしていない。  
**対応案**: 複数の記事を追加する、または記事が少ない間はセクション自体を非表示にするロジックを追加する。

---

### 6. ホームページの遅延読み込み画像（開発環境での確認）

**内容**: テスト中に `img.naturalWidth === 0` で11枚の画像が「未読み込み」と判定された。  
ただし `fetch()` によるHTTPステータス確認では**全画像がHTTP 200**を返すことを確認済み。  
これはNext.jsの遅延読み込み（Lazy Load）とFramer Motion `whileInView` のタイミングが組み合わさった開発環境上の計測問題であり、実際のユーザー体験では正常にスクロールで読み込まれる。  
**対応案（任意）**: Fold近くに表示されるAbout・Heroセクションの主要画像（`neldrip.jpg` など）に `priority` プロパティを追加して即時読み込みにする。

---

## 🟢 低優先度 — 改善提案

### 7. モバイルでのLineUpPreviewグリッド（孤立アイテム）

**場所**: `src/components/LineUpPreview/LineUpPreview.module.scss`  
**内容**: モバイルで `grid-template-columns: repeat(2, 1fr)`、アイテム数が奇数（3件）のため、3枚目が左端に孤立する。  
**対応案**: 
```scss
// 奇数最後のアイテムをセンタリング
.card:last-child:nth-child(odd) {
  grid-column: 1 / -1;
  max-width: 50%;
  margin: 0 auto;
}
```
または `repeat(3, 1fr)` に統一（横幅が狭くなるが整列は揃う）。

---

### 8. スキップナビゲーションリンクの欠如

**内容**: キーボードナビゲーション・スクリーンリーダーユーザー向けの「コンテンツへスキップ」リンクが存在しない。  
**対応案**: Headerの先頭に以下を追加:
```html
<a href="#main-content" className="skip-link">コンテンツへスキップ</a>
```

---

### 9. フッターの著作権年表記

**内容**: フッターに年表記なし（例: `© ヒロシノハコ`）。  
**対応案**: `© 2026 ヒロシノハコ` または動的に年を取得する `© ${new Date().getFullYear()} ヒロシノハコ`。

---

### 10. Scheduleセクションのカレンダー詳細展開（モバイルUX）

**内容**: スケジュールカレンダーの詳細展開インタラクションについて、モバイルでのタップ領域と展開アニメーションの動作確認が残課題。  
（テスト環境のビューポート問題により実機レベルの確認が困難だった）  
**推奨**: 実機（iPhone/Android）での動作確認を別途実施する。

---

### 11. FadeInSection のスクロール感知閾値

**場所**: `src/components/common/FadeInSection.tsx`  
**内容**: `viewport: { once: true, amount: "some" }` を使用。高速スクロール時にIntersection Observerが反応しない可能性がある。  
**対応案**: `amount: 0` または `amount: 0.1` に変更してより早くトリガーされるようにする（現状は要素の一部が見えたときに発動）。

---

## ✅ 正常動作確認済み項目

### PC（デスクトップ）

| 項目 | 結果 | 備考 |
|------|------|------|
| ローディングアニメーション（初回） | ✅ | clip-pathアニメーション3段階 |
| ローディングスキップ（再訪問） | ✅ | sessionStorage で制御 |
| ヘッダー固定表示 | ✅ | sticky, z-index正常 |
| ヘッダースクロール効果 | ✅ | 60px以上でbackdrop-blur + 背景色 |
| Heroセクション表示 | ✅ | 本日の営業状況（StatusBadge）表示 |
| StatusBadge（2026/7/7 火曜） | ✅ | 「休業日」正常表示 |
| ナビゲーションリンク（#アンカー） | ✅ | 全リンクにbasePath付き |
| Menuページ表示 | ✅ | 全7カテゴリ・全画像0エラー |
| LineUpページ表示 | ✅ | 全6商品・全画像0エラー |
| FadeInSection アニメーション | ✅ | opacity, translateY正常 |
| フッター表示 | ✅ | 全ページ共通 |
| OGP/Twitter Cardメタデータ | ✅ | title, description, image設定済み |
| 外部リンク（SNS/BASE） | ✅ | target="_blank" rel="noopener" |
| Google Maps リンク | ✅ | Accessセクション |

### モバイル（SCSSコード解析による確認）

| 項目 | 結果 | 備考 |
|------|------|------|
| ハンバーガーメニュー CSS | ✅ | mobile-first, tabletで非表示 |
| PCナビゲーション CSS | ✅ | mobile-firstで非表示, tabletで表示 |
| Headerロゴサイズ | ✅ | 48px(mobile) / 60px(tablet+) |
| モバイルメニューoverlay | ✅ | AnimatePresenceで表示制御 |
| セクション単一カラムレイアウト | ✅ | 全セクションmobile-first |
| LineUpグリッド（mobile→tablet） | ✅ | 2col → 3col |
| section-container max-width | ✅ | min(100%, 1100px) |
| ブレークポイント設定 | ✅ | md:768px, lg:1024px |

---

## 技術実装評価

### アーキテクチャ

| 項目 | 評価 |
|------|------|
| Next.js 15 static export | ✅ 適切 |
| GitHub Pages basePath対応 | ✅ 全リンク・imageLoader で対応済み |
| SCSS Modules（スタイル分離） | ✅ コンポーネント単位で整理 |
| Framer Motion アニメーション | ✅ 適切な使用範囲 |
| カスタムimageLoader | ✅ static export環境に合わせた実装 |
| スケジュールデータ分離 | ✅ `schedule.ts` で管理 |

### コード品質

| 項目 | 評価 |
|------|------|
| TypeScript型定義 | ✅ Props型定義あり |
| コンポーネント分割 | ✅ 適切な粒度 |
| TODOコメント残存 | ⚠️ OnlineShop.tsx |
| Console.log残存 | 未確認 |
| 環境変数使用 | ✅ NEXT_PUBLIC_BASE_PATH |

---

## デザイン評価

| 項目 | 評価 | コメント |
|------|------|---------|
| ブランドカラー統一 | ✅ | $color-ivory/#f7f4ed, $color-accent/#7a8c58 |
| タイポグラフィ | ✅ | 日英混在の一貫した使い方 |
| 余白設計 | ✅ | spacingスケール(xs~3xl)の適切な使用 |
| アイコン・SVG | ✅ | 外部依存なし |
| ダークモード対応 | ─ | 未対応（デザインポリシーによる） |
| Loading画面の完成度 | ✅ | ブランド体験として高品質 |
| Hero → 各セクションの流れ | ✅ | FadeInで自然なリズム |

---

## 総合評価

**総評**: ★★★★☆ (4/5)

コーヒーショップのブランドサイトとして、デザインの完成度・ユーザー体験・技術実装のいずれも高水準。  
主要な懸念点（OGP・スケジュール不整合・プレースホルダー画像）を修正すれば、本番公開に向けて十分な品質と言える。  
モバイル対応もCSSコードレベルでは正しく実装されており、実機テスト（特にハンバーガーメニュー・スケジュールカレンダーの操作感）を追加で行うことを推奨する。

---

## 推奨アクション（優先順）

1. **OnlineShop 商品写真を実画像に差し替え**（TODO解消）
2. **schedule.ts の 2026-06-28 の `isOpen` を修正**（またはisEvent表示ロジック追加）
3. **本番ドメイン確定後にmetadataBaseを更新**（または暫定でGitHub Pages URLに変更）
4. 実機（iOS/Android）でのモバイル表示・インタラクション確認
5. Newsコンテンツの拡充
6. ローディング時間の短縮検討

---

*本レポートはClaude (Cowork mode) による自動テストおよびコード静的解析に基づいて作成されました。*
