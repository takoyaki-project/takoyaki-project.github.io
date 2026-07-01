import type { Work, WorkStatus } from "@/data/works";
import { cn } from "@/lib/utils";
import { LogoMark } from "@/components/Logo";

const statusStyles: Record<WorkStatus, string> = {
  公開中: "bg-primary/10 text-primary border-primary/20",
  試作公開中: "bg-accent text-accent-foreground border-accent-foreground/15",
  MVP: "bg-mint/40 text-mint-foreground border-mint-foreground/20",
  プロトタイプ: "bg-grape/40 text-grape-foreground border-grape-foreground/20",
  非公開デモ: "bg-muted text-muted-foreground border-border",
  アイデア保管中: "bg-secondary text-secondary-foreground border-border",
};

export function StatusBadge({ status }: { status: WorkStatus }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs font-medium",
        statusStyles[status],
      )}
    >
      <span className="size-1.5 rounded-full bg-current opacity-70" />
      {status}
    </span>
  );
}

function WorkImage({ work, featured }: { work: Work; featured?: boolean }) {
  return (
    <div
      className={cn(
        "relative flex w-full items-center justify-center overflow-hidden border-b border-border",
        featured ? "aspect-[16/9]" : "aspect-[16/10]",
      )}
    >
      {work.imageUrl ? (
        // 画像URLは works.ts の imageUrl で差し替え可能（GitHubのOGP画像やスクリーンショット）
        <img
          src={work.imageUrl}
          alt={`${work.title} のイメージ`}
          loading="lazy"
          className="size-full object-cover"
        />
      ) : (
        // 仮表示プレースホルダー：画像未設定時は淡いグラデーション＋ロゴマーク
        <div className="relative flex size-full items-center justify-center bg-gradient-to-br from-accent/50 via-secondary/60 to-background">
          <div className="absolute inset-0 bg-dotted opacity-40" aria-hidden />
          <div className="relative flex flex-col items-center gap-2">
            <LogoMark className="h-10 w-auto opacity-80" />
            {work.subtitle && (
              <span className="text-[11px] font-medium tracking-wide text-muted-foreground">
                {work.subtitle}
              </span>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

interface CardLink {
  label: string;
  url?: string;
  variant: "primary" | "secondary" | "ghost";
}

function buildLinks(work: Work): CardLink[] {
  // 非公開（isPublic=false）の作品はアプリを開くボタンを出さない
  if (!work.isPublic) {
    return [{ label: "非公開デモ（概要のみ）", variant: "ghost" }];
  }

  const links: CardLink[] = [];
  if (work.appUrl) links.push({ label: "アプリを開く", url: work.appUrl, variant: "primary" });
  if (work.githubUrl) links.push({ label: "GitHubを見る", url: work.githubUrl, variant: "secondary" });
  if (work.noteUrl) links.push({ label: "noteを見る", url: work.noteUrl, variant: "secondary" });
  return links;
}

function LinkButtons({ work }: { work: Work }) {
  const links = buildLinks(work);
  if (links.length === 0) return null;
  return (
    <div className="mt-auto flex flex-wrap gap-2 pt-4">
      {links.map((link, i) => {
        const base =
          "inline-flex items-center justify-center rounded-md px-3.5 py-2 text-sm font-medium transition-colors";
        const styles =
          link.variant === "primary"
            ? "bg-primary text-primary-foreground hover:bg-primary/90"
            : link.variant === "ghost"
              ? "border border-dashed border-border text-muted-foreground cursor-default"
              : "border border-border bg-card text-foreground hover:bg-secondary";

        if (!link.url) {
          return (
            <span key={i} className={cn(base, styles)} aria-disabled="true">
              {link.label}
            </span>
          );
        }
        return (
          <a
            key={i}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(base, styles)}
          >
            {link.label}
          </a>
        );
      })}
    </div>
  );
}

export function WorkCard({ work, featured }: { work: Work; featured?: boolean }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card shadow-sm transition-shadow hover:shadow-md">
      <WorkImage work={work} featured={featured} />
      <div className="flex flex-1 flex-col p-5">
        <div className="mb-2 flex flex-wrap items-center gap-2">
          <StatusBadge status={work.status} />
          {work.platform && (
            <span className="text-xs text-muted-foreground">{work.platform}</span>
          )}
        </div>

        <h3 className={cn("font-semibold", featured ? "text-xl" : "text-lg")}>{work.title}</h3>
        {work.subtitle && (
          <p className="mt-0.5 text-sm font-medium text-primary/90">{work.subtitle}</p>
        )}
        {work.formerName && (
          <p className="text-xs text-muted-foreground">旧名：{work.formerName}</p>
        )}
        {work.catchphrase && (
          <p className="mt-1 text-sm font-medium text-primary">「{work.catchphrase}」</p>
        )}

        <div className="mt-2 flex flex-wrap gap-1.5">
          {work.categories.map((c) => (
            <span
              key={c}
              className="rounded-md bg-secondary px-2 py-0.5 text-xs text-secondary-foreground"
            >
              {c}
            </span>
          ))}
        </div>

        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{work.description}</p>

        {work.note && (
          <p className="mt-3 rounded-md bg-muted px-3 py-2 text-xs leading-relaxed text-muted-foreground">
            {work.note}
          </p>
        )}

        <LinkButtons work={work} />
      </div>
    </article>
  );
}
