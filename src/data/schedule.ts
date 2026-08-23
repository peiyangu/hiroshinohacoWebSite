/**
 * 月次営業スケジュール
 * ────────────────────────────────────────────
 * 基本営業時間は週次ルールで自動判定します。
 * 祝日の月曜営業、臨時休業、イベント出店などの例外は
 * microCMS（スケジュールAPI）で管理し、ビルド時に
 * scripts/fetch-cms-data.mjs が取得してJSON化したものを
 * ここで読み込みます。
 * ────────────────────────────────────────────
 */
import generatedSchedule from "./generated/schedule.json";

export type DayStatus = {
  isOpen: boolean;
  hours?: string;
  isEvent?: boolean;
  eventName?: string;
  eventLocation?: string;
  note?: string;
};

const defaultStatusByDay: Record<number, DayStatus> = {
  0: { isOpen: true,  hours: "9:30-17:00" }, // 日
  1: { isOpen: false },                         // 月
  2: { isOpen: false },                         // 火
  3: { isOpen: true,  hours: "9:30-17:00" }, // 水
  4: { isOpen: true,  hours: "9:30-17:00" }, // 木
  5: { isOpen: true,  hours: "9:30-17:00" }, // 金
  6: { isOpen: true,  hours: "9:30-17:00" }, // 土
};

const schedule: Record<string, DayStatus> = generatedSchedule;

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
