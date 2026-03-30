"use client";

import { getTodayStatus } from "@/data/schedule";

type Props = {
  openClassName?: string;
  closedClassName?: string;
};

export function HoursDisplay({ openClassName, closedClassName }: Props) {
  const status = getTodayStatus();

  if (!status.isOpen) {
    return <span className={closedClassName}>本日はお休みです</span>;
  }

  if (status.isEvent) {
    const parts = ["イベント出店中"];
    if (status.eventName) parts.push(status.eventName);
    if (status.hours) parts.push(status.hours);
    return <span className={openClassName}>{parts.join(" / ")}</span>;
  }

  return (
    <span className={openClassName}>
      {status.hours ?? "最新情報はInstagramをご確認ください"}
    </span>
  );
}
