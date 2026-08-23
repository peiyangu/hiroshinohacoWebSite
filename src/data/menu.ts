import generatedMenu from "./generated/menu.json";

export type MenuItem = {
  name: string;
  description: string;
  price: string;
  note?: string;
  image?: string;
};

export type MenuSection = {
  id: string;
  num: string;
  labelEn: string;
  labelJa: string;
  items: MenuItem[];
};

export type MenuGroup = {
  id: string;
  label: string;
  sections: MenuSection[];
};

type GeneratedMenuItem = MenuItem & {
  group: string;
  section: string;
  sectionEn?: string;
  order: number;
};

// microCMS側に英語ラベル用フィールド(sectionEn)が無い場合のフォールバック。
// 新しいセクション名を追加した場合はここにも追記してください。
const SECTION_EN_FALLBACK: Record<string, string> = {
  "コーヒー": "Coffee",
  "ミルク": "Milk",
  "トニック（炭酸・ノンアル）": "Tonic",
  "スペシャル": "Specials",
  "ノンコーヒー": "Non Coffee",
  "サンドウィッチ": "Sandwich",
  "スイーツ": "Sweets",
};

export function getAllMenuItems(): MenuItem[] {
  return (generatedMenu as GeneratedMenuItem[]).map(({ name, description, price, note, image }) => ({
    name,
    description,
    price,
    note,
    image,
  }));
}

export function getMenuGroups(): MenuGroup[] {
  const items = generatedMenu as GeneratedMenuItem[];
  const groups: MenuGroup[] = [];
  let sectionSeq = 0;

  for (const { group, section, sectionEn, order, ...item } of items) {
    let g = groups.find((g) => g.id === group);
    if (!g) {
      g = { id: group, label: group, sections: [] };
      groups.push(g);
    }
    let s = g.sections.find((s) => s.labelJa === section);
    if (!s) {
      sectionSeq += 1;
      s = {
        id: `${group}-${section}`,
        num: String(sectionSeq).padStart(2, "0"),
        labelEn: sectionEn || SECTION_EN_FALLBACK[section] || section,
        labelJa: section,
        items: [],
      };
      g.sections.push(s);
    }
    s.items.push(item);
  }

  return groups;
}
