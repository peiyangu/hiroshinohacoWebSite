export default function imageLoader({
  src,
}: {
  src: string;
  width: number;
  quality?: number;
}): string {
  if (/^https?:\/\//.test(src)) {
    return src;
  }
  return `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${src}`;
}
