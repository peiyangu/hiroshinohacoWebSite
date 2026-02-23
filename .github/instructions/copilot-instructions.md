---
description: Describe when these instructions should be loaded
# applyTo: 'Describe when these instructions should be loaded' # when provided, instructions will automatically be added to the request context when the pattern matches an attached file
---
Provide project context and coding guidelines that AI should follow when generating code, answering questions, or reviewing changes.

# 前提条件
- 返答は日本語で返してください。
- コード生成の際は、プロジェクトのコーディング規約に従ってください。
- エラーが起きていないか都度確認してください
- コードを編集する際はユーザーに確認を取るようにしてください。
- serenaMCPを使用して解析してから実装するようにしてください。（キャッシュが効いている可能性があるので適宜解析し直すこと）

# ヒロシノハコ 公式サイト制作 – GitHub Copilot Instructions

## プロジェクト概要

本プロジェクトは「ヒロシノハコ」ブランドの世界観を伝える公式サイトを制作する。
目的はオンライン販売強化ではなく、
- ブランドイメージ向上
- 世界観の可視化
- 来店・SNS導線強化
である。

オンラインショップの購入処理はBASE側で行う。
本サイトでは商品紹介と外部リンクのみ実装する。

## 開発環境
- IDE: VSCode
- Node.js: LTS
- Framework: Next.js（App Router）
- Language: TypeScript
- Animation: Framer Motion
- Style: SCSS（完全分離）

## 設計思想
- 余白
- 静けさ
- 温もり
- ナチュラル
- ご縁
- やさしさ
- 果実味のあるコーヒー

派手さよりも「空気感」を重視する。

## コーディングルール（厳守）
### 完全分離構造
- JSX：構造のみ
- SCSS：スタイルのみ
- TypeScript：ロジックのみ
- インラインCSS禁止
- style属性禁止
- グローバル汚染禁止

### CSS設計
- BEMまたはModule方式
- 変数は variables.scss で管理
- カラーの直書き禁止

### 見出しフォント
上品で柔らかい印象を出すため：
"Playfair Display", serif
または
"Yu Mincho", "Hiragino Mincho ProN", serif

### 本文フォント
"Noto Sans JP", sans-serif
理由：
ロゴがミニマルなので本文は可読性重視
全体は柔らかく、しかし洗練された印象に

### ディレクトリ構成
/src
 ├── app
 │    ├── page.tsx
 │    ├── layout.tsx
 │
 ├── components
 │    ├── Hero
 │    ├── Concept
 │    ├── News
 │    ├── Schedule
 │    ├── Menu
 │    ├── OnlineShop
 │    ├── Access
 │    ├── Footer
 │
 ├── styles
 │    ├── globals.scss
 │    ├── variables.scss
 │    ├── mixins.scss
 │
 ├── data
 │    ├── news.ts
 │    ├── schedule.ts

### アニメーション方針
- スクロール時フェードイン
- ゆるやかな下からの浮き上がり
- hoverは控えめ
- トランジションは0.6s前後

NG：
- バウンス
- 派手なズーム
- 強いパララックス
- ブランドの静けさを守ること。

## レスポンシブ設計
モバイルファースト
ブレークポイント：
- 768px
- 1024px

余白は広めに設計する。

## セクション構成
### Hero
ロゴ中央配置
背景はアイボリー
ゆるやかなフェードイン
### Concept
テキスト重視
行間広め
最大幅は狭め（読み物感）

文言：
苦いコーヒーが苦手な店主が焙煎する、 
苦味が少なく、豆本来の果実味を感じるコーヒーと古き良きネルドリップのありそうで無
かった組み合わせ。 
慌ただしい毎日にホッと一息をする 
コーヒーのある暮らしを 
ご縁でひろがるコーヒーの和を大切にしています。 
Warm break with peace of mind 

### News
データ管理
更新しやすい設計

### Schedule
JSON管理
将来的にInstagram連携可能構造

### OnlineShop
「購入はこちら」ボタンのみ
BASEへ外部リンク
iframe禁止

## SEO方針
- metadata設定
- OGP対応
- 画像は最適化
- semanticタグ使用

# 完成イメージ

「ナチュラルで洗練された、余白のある静かなサイト」

カフェというより
“コーヒーと時間を大切にするブランドサイト”

を目指す。