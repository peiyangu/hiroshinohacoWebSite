export type NewsItem = {
  id: number;
  date: string;
  category: "INFO" | "SHOP" | "EVENT";
  title: string;
};

export const newsData: NewsItem[] = [
  {
    id: 2,
    date: "2026.07.08",
    category: "INFO",
    title: "ウェブサイトをリニューアルしました",
  },
  {
    id: 1,
    date: "2026.05.22",
    category: "INFO",
    title: "宝満おろし・カフェインレスで水出し用加工が選べるようになりました",
  },
];
