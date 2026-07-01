// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, nitro (build-only using cloudflare as a default target),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// Lovable のサンドボックス（プレビュー/エディタ）内かどうかを判定します。
const isLovableSandbox =
  process.env.LOVABLE_SANDBOX === "1" || !!process.env.DEV_SERVER__PROJECT_PATH;

// GitHub Pages 向けの静的書き出し設定。
// - Lovable サンドボックス内: 従来どおり SSR エントリ（src/server.ts）を使用（プレビューのため）。
// - 外部（GitHub Actions など）: Nitro を無効化し、TanStack Start のプリレンダーで
//   純粋な静的サイトを dist/client に書き出します。
export default defineConfig(
  isLovableSandbox
    ? {
        tanstackStart: {
          // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
          server: { entry: "server" },
        },
      }
    : {
        tanstackStart: {
          // 全ページを HTML にプリレンダーして静的サイト化します。
          prerender: { enabled: true, crawlLinks: true },
          pages: [{ path: "/" }, { path: "/sitemap.xml" }],
        },
        // GitHub Pages は静的配信のみ。Nitro（サーバー）を無効化して純静的出力にします。
        nitro: false,
      },
);
