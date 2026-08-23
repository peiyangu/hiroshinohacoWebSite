import generatedLineup from "./generated/lineup.json";

export type LineupItem = {
  slug: string;
  nameEn: string;
  name: string;
  fullTitle: string;
  tag: string;
  desc: string;
  price: string;
  href: string;
  photo?: string;
  highlight?: string;
  /** microCMSのリッチエディタから取得したHTML文字列 */
  detail: string;
};

export const lineupItems: LineupItem[] = generatedLineup as LineupItem[];

export function getLineupItemBySlug(slug: string) {
  return lineupItems.find((item) => item.slug === slug);
}
