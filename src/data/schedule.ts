/**
 * 月次営業スケジュール
 * ────────────────────────────────────────────
 * 月のはじめに1ヶ月分の日付と営業内容を登録してください。
 * フォーマットは "YYYY-MM-DD"（ゼロ埋め必須）。
 *
 * 【通常営業】
 *   "2026-03-01": { isOpen: true, hours: "11:00 - 18:00" },
 *
 * 【イベント出店】
 *   "2026-03-08": { isOpen: true, hours: "10:00 - 16:00", isEvent: true, eventName: "筑紫野マルシェ" },
 *
 * 【休業日】
 *   "2026-03-09": { isOpen: false },
 *
 * 登録されていない日付は自動的に「休業日」と判定されます。
 * ────────────────────────────────────────────
 */

export type DayStatus = {
  isOpen: boolean;
  hours?: string;
  isEvent?: boolean;
  eventName?: string;
  eventLocation?: string;
};

const schedule: Record<string, DayStatus> = {
  // ── 2026年2月 ──────────────────────────────────
  "2026-02-23": { isOpen: true, hours: "11:00 - 18:00" },
  "2026-02-24": { isOpen: true, hours: "11:00 - 18:00" },
  "2026-02-25": { isOpen: false },
  "2026-02-26": { isOpen: true, hours: "11:00 - 18:00" },
  "2026-02-27": { isOpen: true, hours: "11:00 - 18:00" },
  "2026-02-28": { isOpen: false },

  // ── 2026年3月 ──────────────────────────────────
  // ここに3月分を追加してください
};

/**
 * 今日の営業ステータスを返す。
 * ブラウザ側でページロード時に実行されるため常に当日の値になります。
 */
export function getTodayStatus(): DayStatus {
  const today = new Date().toLocaleDateString("sv-SE"); // "2026-02-23" 形式
  return schedule[today] ?? { isOpen: false };
}
