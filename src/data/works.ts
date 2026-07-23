// TAKOYAKI PROJECT — works data
// 作品データはこのファイルで一元管理します。
// 画像URL・各リンク（アプリ / GitHub / note）・公開状態などは、ここを編集するだけで差し替えできます。
// 外部DBは使わず、静的サイト内のデータとして管理しています。

export type WorkStatus =
  | "公開中"
  | "試作公開中"
  | "MVP"
  | "プロトタイプ"
  | "非公開デモ"
  | "デモ版"
  | "アイデア保管中";

export type WorkCategory =
  | "学校・子ども会"
  | "仕事・営業"
  | "生活"
  | "創作"
  | "地域活動";

export interface Work {
  /** 一意のID（key などに使用） */
  id: string;
  /** 作品名 */
  title: string;
  /** 種別名・サブタイトル（短い分類のひとこと） 例: イベント販売レジアプリ */
  subtitle?: string;
  /** 説明文 */
  description: string;
  /** ジャンル（複数指定可） */
  categories: WorkCategory[];
  /** 公開状態 */
  status: WorkStatus;
  /** 代表作として大きく表示するか */
  featured?: boolean;
  /**
   * 画像URL。差し替えやすいよう文字列で管理します。
   * 未設定の場合はロゴ入りプレースホルダーを表示します。
   * 優先順位の目安: GitHubのOGP画像 > スクリーンショット > 未設定
   */
  imageUrl?: string;
  /** アプリを開くURL（GitHub Pages / CodePen など） */
  appUrl?: string;
  /** GitHubリポジトリURL */
  githubUrl?: string;
  /** note記事URL */
  noteUrl?: string;
  /** 一般公開しているか（false の場合はアプリを開くボタンを出さない） */
  isPublic: boolean;
  /** 表示順（小さいほど先に表示） */
  displayOrder: number;

  // --- 表示用の補足情報（任意） ---
  /** 公開先プラットフォーム名 例: GitHub Pages / CodePen */
  platform?: string;
  /** キャッチコピー */
  catchphrase?: string;
  /** 旧名 */
  formerName?: string;
  /** 注意書き */
  note?: string;
}

export const STATUS_ORDER: WorkStatus[] = [
  "公開中",
  "試作公開中",
  "MVP",
  "プロトタイプ",
  "非公開デモ",
  "デモ版",
  "アイデア保管中",
];

export const CATEGORIES: WorkCategory[] = [
  "学校・子ども会",
  "仕事・営業",
  "生活",
  "創作",
];

export const externalLinks = {
  github: "https://github.com/takoyaki-project",
  note: "https://note.com/keiko_aibeginner",
};

