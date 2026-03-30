/**
 * 営業日情報
 * 毎日このファイルを編集してデプロイするだけでサイト全体に反映されます。
 *
 * 通常営業の場合:
 *   isOpen: true
 *   hours: "11:00 - 17:00"
 *   isEvent: false
 *
 * イベント出店中の場合:
 *   isOpen: true
 *   hours: "10:00 - 16:00"
 *   isEvent: true
 *   eventName: "筑紫野マルシェ"
 *   eventLocation: "筑紫野市中央公園"
 *
 * 休業日の場合:
 *   isOpen: false
 */
export type DayStatus = {
  isOpen: boolean;
  hours?: string;
  isEvent?: boolean;
  eventName?: string;
  eventLocation?: string;
};

export const todayStatus: DayStatus = {
  isOpen: true,
  hours: "11:00 - 17:00",
  isEvent: false,
};
