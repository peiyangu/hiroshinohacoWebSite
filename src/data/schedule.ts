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
  0: { isOpen: true,  hours: "9:30-17:00" }, // 日
  1: { isOpen: false },                         // 月
  2: { isOpen: false },                         // 火
  3: { isOpen: true,  hours: "9:30-17:00" }, // 水
  4: { isOpen: true,  hours: "9:30-17:00" }, // 木
  5: { isOpen: true,  hours: "9:30-17:00" }, // 金
  6: { isOpen: true,  hours: "9:30-17:00" }, // 土
};

const schedule: Record<string, DayStatus> = {
  // ── 2026年7月 ──────────────────────────────────
  "2026-07-30": { isOpen: true,  hours: "12:00-19:00", note: "パン販売" },

  // ── 2026年8月 ──────────────────────────────────
  "2026-08-01": { isOpen: false },
  "2026-08-02": { isOpen: true,  hours: "9:30-16:00" },
  "2026-08-03": { isOpen: true,  hours: "8:00-11:30", isEvent: true, eventName: "夢ロマン軽トラ市", eventLocation: "吉野ケ里公園" },
  "2026-08-04": { isOpen: false },
  "2026-08-05": { isOpen: true,  hours: "9:30-17:00", note: "パン販売11:00〜" },
  "2026-08-06": { isOpen: true,  hours: "9:30-17:00" },
  "2026-08-07": { isOpen: true,  hours: "9:30-17:00" },
  "2026-08-08": { isOpen: true,  hours: "9:30-17:00" },
  "2026-08-09": { isOpen: true,  hours: "15:00-20:00", isEvent: true, eventName: "ナイトマルシェ", eventLocation: "Mr.MAX橋本" },
  "2026-08-10": { isOpen: true,  hours: "9:30-17:00" },
  "2026-08-11": { isOpen: true,  hours: "9:30-17:00" },
  "2026-08-12": { isOpen: true,  hours: "9:30-17:00" },
  "2026-08-13": { isOpen: true,  hours: "9:30-17:00", note: "パン販売11:00〜" },
  "2026-08-14": { isOpen: false },
  "2026-08-15": { isOpen: false },
  "2026-08-16": { isOpen: true,  hours: "9:30-17:00" },
  "2026-08-17": { isOpen: true,  hours: "9:30-17:00" },
  "2026-08-18": { isOpen: false },
  "2026-08-19": { isOpen: false, note: "焙煎勉強会" },
  "2026-08-20": { isOpen: true,  hours: "9:30-17:00" },
  "2026-08-21": { isOpen: true,  hours: "9:30-17:00" },
  "2026-08-22": { isOpen: true,  hours: "9:30-17:00" },
  "2026-08-23": { isOpen: true,  hours: "17:00-21:00", isEvent: true, eventName: "筑後夜市", eventLocation: "船小屋恋ぼたる" },
  "2026-08-24": { isOpen: true,  hours: "11:00-15:00", isEvent: true, eventName: "COP3周年イベント", eventLocation: "ココアウトドアパラダイス" },
  "2026-08-25": { isOpen: true,  hours: "9:30-17:00" },
  "2026-08-26": { isOpen: false },
  "2026-08-27": { isOpen: true,  hours: "10:00-20:00", isEvent: true, eventName: "九州アジアコーヒーフェスティバル", eventLocation: "博多阪急" },
  "2026-08-28": { isOpen: true,  hours: "9:30-17:00" },
  "2026-08-29": { isOpen: true,  hours: "9:30-16:00" },
  "2026-08-30": { isOpen: true,  hours: "10:00-16:00", isEvent: true, eventName: "リトルママフェスタ", eventLocation: "福岡国際センター" },
  "2026-08-31": { isOpen: true,  hours: "9:30-17:00" },
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
