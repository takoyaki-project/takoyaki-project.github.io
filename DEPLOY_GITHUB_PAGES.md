# GitHub Pages 公開手順

このサイトは **ユーザーサイト** `https://takoyaki-project.github.io/` で公開できるよう、
静的書き出し（プリレンダー）と GitHub Actions による自動デプロイに対応済みです。

## 前提

- リポジトリ名: `takoyaki-project.github.io`
- 公開URL: `https://takoyaki-project.github.io/`
- `BASE_PATH`: 空（サブパスなし）
- `SITE_URL`: `https://takoyaki-project.github.io`

## 公開までの手順

1. このコードを GitHub リポジトリ `takoyaki-project.github.io` に push します
   （デフォルトブランチは `main`）。
2. GitHub リポジトリの **Settings → Pages → Build and deployment → Source** を
   **「GitHub Actions」** に設定します。
3. `main` に push すると `.github/workflows/deploy.yml` が自動で走り、
   ビルド → デプロイされます。数分後に `https://takoyaki-project.github.io/` で公開されます。

## 仕組み

- ローカル/GitHub Actions で `bun run build` を実行すると、Nitro（サーバー）を無効化し、
  TanStack Start のプリレンダーで純粋な静的サイトを **`dist/client`** に書き出します。
- ワークフローが `dist/client` に `.nojekyll`（Jekyll 無効化）と `404.html`
  （クライアントルーティングのフォールバック）を追加してから公開します。
- Lovable のプレビュー/エディタ内では従来どおり SSR で動作します
  （`vite.config.ts` がサンドボックスを検出して切り替えます）。

## 設定を変えたいとき

- ベースパス・公開URL は `src/config/site.ts`（既定値）または
  ワークフローの `VITE_BASE_PATH` / `VITE_SITE_URL` で変更できます。
- 別リポジトリ名（プロジェクトサイト）に移す場合は `VITE_BASE_PATH=/リポジトリ名` を設定してください。
- 作品の外部リンク・画像URL（`src/data/works.ts`）は絶対URL文字列で管理しているのでそのまま動作します。
