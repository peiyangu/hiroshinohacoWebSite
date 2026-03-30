"use client";

import dynamic from "next/dynamic";

const Loading = dynamic(
  () => import("./Loading").then((mod) => mod.Loading),
  { ssr: false }
);

export function LoadingClient() {
  return <Loading />;
}
