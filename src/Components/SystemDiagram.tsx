/**
 * Signature hero graphic: a simplified service architecture, drawn in the
 * language of a technical drawing. Connectors animate as flowing dashes.
 * Purely decorative, so it is hidden from assistive tech, and all motion
 * is disabled under prefers-reduced-motion (see index.css).
 */

const NODE = { w: 132, h: 44, r: 0 };

function Node({
  x,
  y,
  w = NODE.w,
  label,
  strong = false,
}: {
  x: number;
  y: number;
  w?: number;
  label: string;
  strong?: boolean;
}) {
  return (
    <g className={strong ? "dg-node dg-node-strong" : "dg-node"}>
      <rect x={x} y={y} width={w} height={NODE.h} rx={NODE.r} />
      <text x={x + w / 2} y={y + NODE.h / 2 + 4} textAnchor="middle">
        {label}
      </text>
    </g>
  );
}

/** Orthogonal connector: down, across, down. */
function Link({
  x1,
  y1,
  x2,
  y2,
  delay = 0,
}: {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  delay?: number;
}) {
  const mid = y1 + (y2 - y1) / 2;
  const d = `M${x1} ${y1} L${x1} ${mid} L${x2} ${mid} L${x2} ${y2}`;
  return (
    <g>
      <path className="dg-wire" d={d} />
      <path className="dg-flow" d={d} style={{ animationDelay: `${delay}s` }} />
    </g>
  );
}

export default function SystemDiagram() {
  return (
    <svg
      className="sysdiagram"
      viewBox="0 0 560 470"
      role="img"
      aria-hidden="true"
      focusable="false"
    >
      {/* technical drawing frame */}
      <g className="dg-frame">
        <rect x="8" y="8" width="544" height="454" />
        <path d="M8 40 L8 8 L40 8" />
        <path d="M520 8 L552 8 L552 40" />
        <path d="M552 430 L552 462 L520 462" />
        <path d="M40 462 L8 462 L8 430" />
      </g>

      <text className="dg-caption" x="26" y="34">
        FIG. 01 / REFERENCE ARCHITECTURE
      </text>

      {/* tier labels */}
      <text className="dg-tier" x="26" y="94">
        CLIENTS
      </text>
      <text className="dg-tier" x="26" y="214">
        GATEWAY
      </text>
      <text className="dg-tier" x="26" y="318">
        SERVICES
      </text>
      <text className="dg-tier" x="26" y="432">
        DATA
      </text>

      {/* clients */}
      <Node x={118} y={104} w={118} label="WEB" />
      <Node x={252} y={104} w={118} label="MOBILE" />
      <Node x={386} y={104} w={118} label="PARTNER API" />

      {/* clients to gateway */}
      <Link x1={177} y1={148} x2={311} y2={224} delay={0} />
      <Link x1={311} y1={148} x2={311} y2={224} delay={0.6} />
      <Link x1={445} y1={148} x2={311} y2={224} delay={1.2} />

      {/* gateway */}
      <Node x={215} y={224} w={192} label="API GATEWAY" strong />

      {/* gateway to services */}
      <Link x1={311} y1={268} x2={177} y2={328} delay={0.3} />
      <Link x1={311} y1={268} x2={311} y2={328} delay={0.9} />
      <Link x1={311} y1={268} x2={445} y2={328} delay={1.5} />

      {/* services */}
      <Node x={118} y={328} w={118} label="CORE" />
      <Node x={252} y={328} w={118} label="AI LAYER" />
      <Node x={386} y={328} w={118} label="JOBS" />

      {/* services to data */}
      <Link x1={177} y1={372} x2={311} y2={418} delay={0.45} />
      <Link x1={311} y1={372} x2={311} y2={418} delay={1.05} />
      <Link x1={445} y1={372} x2={311} y2={418} delay={1.65} />

      {/* data */}
      <Node x={215} y={418} w={192} label="POSTGRESQL" strong />
    </svg>
  );
}
