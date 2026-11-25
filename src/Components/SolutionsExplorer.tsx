import { useRef, useState } from "react";
import type { KeyboardEvent } from "react";
import { Link } from "react-router-dom";
import { useT } from "../i18n/context";
import { ArrowRight, Check } from "./ui";

/** Tabbed explorer: pick a business type, see what we would build for it. */
export default function SolutionsExplorer() {
  const t = useT();
  const SOLUTIONS = t.solutions;
  const [active, setActive] = useState(0);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);
  const s = SOLUTIONS[active];

  function onKey(e: KeyboardEvent<HTMLDivElement>) {
    const dir = e.key === "ArrowDown" || e.key === "ArrowRight" ? 1 : e.key === "ArrowUp" || e.key === "ArrowLeft" ? -1 : 0;
    if (!dir) return;
    e.preventDefault();
    const next = (active + dir + SOLUTIONS.length) % SOLUTIONS.length;
    setActive(next);
    tabs.current[next]?.focus();
  }

  return (
    <div className="sx">
      <div className="sx-tabs" role="tablist" aria-label={t.solutionsTabsLabel} onKeyDown={onKey}>
        {SOLUTIONS.map((item, i) => (
          <button
            key={item.id}
            ref={(el) => {
              tabs.current[i] = el;
            }}
            role="tab"
            id={`sx-tab-${item.id}`}
            aria-selected={i === active}
            aria-controls="sx-panel"
            tabIndex={i === active ? 0 : -1}
            className={`sx-tab${i === active ? " active" : ""}`}
            onClick={() => setActive(i)}
            onMouseEnter={() => setActive(i)}
          >
            <span className="sx-tab-num">{String(i + 1).padStart(2, "0")}</span>
            {item.name}
            <ArrowRight size={14} />
          </button>
        ))}
      </div>

      <div
        className="sx-panel on-dark"
        role="tabpanel"
        id="sx-panel"
        aria-labelledby={`sx-tab-${s.id}`}
        key={s.id}
      >
        <span className="sx-kicker">{s.name}</span>
        <h3 className="h3">{s.headline}</h3>
        <p className="body">{s.body}</p>
        <div className="sx-builds">
          {s.builds.map((b, i) => (
            <div className="sx-build" key={b} style={{ animationDelay: `${i * 60}ms` }}>
              <span className="sx-build-icon">
                <Check />
              </span>
              {b}
            </div>
          ))}
        </div>
        <Link to="/contact" className="link-arrow">
          {t.discussSector(s.name)} <ArrowRight size={14} />
        </Link>
      </div>
    </div>
  );
}
