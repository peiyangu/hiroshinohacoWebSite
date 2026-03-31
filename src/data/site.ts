export const INSTAGRAM_URL = "https://www.instagram.com/hiroshi.no.haco_/";

export const STORE_ADDRESS_LINES = [
  "〒818-0005",
  "福岡県筑紫野市原６３３−１８",
] as const;

export const BUSINESS_HOURS_SUMMARY = "11:00-18:00｜月火休(祝月営業)｜木土9:00〜試運転";

export const BUSINESS_HOURS_NOTE = "※ 月火休（祝日の月曜は営業）／木・土は9:00〜試運転";

export const ACCESS_HOURS = [
  { day: "月", time: "休み", closed: true },
  { day: "火", time: "休み", closed: true },
  { day: "水", time: "11:00-18:00", closed: false },
  { day: "木", time: "9:00〜試運転", closed: false },
  { day: "金", time: "11:00-18:00", closed: false },
  { day: "土", time: "9:00〜試運転", closed: false },
  { day: "日", time: "11:00-18:00", closed: false },
] as const;