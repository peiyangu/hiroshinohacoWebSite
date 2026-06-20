export const INSTAGRAM_URL = "https://www.instagram.com/hiroshi.no.haco_/";

export const STORE_ADDRESS_LINES = [
  "〒818-0005",
  "福岡県筑紫野市原６３３−１８",
] as const;

export const BUSINESS_HOURS_SUMMARY = "12:00-19:00｜月火定休";

export const BUSINESS_HOURS_NOTE = "※ 月曜・火曜定休";

export const ACCESS_HOURS = [
  { day: "月", time: "休み",       closed: true  },
  { day: "火", time: "休み",       closed: true  },
  { day: "水", time: "12:00-19:00", closed: false },
  { day: "木", time: "12:00-19:00", closed: false },
  { day: "金", time: "12:00-19:00", closed: false },
  { day: "土", time: "12:00-19:00", closed: false },
  { day: "日", time: "12:00-19:00", closed: false },
] as const;