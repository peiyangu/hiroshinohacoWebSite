"use client";

import { useState, useEffect } from "react";
import { getTodayStatus } from "@/data/schedule";
import type { DayStatus } from "@/data/schedule";
import styles from "./StatusBadge.module.scss";

export function StatusBadge() {
  const [status, setStatus] = useState<DayStatus | null>(null);

  useEffect(() => {
    setStatus(getTodayStatus());
  }, []);

  if (!status || !status.isOpen) return null;

  let label = "本日営業中";
  if (status.isEvent) {
    const parts = ["イベント出店中"];
    if (status.eventName) parts.push(status.eventName);
    if (status.hours) parts.push(status.hours);
    label = parts.join(" — ");
  } else if (status.hours) {
    label += `  ${status.hours}`;
  }

  return (
    <div className={styles.badge}>
      <span className={styles.dot} aria-hidden="true" />
      <span>{label}</span>
    </div>
  );
}
