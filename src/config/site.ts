// TAKOYAKI PROJECT — サイト設定
// GitHub Pages（プロジェクトサイト）への移行を見据えた一元設定です。
// 移行時に編集するのは基本この1ファイルだけで済むようにしています。

/**
 * 公開先のベースパス。
 *
 * - Lovableプレビュー / 独自ドメイン / username.github.io（ユーザーサイト）の場合: "" のまま
 * - GitHub Pages のプロジェクトサイト（例: https://takoyaki-project.github.io/portfolio/）の場合:
 *   "/portfolio" のように "/リポジトリ名" を設定してください（末尾スラッシュなし）。
 *
 * ビルド時に環境変数 VITE_BASE_PATH があればそれを優先します。
 */
export const BASE_PATH: string = (import.meta.env.VITE_BASE_PATH ?? "").replace(/\/$/, "");

/**
 * 公開サイトの絶対URL（OGP・sitemap・canonical 用）。
 * 移行先が決まったら設定してください（末尾スラッシュなし）。
 * 例: "https://takoyaki-project.github.io/portfolio"
 */
export const SITE_URL: string = (
  import.meta.env.VITE_SITE_URL ?? "https://takoyaki-project.github.io"
).replace(/\/$/, "");

/**
 * サイト内のアセット（favicon・画像など）への相対パスに BASE_PATH を付与します。
 * 例: asset("/favicon.svg") → "/portfolio/favicon.svg"
 *
 * 注意: 外部URL（http で始まるもの）はそのまま返します。
 */
export function asset(path: string): string {
  if (/^https?:\/\//.test(path)) return path;
  const clean = path.startsWith("/") ? path : `/${path}`;
  return `${BASE_PATH}${clean}`;
}

/** 絶対URLを組み立てます（OGP画像など）。SITE_URL 未設定時は相対パスを返します。 */
export function absoluteUrl(path: string): string {
  const rel = asset(path);
  return SITE_URL ? `${SITE_URL}${rel.startsWith("/") ? rel : `/${rel}`}` : rel;
}
