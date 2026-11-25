import type { ReactElement } from "react";
import type { ServiceId } from "../data/site";
import { useT } from "../i18n/context";

/* ---------- Line icons ---------- */
const P = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.7,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

const ICONS: Record<ServiceId, ReactElement> = {
  web: (
    <>
      <rect x="3" y="4" width="18" height="15" rx="2.5" {...P} />
      <path d="M3 8.5h18M6.5 6.3h.01M9 6.3h.01" {...P} />
      <path d="M9.5 12.5 7.5 14.5l2 2M14.5 12.5l2 2-2 2" {...P} />
    </>
  ),
  apps: (
    <>
      <rect x="6.5" y="2.5" width="11" height="19" rx="2.5" {...P} />
      <path d="M10.5 18.5h3" {...P} />
      <path d="M9.5 7h5M9.5 10h5M9.5 13h3" {...P} />
    </>
  ),
  systems: (
    <>
      <rect x="3" y="3.5" width="7.5" height="7.5" rx="1.8" {...P} />
      <rect x="13.5" y="3.5" width="7.5" height="7.5" rx="1.8" {...P} />
      <rect x="3" y="13" width="7.5" height="7.5" rx="1.8" {...P} />
      <path d="M17.25 13.5v6.5M14 16.75h6.5" {...P} />
    </>
  ),
  ai: (
    <>
      <path d="M12 3.5 13.6 8a2 2 0 0 0 1.2 1.2L19.5 11l-4.7 1.7a2 2 0 0 0-1.2 1.2L12 18.5l-1.6-4.6a2 2 0 0 0-1.2-1.2L4.5 11l4.7-1.8A2 2 0 0 0 10.4 8Z" {...P} />
      <path d="M19 3v3M17.5 4.5h3M5 17v3M3.5 18.5h3" {...P} />
    </>
  ),
  design: (
    <>
      <path d="M12 3 21 12l-9 9-9-9Z" {...P} />
      <path d="M12 3v18M3 12h9" {...P} />
    </>
  ),
  growth: (
    <>
      <path d="M3.5 20.5h17" {...P} />
      <path d="M6 16v-3M10.5 16V10M15 16v-5M19.5 16V6" {...P} />
      <path d="m5 9 4.5-4 4 3 6-5" {...P} />
    </>
  ),
};

export function ServiceIcon({ id, size = 22 }: { id: ServiceId; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
      {ICONS[id]}
    </svg>
  );
}

/* ---------- Mini previews ----------
   Small UI sketches that show the kind of thing each service produces.
   Purely illustrative. */
export function ServicePreview({ id }: { id: ServiceId }) {
  const p = useT().preview;
  const sample = useT().common.sample;
  switch (id) {
    case "web":
      return (
        <div className="sp on-dark sp-web" aria-hidden="true">
          <div className="sp-browser">
            <div className="sp-browser-bar">
              <span />
              <span />
              <span />
              <em>{p.domain}</em>
            </div>
            <div className="sp-web-body">
              <div className="sp-web-hero">
                <i className="w70" />
                <i className="w45" />
                <b>{p.bookNow}</b>
              </div>
              <div className="sp-web-cards">
                <span />
                <span />
                <span />
              </div>
            </div>
          </div>
        </div>
      );
    case "apps":
      return (
        <div className="sp on-dark sp-apps" aria-hidden="true">
          <div className="sp-phone">
            <div className="sp-phone-notch" />
            <div className="sp-row">
              <span>{p.bookings}</span>
              <b>12</b>
            </div>
            <div className="sp-row">
              <span>{p.orders}</span>
              <b>8</b>
            </div>
            <div className="sp-row">
              <span>{p.rewards}</span>
              <i className="sp-toggle on" />
            </div>
          </div>
          <div className="sp-notify">
            <span className="sp-notify-dot" />
            {p.newOrder}
          </div>
        </div>
      );
    case "systems":
      return (
        <div className="sp on-dark sp-systems" aria-hidden="true">
          <div className="sp-table">
            <div className="sp-th">
              <span>{p.request}</span>
              <span>{p.status}</span>
            </div>
            <div className="sp-tr">
              <span>{p.rows[0]}</span>
              <em className="ok">{p.approved}</em>
            </div>
            <div className="sp-tr">
              <span>{p.rows[1]}</span>
              <em className="wait">{p.pending}</em>
            </div>
            <div className="sp-tr">
              <span>{p.rows[2]}</span>
              <em className="ok">{p.approved}</em>
            </div>
          </div>
        </div>
      );
    case "ai":
      return (
        <div className="sp on-dark sp-ai" aria-hidden="true">
          <div className="sp-bubble user">{p.userMsg}</div>
          <div className="sp-bubble bot">{p.botMsg}</div>
          <div className="sp-typing">
            <span />
            <span />
            <span />
          </div>
        </div>
      );
    case "design":
      return (
        <div className="sp on-dark sp-design" aria-hidden="true">
          <div className="sp-swatches">
            <span style={{ background: "#306EF5" }} />
            <span style={{ background: "#66CBB8" }} />
            <span style={{ background: "#0B1430" }} />
            <span style={{ background: "#E8EEFF" }} />
          </div>
          <div className="sp-type">
            <strong>Aa</strong>
            <div>
              <i className="w70" />
              <i className="w45" />
            </div>
          </div>
          <div className="sp-buttons">
            <b>{p.primary}</b>
            <em>{p.secondary}</em>
          </div>
        </div>
      );
    case "growth":
      return (
        <div className="sp on-dark sp-growth" aria-hidden="true">
          <div className="sp-growth-head">
            <span>{p.reach}</span>
            <b>{sample}</b>
          </div>
          <div className="sp-bars">
            {[28, 40, 34, 52, 46, 64, 72, 86].map((h, i) => (
              <span key={i} style={{ height: `${h}%`, animationDelay: `${i * 70}ms` }} />
            ))}
          </div>
        </div>
      );
  }
}
