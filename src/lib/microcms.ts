const SERVICE_DOMAIN = process.env.MICROCMS_SERVICE_DOMAIN;
const API_KEY = process.env.MICROCMS_API_KEY;

type MicroCMSListResponse<T> = {
  contents: T[];
  totalCount: number;
  offset: number;
  limit: number;
};

export type MicroCMSImage = {
  url: string;
  height: number;
  width: number;
};

function assertEnv() {
  if (!SERVICE_DOMAIN || !API_KEY) {
    throw new Error(
      "MICROCMS_SERVICE_DOMAIN / MICROCMS_API_KEY が設定されていません（.env.local を確認してください）"
    );
  }
}

async function microcmsFetch<T>(
  endpoint: string,
  searchParams: Record<string, string> = {}
): Promise<T> {
  assertEnv();
  const query = new URLSearchParams(searchParams).toString();
  const res = await fetch(
    `https://${SERVICE_DOMAIN}.microcms.io/api/v1/${endpoint}${query ? `?${query}` : ""}`,
    { headers: { "X-MICROCMS-API-KEY": API_KEY! } }
  );
  if (!res.ok) {
    throw new Error(`microCMS fetch failed: ${endpoint} (${res.status} ${res.statusText})`);
  }
  return res.json() as Promise<T>;
}

export async function getList<T>(endpoint: string): Promise<T[]> {
  const limit = 100;
  let offset = 0;
  const all: T[] = [];
  for (;;) {
    const data = await microcmsFetch<MicroCMSListResponse<T>>(endpoint, {
      limit: String(limit),
      offset: String(offset),
    });
    all.push(...data.contents);
    offset += limit;
    if (offset >= data.totalCount) break;
  }
  return all;
}

export async function getObject<T>(endpoint: string): Promise<T> {
  return microcmsFetch<T>(endpoint);
}
