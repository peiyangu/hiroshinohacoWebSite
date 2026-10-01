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
  1: { isOpen: false },                          // 月
  2: { isOpen: false },                          // 火
  3: { isOpen: true,  hours: "12:00-19:00" }, // 水
  4: { isOpen: true,  hours: "12:00-19:00" }, // 木
  5: { isOpen: true,  hours: "12:00-19:00" }, // 金
  6: { isOpen: true,  hours: "12:00-19:00" }, // 土
};

const schedule: Record<string, DayStatus> = {
  // ── 2026年10月 ─────────────────────────────────
  "2026-10-01": { isOpen: true,  hours: "12:00-16:00" },
  "2026-10-02": { isOpen: true,  hours: "10:00-18:00", isEvent: true, eventName: "ちくしのマルシェ", eventLocation: "イオンモール筑紫野" },
  "2026-10-03": { isOpen: true,  hours: "10:00-17:00", isEvent: true, eventName: "太宰府政庁まつり", eventLocation: "太宰府政庁跡" },
  "2026-10-04": { isOpen: true,  hours: "10:30-15:00", isEvent: true, eventName: "川崎パン博", eventLocation: "川崎町役場", note: "パン〆切" },
  "2026-10-07": { isOpen: true,  hours: "12:00-19:00", note: "パンの日" },
  "2026-10-12": { isOpen: true,  hours: "12:00-19:00" },
  "2026-10-16": { isOpen: true,  hours: "12:00-16:00" },
  "2026-10-17": { isOpen: true,  hours: "9:00-16:00", isEvent: true, eventName: "九州蚤の市", eventLocation: "熊本県農業公園" },
  "2026-10-18": { isOpen: false, note: "社員研修" },
  "2026-10-21": { isOpen: true,  hours: "12:00-19:00", note: "パンの日" },
  "2026-10-23": { isOpen: true,  hours: "12:00-16:00" },
  "2026-10-24": { isOpen: true,  hours: "12:00-15:00", isEvent: true, eventName: "町内会秋まつり", eventLocation: "宮の森公民館" },
  "2026-10-25": { isOpen: true,  hours: "12:00-19:00", isEvent: true, eventName: "天拝山観月会", eventLocation: "天拝山公園" },
  "2026-10-30": { isOpen: true,  hours: "12:00-16:00" },
  "2026-10-31": { isOpen: true,  hours: "10:30-16:00", isEvent: true, eventName: "海辺のカモメ市", eventLocation: "門司港レトロ一帯" },
  "2026-11-01": { isOpen: true,  hours: "10:30-16:00", isEvent: true, eventName: "海辺のカモメ市", eventLocation: "門司港レトロ一帯" },
  "2026-11-02": { isOpen: true,  hours: "10:30-16:00", isEvent: true, eventName: "海辺のカモメ市", eventLocation: "門司港レトロ一帯" },
  "2026-11-03": { isOpen: true,  hours: "10:30-16:00", isEvent: true, eventName: "海辺のカモメ市", eventLocation: "門司港レトロ一帯" },
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
