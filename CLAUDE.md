# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## プロジェクト概要

BugFix LLC のコーポレートサイト、および同社が運営する未経験者向け AI プログラミングスクール「SiiD」のランディングページ群を含む**静的サイト**。Vite + EJS で複数の HTML ページをビルドし、`bug-fix.org`（GitHub Pages、`CNAME` 参照）へ公開される。

## コマンド

```bash
npm run dev      # Vite 開発サーバ（BrowserSync 付き、LAN IP でホスト）
npm run build    # src/pages 配下の全 *.html を dist/ へビルド
npm run preview  # ビルド成果物のプレビュー
```

テストランナーやリンタは未導入。

## アーキテクチャ

`vite.config.js` がこのプロジェクトの設計の中心。読むべき要点：

- **マルチページ構成**: `root` は `src/pages/`。`globSync` で `src/pages/**/*.html` を走査し、見つかった HTML すべてを自動的にビルドエントリにする。**新しいページを追加するには `src/pages/` 配下に `.html` を置くだけ**で、設定変更は不要。出力先は `dist/`、`publicDir` は `public/`。

- **EJS テンプレーティング** (`vite-plugin-ejs`): `src/data/mainData.js` が `common` / `works` / `voices` / `links` をまとめて全 EJS にグローバル注入する。ページ間共通の文言・データはこれらの `src/data/*.js` を編集する。

- **ページの書き方**: 各ページ HTML は先頭の `<% ... %>` ブロックでそのページ固有のローカルデータ（`head`, `hero`, `about` など）を JS オブジェクトとして定義し、`<%- include('../modules/.../_xxx.html', { 名前: データ }) %>` でパーシャルを読み込んで組み立てる（`src/pages/index.html` が代表例）。include のパスはエントリ HTML から見た相対パス。

- **パーシャル** (`src/modules/`):
  - `meta/` … `_head.html`（`<!DOCTYPE>`〜`<head>`、GTM 等を含む）、`_foot.html`、`_analytics*.html`
  - `layout/` … `_header.html`, `_footer.html`
  - `components/` … `_hero.html` 等の再利用パーツ。`ai-lp/`, `lp/`, `lp-1/` などキャンペーン LP 用のサブディレクトリを持つ
  - `_head.html` が HTML 冒頭を出力するため、各ページはこれを最初に include する。

- **`moveScript` プラグイン** (`vite.config.js` 内で自作): ビルド時に `<head>` 内の `assets` を含む `.js` ある `<script>` を JSDOM で `<body>` 末尾へ移動し、描画パフォーマンスを最適化する。head に置いたスクリプトが body 末尾に出ることを前提に考えること。

- **スタイル** (`src/pages/assets/styles/`): Sass。`main.scss` がエントリで、`_const`/`_function`/`_mixins`/`_theme`/`_base` の基盤と `layout/` `components/` `utilities/` を取り込む。SiiD LP 専用は `siid-lp/main.scss`。

- **スクリプト** (`src/pages/assets/scripts/`): ページ別の素の JS（`index.js`, `siid.js`, `voices.js`, `gifts-*.js`, `moshimo.js` 等）と共通の `main.js`、再利用モジュール `modules/`（`hero.js`, `tab.js`, `stream.js`）。アニメーションは `animejs`。

## 規約

- ドキュメントなどの成果物は日本語で記述する。
- 開発サーバはローカル IP でホストされる（`vite.config.js` で `usePolling: true`）。実機確認を想定した構成。
