import { useEffect, useMemo, useRef, useState } from "react";
import type { ReactNode } from "react";

/* ---------- Icons ---------- */
export const ArrowRight = () => (
  <svg width="15" height="15" viewBox="0 0 15 15" fill="none" aria-hidden="true">
    <path
      d="M3 7.5h9M8 4l3.5 3.5L8 11"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const Check = () => (
  <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden="true">
    <path
      d="M2 6.8L5 9.8L11 3.2"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

/* ---------- Section label ---------- */
export function Label({
  children,
  light = false,
  center = false,
}: {
  children: ReactNode;
  light?: boolean;
  center?: boolean;
}) {
  return (
    <div className={`label${light ? " light" : ""}${center ? " center" : ""}`}>{children}</div>
  );
}

/* ---------- Scroll reveal ---------- */
export function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      setShown(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setShown(true);
          io.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`reveal${shown ? " in" : ""}${className ? " " + className : ""}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

/* ---------- Animated stat ----------
   Counts the leading number up once, when the cell first scrolls into
   view, keeping any prefix or suffix ("40+", "3") exactly as written.

   The parsed parts are memoised: deriving them inline made the effect's
   dependency change on every render, which tore down and restarted the
   animation on each frame and made the number visibly stutter. */
export function Stat({ value, label }: { value: string; label: string }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const done = useRef(false);
  const [shown, setShown] = useState(false);
  const [display, setDisplay] = useState(value);

  const { prefix, suffix, target } = useMemo(() => {
    const m = value.match(/^(\D*)(\d+)(.*)$/);
    return m
      ? { prefix: m[1], suffix: m[3], target: Number(m[2]) }
      : { prefix: "", suffix: "", target: null as number | null };
  }, [value]);

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") {
      setShown(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setShown(true);
          io.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!shown || target === null) return;
    // only ever run the count once per mount
    if (done.current) return;
    done.current = true;

    const reduce =
      typeof window !== "undefined" &&
      typeof window.matchMedia === "function" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduce) {
      setDisplay(value);
      return;
    }

    const duration = 900;
    const start = performance.now();
    let frame = requestAnimationFrame(function step(now: number) {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      setDisplay(`${prefix}${Math.round(target * eased)}${suffix}`);
      if (t < 1) {
        frame = requestAnimationFrame(step);
      } else {
        setDisplay(value);
      }
    });

    return () => cancelAnimationFrame(frame);
  }, [shown, target, prefix, suffix, value]);

  return (
    <div ref={ref}>
      <div className="stat-value">{display}</div>
      <div className="stat-label">{label}</div>
    </div>
  );
}

/* ---------- Stack ticker ----------
   A slow marquee of the technologies, doubled so the loop is seamless. */
export function Ticker({ items }: { items: string[] }) {
  const run = [...items, ...items];
  return (
    <div className="ticker" aria-hidden="true">
      <div className="ticker-track">
        {run.map((item, i) => (
          <span className="ticker-item" key={`${item}-${i}`}>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

/* ---------- Scroll progress ---------- */
export function ScrollProgress() {
  const [pct, setPct] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement.scrollHeight - window.innerHeight;
      setPct(h > 0 ? Math.min(100, (window.scrollY / h) * 100) : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return <div className="scroll-progress" style={{ width: `${pct}%` }} />;
}

/* ---------- Placeholder marker ----------
   Renders a small, honest note wherever unverified figures appear. */
export function TbdNote({ children }: { children: ReactNode }) {
  return (
    <p
      className="mono"
      style={{
        fontSize: 10.5,
        letterSpacing: "0.1em",
        textTransform: "uppercase",
        color: "var(--faint-dark)",
        marginTop: 18,
      }}
    >
      {children}
    </p>
  );
}
