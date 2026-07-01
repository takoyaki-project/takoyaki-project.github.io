import { useId } from "react";

/**
 * TAKOYAKI PROJECT のロゴマーク（文字なし）。
 * 青い丸＋斜めのピック＋上部のオレンジ2つ。丸の中は青のグラデーション差で
 * ゆるく波のように見せる。艶を抑えたマット寄りの上品な仕上がり。
 */
export function LogoMark({ className }: { className?: string }) {
  const uid = useId().replace(/:/g, "");
  const circleGrad = `circleGrad-${uid}`;
  const waveGrad = `waveGrad-${uid}`;
  const clip = `circleClip-${uid}`;

  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      role="img"
      aria-label="TAKOYAKI PROJECT"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id={circleGrad} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#74B7E8" />
          <stop offset="1" stopColor="#2F7FD0" />
        </linearGradient>
        <linearGradient id={waveGrad} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#3B83CC" />
          <stop offset="1" stopColor="#256AB4" />
        </linearGradient>
        <clipPath id={clip}>
          <circle cx="50" cy="59" r="30" />
        </clipPath>
      </defs>

      {/* オレンジ2つ（上側・離して配置） */}
      <circle cx="33" cy="22" r="5" fill="#F39A20" />
      <circle cx="63" cy="20" r="5" fill="#F39A20" />

      {/* 丸本体 */}
      <circle cx="50" cy="59" r="30" fill={`url(#${circleGrad})`} />

      {/* 丸内のゆるい波（グラデーション差のみ・波線は描かない） */}
      <g clipPath={`url(#${clip})`}>
        <path
          d="M20 64 C32 56, 44 56, 56 62 C66 67, 76 67, 82 62 L82 92 L20 92 Z"
          fill={`url(#${waveGrad})`}
          opacity="0.85"
        />
      </g>

      {/* 斜めのピック（薄いベージュ・短め） */}
      <line
        x1="58"
        y1="51"
        x2="73"
        y2="35"
        stroke="#E8D2AA"
        strokeWidth="5"
        strokeLinecap="round"
      />
    </svg>
  );
}

/**
 * 横長ロゴ：マーク＋濃紺の TAKOYAKI / PROJECT テキスト。
 */
export function LogoHorizontal({ className }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className ?? ""}`}>
      <LogoMark className="h-full w-auto" />
      <span className="flex flex-col leading-none">
        <span
          className="font-display font-bold tracking-[0.14em] text-[#071D3A]"
          style={{ fontSize: "0.95em" }}
        >
          TAKOYAKI
        </span>
        <span
          className="font-display font-medium tracking-[0.34em] text-[#071D3A]"
          style={{ fontSize: "0.55em" }}
        >
          PROJECT
        </span>
      </span>
    </span>
  );
}
