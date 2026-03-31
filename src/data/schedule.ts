/**
 * 月次営業スケジュール
 * ────────────────────────────────────────────
 * 基本営業時間は週次ルールで自動判定します。
 * 祝日の月曜営業、臨時休業、イベント出店などの例外だけを
 * このファイルに "YYYY-MM-DD" 形式で登録してください。
 *
 * 【通常営業の上書き】
 *   "2026-03-20": { isOpen: true, hours: "11:00-18:00" },
 *
 * 【イベント出店】
 *   "2026-03-08": { isOpen: true, hours: "10:00-16:00", isEvent: true, eventName: "筑紫野マルシェ" },
 *
 * 【休業日】
 *   "2026-03-09": { isOpen: false },
 * ────────────────────────────────────────────
 */

export type DayStatus = {
  isOpen: boolean;
  hours?: string;
  isEvent?: boolean;
  eventName?: string;
  eventLocation?: string;
};

const defaultStatusByDay: Record<number, DayStatus> = {
  0: { isOpen: true, hours: "11:00-18:00" },
  1: { isOpen: false },
  2: { isOpen: false },
  3: { isOpen: true, hours: "11:00-18:00" },
  4: { isOpen: true, hours: "9:00〜試運転" },
  5: { isOpen: true, hours: "11:00-18:00" },
  6: { isOpen: true, hours: "9:00〜試運転" },
};

const schedule: Record<string, DayStatus> = {
  // 祝日の月曜営業やイベント出店など、例外だけを追加してください。
  // ── 2026年2月 ──────────────────────────────────
  "2026-02-23": { isOpen: true, hours: "11:00-18:00" },
  "2026-02-24": { isOpen: false },
  "2026-02-25": { isOpen: false },
  "2026-02-26": { isOpen: true, hours: "9:00〜試運転" },
  "2026-02-27": { isOpen: true, hours: "11:00-18:00" },
  "2026-02-28": { isOpen: true, hours: "9:00〜試運転" },
};

function formatDateKey(date: Date): string {
  return date.toLocaleDateString("sv-SE");
}

function getDefaultStatus(date: Date): DayStatus {
  return defaultStatusByDay[date.getDay()] ?? { isOpen: false };
}

/**
 * 今日の営業ステータスを返す。
 * ブラウザ側でページロード時に実行されるため常に当日の値になります。
 */
export function getTodayStatus(): DayStatus {
  const today = new Date();
  const dateKey = formatDateKey(today);
  return schedule[dateKey] ?? getDefaultStatus(today);
}
