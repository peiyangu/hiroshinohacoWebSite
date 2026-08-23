// ビルド前にmicroCMSから最新データを取得し、src/data/generated/ 以下にJSONとして書き出す。
// npm run dev / npm run build の実行前（pre-hook）に自動実行される。
import { writeFileSync, mkdirSync, existsSync, readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");

loadEnvLocal();

const SERVICE_DOMAIN = process.env.MICROCMS_SERVICE_DOMAIN;
const API_KEY = process.env.MICROCMS_API_KEY;

if (!SERVICE_DOMAIN || !API_KEY) {
  console.warn(
    "[fetch-cms-data] MICROCMS_SERVICE_DOMAIN / MICROCMS_API_KEY が未設定のためスキップします（.env.local を確認してください）"
  );
  ensureDefaultFiles();
  process.exit(0);
}

function ensureDefaultFiles() {
  const outDir = path.join(ROOT, "src", "data", "generated");
  mkdirSync(outDir, { recursive: true });
  const defaults = {
    "schedule.json": {},
    "schedule-image.json": { url: null },
    "lineup.json": [],
    "menu.json": [],
  };
  for (const [file, content] of Object.entries(defaults)) {
    const filePath = path.join(outDir, file);
    if (!existsSync(filePath)) {
      writeFileSync(filePath, JSON.stringify(content, null, 2));
    }
  }
}

async function microcmsFetch(endpoint, searchParams = {}) {
  const query = new URLSearchParams(searchParams).toString();
  const url = `https://${SERVICE_DOMAIN}.microcms.io/api/v1/${endpoint}${query ? `?${query}` : ""}`;
  const res = await fetch(url, { headers: { "X-MICROCMS-API-KEY": API_KEY } });
  if (!res.ok) {
    throw new Error(`microCMS fetch failed: ${endpoint} (${res.status} ${res.statusText})`);
  }
  return res.json();
}

async function getList(endpoint) {
  const limit = 100;
  let offset = 0;
  const all = [];
  for (;;) {
    const data = await microcmsFetch(endpoint, { limit: String(limit), offset: String(offset) });
    all.push(...data.contents);
    offset += limit;
    if (offset >= data.totalCount) break;
  }
  return all;
}

function toDateKey(value) {
  if (!value) return null;
  return String(value).slice(0, 10);
}

// rawText: 1行1日、"日付,open|close,営業時間,メモ,イベント名,イベント場所" のCSV形式
function parseRawTextSchedule(rawText) {
  const schedule = {};
  const lines = rawText.split("\n").map((l) => l.trim()).filter(Boolean);
  for (const line of lines) {
    const [date, status, hours, note, eventName, eventLocation] = line
      .split(",")
      .map((v) => v.trim());
    if (!date) continue;
    schedule[date] = {
      isOpen: status === "open",
      ...(hours ? { hours } : {}),
      ...(eventName ? { isEvent: true, eventName } : {}),
      ...(eventLocation ? { eventLocation } : {}),
      ...(note ? { note } : {}),
    };
  }
  return schedule;
}

async function main() {
  const outDir = path.join(ROOT, "src", "data", "generated");
  mkdirSync(outDir, { recursive: true });

  // ── スケジュール（月ごとにまとめたrawTextを結合） ─────
  const scheduleContents = await getList("schedule");
  const schedule = {};
  for (const c of scheduleContents) {
    if (c.rawText) {
      Object.assign(schedule, parseRawTextSchedule(c.rawText));
      continue;
    }
    // 互換: 過去の1日1件形式のデータが残っていた場合も読み取る
    const key = toDateKey(c.date);
    if (!key) continue;
    schedule[key] = {
      isOpen: Boolean(c.isOpen),
      ...(c.hours ? { hours: c.hours } : {}),
      ...(c.isEvent ? { isEvent: true } : {}),
      ...(c.eventName ? { eventName: c.eventName } : {}),
      ...(c.eventLocation ? { eventLocation: c.eventLocation } : {}),
      ...(c.note ? { note: c.note } : {}),
    };
  }
  writeFileSync(path.join(outDir, "schedule.json"), JSON.stringify(schedule, null, 2));

  // ── スケジュール画像 ──────────────────────
  const scheduleImage = await microcmsFetch("schedule-image").catch(() => null);
  writeFileSync(
    path.join(outDir, "schedule-image.json"),
    JSON.stringify(
      {
        url: scheduleImage?.image?.url ?? null,
        width: scheduleImage?.image?.width ?? 800,
        height: scheduleImage?.image?.height ?? 800,
      },
      null,
      2
    )
  );

  // ── ラインナップ ──────────────────────────
  const lineupContents = await getList("lineup");
  const lineup = lineupContents
    .map((c) => ({
      slug: c.slug,
      nameEn: c.nameEn,
      name: c.name,
      fullTitle: c.fullTitle,
      tag: Array.isArray(c.tag) ? c.tag[0] : c.tag,
      desc: c.desc,
      price: c.price,
      href: c.href,
      photo: c.photo?.url,
      highlight: c.highlight || undefined,
      detail: c.detail ?? "",
      publishedAt: c.publishedAt,
    }))
    .sort((a, b) => (a.publishedAt < b.publishedAt ? -1 : 1))
    .map(({ publishedAt: _publishedAt, ...item }) => item);
  writeFileSync(path.join(outDir, "lineup.json"), JSON.stringify(lineup, null, 2));

  // ── メニュー ──────────────────────────────
  const menuContents = await getList("menu");
  const menu = menuContents
    .map((c) => ({
      name: c.name,
      description: c.description,
      price: c.price,
      note: c.note || undefined,
      image: c.image?.url,
      group: Array.isArray(c.group) ? c.group[0] : c.group,
      section: c.section,
      sectionEn: c.sectionEn || undefined,
      order: typeof c.order === "number" ? c.order : 0,
    }))
    .sort((a, b) => a.order - b.order);
  writeFileSync(path.join(outDir, "menu.json"), JSON.stringify(menu, null, 2));

  console.log(
    `[fetch-cms-data] schedule:${scheduleContents.length} lineup:${lineup.length} menu:${menu.length} 件を取得しました`
  );
}

function loadEnvLocal() {
  const envPath = path.join(ROOT, ".env.local");
  if (!existsSync(envPath)) return;
  const lines = readFileSync(envPath, "utf-8").split("\n");
  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const eq = trimmed.indexOf("=");
    if (eq === -1) continue;
    const key = trimmed.slice(0, eq).trim();
    const value = trimmed.slice(eq + 1).trim();
    if (!(key in process.env)) {
      process.env[key] = value;
    }
  }
}

main().catch((err) => {
  console.error("[fetch-cms-data] 失敗しました:", err);
  process.exit(1);
});
