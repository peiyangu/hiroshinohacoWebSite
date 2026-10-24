"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

/** リンク先の URL から GA4 のイベント名を決める（計測対象外は null） */
const resolveEventName = (url: URL): string | null => {
  const host = url.hostname;
  if (host === "hirohaco.base.shop") return "shop_click";
  if (host === "maps.app.goo.gl" || (host.endsWith("google.com") && url.pathname.startsWith("/maps"))) {
    return "map_click";
  }
  if (host === "www.instagram.com" || host === "instagram.com") return "instagram_click";
  if (url.protocol === "tel:") return "tel_click";
  return null;
};

/** クリック位置（どのセクション・ページか）を特定する */
const resolveLocation = (anchor: HTMLAnchorElement): string => {
  const section = anchor.closest("[id], footer");
  const id = section?.tagName === "FOOTER" ? "footer" : section?.id;
  return `${window.location.pathname}${id ? `#${id}` : ""}`;
};

/**
 * 外部リンクのクリックを GA4 イベントとして送信する。
 * 各コンポーネントを触らず、document で一括して拾う。
 */
export const ClickTracker = () => {
  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const target = event.target as Element | null;
      const anchor = target?.closest<HTMLAnchorElement>("a[href]");
      if (!anchor || typeof window.gtag !== "function") return;

      let url: URL;
      try {
        url = new URL(anchor.href, window.location.href);
      } catch {
        return;
      }

      const eventName = resolveEventName(url);
      if (!eventName) return;

      window.gtag("event", eventName, {
        link_url: url.href,
        link_text: (anchor.textContent ?? "").trim().slice(0, 80),
        link_location: resolveLocation(anchor),
        transport_type: "beacon",
      });
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return null;
};
