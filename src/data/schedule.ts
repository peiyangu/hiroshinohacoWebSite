/**
 * 月次営業スケジュール
 * ────────────────────────────────────────────
 * 基本営業時間は週次ルールで自動判定します。
 * 祝日の月曜営業、臨時休業、イベント出店などの例外だけを
 * このファイルに "YYYY-MM-DD" 形式で登録してください。
 *
 * 【通常営業の上書き】
 *   "2026-03-20": { isOpen: true, hours: "12:00-19:00" },
 *
 * 【メモ付き営業】
 *   "2026-04-05": { isOpen: true, note: "パン販売日！" },
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
  note?: string;
};

const defaultStatusByDay: Record<number, DayStatus> = {
  0: { isOpen: true,  hours: "12:00-19:00" }, // 日
  1: { isOpen: false },                         // 月
  2: { isOpen: false },                         // 火
  3: { isOpen: true,  hours: "12:00-19:00" }, // 水
  4: { isOpen: true,  hours: "12:00-19:00" }, // 木
  5: { isOpen: true,  hours: "12:00-19:00" }, // 金
  6: { isOpen: true,  hours: "12:00-19:00" }, // 土
};

const schedule: Record<string, DayStatus> = {
  // ── 2026年7月 ──────────────────────────────────
  "2026-07-20": { isOpen: true,  hours: "12:00-19:00"},
  "2026-07-30": { isOpen: true,  hours: "12:00-19:00", note: "パン販売" },
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
