import { useState } from "react";
import type { ReactNode } from "react";
import type { ImageSlot } from "../data/images";

/**
 * An image that cannot break. It walks the slot's candidate sources in
 * order and, when every one of them fails, renders the drawn fallback
 * instead. That keeps the page looking designed whether or not real
 * photography has been supplied yet.
 */
export default function Figure({
  slot,
  fallback,
  ratio = "16 / 9",
  className = "",
  showCaption = true,
}: {
  slot: ImageSlot;
  fallback?: ReactNode;
  ratio?: string;
  className?: string;
  showCaption?: boolean;
}) {
  const [index, setIndex] = useState(0);
  const exhausted = index >= slot.srcs.length;

  return (
    <figure className={`figure ${className}`.trim()}>
      <div className="figure-media" style={{ aspectRatio: ratio }}>
        {exhausted ? (
          <div className="figure-fallback">{fallback}</div>
        ) : (
          <img
            src={slot.srcs[index]}
            alt={slot.alt}
            loading="lazy"
            decoding="async"
            onError={() => setIndex((i) => i + 1)}
          />
        )}
      </div>

      {showCaption && slot.caption ? (
        <figcaption className="figure-caption mono">{slot.caption}</figcaption>
      ) : null}
    </figure>
  );
}