const worksData: Work[] = [
  {
    id: "are-ureta",
    title: "あれ売れた？",
    subtitle: "イベント販売レジアプリ",
    description:
      "バザーやイベント販売で、売上や商品数をかんたんに記録できるレジ風アプリ。地域活動や学校行事での利用を想定しています。",
    categories: ["学校・子ども会", "地域活動"],
    status: "公開中",
    featured: true,
    platform: "GitHub Pages",
    imageUrl: "/images/thumb-are-ureta-card.png",
    appUrl: "https://takoyaki-project.github.io/are-ureta-event-register/",
    githubUrl: "https://github.com/takoyaki-project/are-ureta-event-register",
    isPublic: true,
    displayOrder: 20,
  },
  {
    id: "seat-assignment",
    title: "席替えアプリ",
    subtitle: "教室の席替え支援ツール",
    description:
      "席列、隣接NG、固定席などの条件を考慮しながら、教室の席替えを支援するアプリです。",
    categories: ["学校・子ども会"],
    status: "公開中",
    featured: true,
    platform: "GitHub Pages",
    imageUrl: "/images/thumb-seat-assignment-card.png",
    appUrl: "https://takoyaki-project.github.io/seat-assignment-app/",
    githubUrl: "https://github.com/takoyaki-project/seat-assignment-app",
    isPublic: true,
    displayOrder: 10,
  },
  {
    id: "souzoku-map",
    title: "相続マップ",
    subtitle: "相続関係見える化ツール",
    description:
      "相続人の関係を見える化し、相続や事業承継の話を整理するための試作アプリです。家族関係や相続の流れを、図でわかりやすく確認できることを目指しています。",
    categories: ["仕事・営業"],
    status: "試作公開中",
    platform: "CodePen",
    imageUrl: "/images/thumb-souzokumap-card.png",
    appUrl: "https://codepen.io/dfbitwqs-the-animator/full/bNgWpvm",
    isPublic: true,
    displayOrder: 45,
  },
  {
    id: "tsugi-ikoka",
    title: "次いこか",
    subtitle: "営業応援カウンター",
    catchphrase: "ビルを出たら、ポチッ。",
    description:
      "飛び込み営業や声かけの活動を前向きに続けるための営業応援カウンター。断られた回数や話を聞いてもらえた回数を記録し、月別履歴で振り返れます。",
    categories: ["仕事・営業"],
    status: "試作公開中",
    featured: true,
    platform: "GitHub",
    imageUrl: "/images/thumb-courage-counter.png",
    // 旧: https://courage-counter.lovable.app（Lovable解約によりリンク切れ）
    // GitHub Pages化はビルド設定の工事が必要なため、それまでの間は
    // リポジトリへのリンクにしておく（リンク切れよりずっと良い）
    appUrl: "https://github.com/takoyaki-project/courage-counter",
    githubUrl: "https://github.com/takoyaki-project/courage-counter",
    isPublic: true,
    displayOrder: 30,
  },
{
    id: "ai-danshi-roulette",
    title: "AI男子ルーレット",
    subtitle: "乙女ゲーム風ミニルーレット",
    description:
      "AI男子たちが「今日の開発相棒」に立候補!? ボタンひとつで、今日の推しと応援セリフをお迎えできるミニWebアプリ。",
    note: "このアプリは非公式の創作作品です。実在する企業・サービス・商標とは関係ありません。",
    categories: ["創作"],
    status: "公開中",
    featured: true,
    platform: "GitHub Pages",
    imageUrl: "/images/thumb-ai-danshi-roulette-card.png",
    appUrl: "https://takoyaki-project.github.io/ai-danshi-roulette/",
    githubUrl: "https://github.com/takoyaki-project/ai-danshi-roulette",
    isPublic: true,
    displayOrder: 35,
  },
  {
    id: "ai-danshi",
    title: "AI男子",
    subtitle: "乙女ゲーム風ミニゲーム",
    description:
      "AI男子たちと一緒にアプリ開発を進める、乙女ゲーム風の短編Webゲームです。体験版としてチャッピールートを公開中。会話・選択肢・好感度・エンディング演出を実装しています。",
    note: "このゲームは非公式の創作作品です。実在する企業・サービス・商標とは関係ありません。",
    categories: ["創作"],
    status: "公開中",
    platform: "GitHub Pages",
    imageUrl: "/images/thumb-ai-danshi.png",
    appUrl: "https://takoyaki-project.github.io/AI-danshi/",
    githubUrl: "https://github.com/takoyaki-project/AI-danshi",
    isPublic: true,
    displayOrder: 50,
  },
  {
    id: "takoyaki-quest",
    title: "たこやきクエスト",
    subtitle: "開発ログ風ミニアプリ",
    description:
      "アプリ開発や日々の進捗を、RPG風の世界観で記録する開発ログ風アプリです。制作のセーブポイントとして楽しめるミニアプリです。",
    categories: ["創作", "生活"],
    status: "公開中",
    platform: "CodePen",
    imageUrl: "/images/thumb-takoyaki-quest.png",
    appUrl: "https://codepen.io/dfbitwqs-the-animator/full/WbRwPWZ",
    githubUrl: "https://github.com/takoyaki-project/takoyaki-quest-log",
    isPublic: true,
    displayOrder: 60,
  },
  {
    id: "kyodo-konyu",
    title: "みんなの在庫メモ",
    subtitle: "在庫管理メモアプリ",
    description:
      "食品や日用品などの在庫を、分類ごとにメモして管理するためのローカル保存型アプリです。共同購入や家庭内の在庫確認を想定しています。",
    categories: ["生活", "学校・子ども会"],
    status: "MVP",
    platform: "CodePen",
    imageUrl: "/images/thumb-stock-memo-card.png",
    appUrl: "https://codepen.io/dfbitwqs-the-animator/full/LExxKOg",
    isPublic: true,
    displayOrder: 70,
  },
  {
    id: "nuigurumi",
    title: "ぬいぐるみおせわアプリ",
    subtitle: "お世話記録アプリ",
    description:
      "ぬいぐるみのお世話や気持ちを記録して楽しむ、子ども向けのアプリです。",
    categories: ["生活", "創作"],
    status: "MVP",
    platform: "GitHub Pages",
    imageUrl: "/images/thumb-nuigurumi-care-card.png",
    appUrl: "https://takoyaki-project.github.io/Nuigurumi-Care/",
    isPublic: true,
    displayOrder: 80,
  },
  {
    id: "homework-checker",
    title: "先生のスマート宿題チェッカー",
    subtitle: "宿題提出チェックツール",
    description:
      "クラスの宿題の提出状況を、かんたんに記録・確認するためのアプリです。日々のチェック作業の負担を軽くすることを目指しています。",
    categories: ["学校・子ども会"],
    status: "MVP",
    platform: "CodePen",
    imageUrl: "/images/thumb-homework-tracker.png",
    appUrl: "https://codepen.io/dfbitwqs-the-animator/full/EaNQgwd",
    isPublic: true,
    displayOrder: 90,
  },
  {
    id: "hanashi-no-tane",
    title: "話のタネ",
    subtitle: "営業準備支援プロトタイプ",
    formerName: "ネタ仕込みパトロール",
    description:
      "営業訪問前の事前準備を支援する、情報収集プロトタイプです。地域名・相手属性・話題タグを組み合わせ、訪問先との会話や提案につながる話題の発見を目指しています。",
    note: "外部検索APIを利用するため、現在は一般公開していません。非公開デモ・概要のみの掲載です。",
    categories: ["仕事・営業"],
    status: "非公開デモ",
    platform: "一般公開なし",
    imageUrl: "/images/thumb-hanasinotane-card.png",
    isPublic: false,
    displayOrder: 100,
  },
  {
    id: "shotoku-taishi",
    title: "聖徳太子",
    subtitle: "保険営業向け音声文字起こしアプリ",
    description:
      "保険営業特化のAIボイスレコーダー。録音するだけで提出フォーマット準拠の商談記録を自動生成します。月額課金ゼロ、履歴は端末内保存です。",
    note: "デモをご覧になりたい方はお問い合わせください。",
    categories: ["仕事・営業"],
    status: "デモ版",
    platform: "一般公開なし",
    imageUrl: "/images/thumb-syoutoku-taishi-card.png",
    isPublic: false,
    displayOrder: 110,
  },
];

/** 表示順（displayOrder 昇順）でソートした作品一覧 */
export const works: Work[] = [...worksData].sort(
  (a, b) => a.displayOrder - b.displayOrder,
);

/** 代表作のみ */
export const featuredWorks = works.filter((w) => w.featured);
