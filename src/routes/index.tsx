import { createFileRoute } from "@tanstack/react-router";
import { LogoMark, LogoHorizontal } from "@/components/Logo";
import { WorkCard } from "@/components/WorkCard";
import { works, featuredWorks, CATEGORIES, externalLinks } from "@/data/works";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "TAKOYAKI PROJECT — 小さな困りごとを、アプリにする。" },
      {
        name: "description",
        content:
          "TAKOYAKI PROJECT は、日常や仕事、地域活動の中で見つけた小さな課題を、AIと一緒にWebアプリとして形にしていく制作プロジェクトの作品一覧です。",
      },
      { property: "og:title", content: "TAKOYAKI PROJECT" },
      {
        property: "og:description",
        content: "小さな困りごとを、AIと一緒にWebアプリにしていく個人プロジェクトの展示室。",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

function Header() {
  return (
    <header className="sticky top-0 z-30 border-b border-border bg-background/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <a href="#top" className="flex items-center">
          <LogoHorizontal className="h-10 text-lg" />
        </a>
        <nav className="hidden items-center gap-7 text-sm font-medium text-foreground/75 sm:flex">
          <a href="#about" className="transition-colors hover:text-primary">About</a>
          <a href="#featured" className="transition-colors hover:text-primary">代表作</a>
          <a href="#works" className="transition-colors hover:text-primary">作品一覧</a>
          <a
            href={externalLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-primary"
          >
            GitHub
          </a>
        </nav>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden border-b border-border">
      <div className="absolute inset-0 bg-dotted opacity-50" aria-hidden />
      <div className="absolute inset-x-0 top-0 h-64 bg-gradient-to-b from-accent/40 to-transparent" aria-hidden />
      <div className="relative mx-auto max-w-6xl px-5 py-20 sm:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <LogoMark className="mx-auto mb-6 h-20 w-auto sm:h-24" />
          <p className="font-display text-sm font-medium uppercase tracking-[0.25em] text-primary">
            TAKOYAKI PROJECT
          </p>
          <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl">
            小さな困りごとを、<br className="sm:hidden" />アプリにする。
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">
            TAKOYAKI PROJECT は、日常や仕事、地域活動の中で見つけた小さな課題を、
            AIと一緒にWebアプリとして形にしていく制作プロジェクトです。
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href="#featured"
              className="inline-flex items-center justify-center rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              作品を見る
            </a>
            <a
              href={externalLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-md border border-border bg-card px-5 py-2.5 text-sm font-medium transition-colors hover:bg-secondary"
            >
              GitHubを見る
            </a>
            <a
              href={externalLinks.note}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-md border border-border bg-card px-5 py-2.5 text-sm font-medium transition-colors hover:bg-secondary"
            >
              noteを見る
            </a>
          </div>
 </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="border-b border-border bg-card">
      <div className="mx-auto max-w-3xl px-5 py-16 sm:py-20">
        <h2 className="text-2xl font-semibold">About</h2>
        <div className="mt-5 space-y-4 text-base leading-relaxed text-muted-foreground">
          <p>
            TAKOYAKI PROJECT を運営しているのは、40代の主婦・けいこです。専業主婦歴13年、プログラミング未経験。
          </p>
          <p>
            「席替えって、意外と大変らしい」「バザーのレジ、もっと手軽にできないかな」——そんな家族や周りの人の小さなつぶやきを、AIと一緒にWebアプリとして形にしています。
          </p>
          <p>
            完成度の高いものだけでなく、試作や検証中のアイデアも制作記録として掲載しています。開発の裏側は note、ソースコードは GitHub で公開しています。
          </p>
        </div>
              </div>
    </section>
  );
}
function Featured() {
  return (
    <section id="featured" className="border-b border-border">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:py-20">
        <div className="flex items-end justify-between">
          <div>
            <p className="font-display text-sm font-medium uppercase tracking-widest text-primary">
              Featured
            </p>
            <h2 className="mt-1 text-2xl font-semibold">代表作</h2>
          </div>
        </div>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {featuredWorks.map((work) => (
            <WorkCard key={work.id} work={work} featured />
          ))}
        </div>
      </div>
    </section>
  );
}

function WorksByCategory() {
  return (
    <section id="works" className="border-b border-border bg-secondary/40">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:py-20">
        <p className="font-display text-sm font-medium uppercase tracking-widest text-primary">
          Works
        </p>
        <h2 className="mt-1 text-2xl font-semibold">ジャンル別 作品一覧</h2>
        <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
          仕事・学校・生活・創作など、テーマごとに制作したアプリをまとめています。複数のテーマにまたがる作品は、それぞれのジャンルに登場します。
        </p>

        <div className="mt-12 space-y-16">
          {CATEGORIES.map((category) => {
            const items = works.filter((w) => w.categories.includes(category));
            if (items.length === 0) return null;
            return (
              <div key={category}>
                <div className="mb-6 flex items-center gap-3">
                  <h3 className="text-xl font-semibold">{category}</h3>
                  <span className="h-px flex-1 bg-border" />
                  <span className="text-sm text-muted-foreground">{items.length}件</span>
                </div>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {items.map((work) => (
                    <WorkCard key={`${category}-${work.id}`} work={work} />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-card">
      <div className="mx-auto max-w-6xl px-5 py-14">
        <div className="flex items-center">
          <LogoHorizontal className="h-9 text-base" />
        </div>
        <p className="mt-3 font-display text-sm italic text-muted-foreground">
          The development never ends.
        </p>
        <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground">
          個人制作のポートフォリオです。各アプリは試作・実験的なものを含みます。
        </p>
        <div className="mt-6 flex flex-wrap gap-4 text-sm">
          <a
            href={externalLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            GitHub
          </a>
          <a
            href={externalLinks.note}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            note
          </a>
        </div>
        <p className="mt-10 text-xs text-muted-foreground">
          © {new Date().getFullYear()} TAKOYAKI PROJECT
        </p>
      </div>
    </footer>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <About />
        <Featured />
        <WorksByCategory />
      </main>
      <Footer />
    </div>
  );
}
