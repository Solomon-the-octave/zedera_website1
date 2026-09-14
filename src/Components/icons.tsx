/**
 * Zedera visual system: bespoke line artwork drawn in the same technical
 * register as the hero diagram. Stroke-only, currentColor, square joins,
 * so every mark sits on light or dark surfaces without modification.
 *
 * Kept as code rather than image files so the marks stay crisp at any
 * size, recolour with the theme, and add nothing to page weight.
 */

import type { ReactElement } from "react";

type IconProps = { size?: number };

const base = (size: number) => ({
  width: size,
  height: size,
  viewBox: "0 0 48 48",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.4,
  strokeLinecap: "square" as const,
  strokeLinejoin: "miter" as const,
  "aria-hidden": true,
  focusable: "false" as const,
});

/* ---------- CAPABILITY ICONS ---------- */

/** Software engineering: stacked window frames */
export const IconBuild = ({ size = 44 }: IconProps) => (
  <svg {...base(size)}>
    <rect x="4" y="10" width="32" height="24" />
    <path d="M4 17h32" />
    <circle cx="8.5" cy="13.5" r="1" fill="currentColor" stroke="none" />
    <circle cx="12" cy="13.5" r="1" fill="currentColor" stroke="none" />
    <path d="M12 24l-3 3 3 3M22 24l3 3-3 3M18 23l-2 8" />
    <rect x="16" y="22" width="28" height="20" />
  </svg>
);

/** AI and automation: node graph with a live centre */
export const IconAI = ({ size = 44 }: IconProps) => (
  <svg {...base(size)}>
    <circle cx="24" cy="24" r="7" />
    <circle cx="24" cy="24" r="2.4" fill="currentColor" stroke="none" />
    <path d="M24 17V7M24 31v10M17 24H7M31 24h10M19 19l-7-7M29 29l7 7M29 19l7-7M19 29l-7 7" />
    <rect x="4" y="4" width="6" height="6" />
    <rect x="38" y="4" width="6" height="6" />
    <rect x="4" y="38" width="6" height="6" />
    <rect x="38" y="38" width="6" height="6" />
  </svg>
);

/** Platforms and integration: two systems bridged */
export const IconConnect = ({ size = 44 }: IconProps) => (
  <svg {...base(size)}>
    <rect x="4" y="8" width="16" height="14" />
    <rect x="28" y="26" width="16" height="14" />
    <path d="M12 22v8h24v-4" />
    <path d="M36 26v-8H20" />
    <path d="M8 12h8M8 16h5" />
    <path d="M32 30h8M32 34h5" />
  </svg>
);

/** Product and experience design: frame, grid, cursor */
export const IconDesign = ({ size = 44 }: IconProps) => (
  <svg {...base(size)}>
    <rect x="5" y="5" width="38" height="30" />
    <path d="M5 14h38M17 14v21" />
    <path d="M22 20h14M22 25h10" />
    <path d="M26 33l10 11 1.5-5 5-1.5z" />
  </svg>
);

/** Digital growth: measured ascent */
export const IconGrow = ({ size = 44 }: IconProps) => (
  <svg {...base(size)}>
    <path d="M6 42V6M6 42h36" />
    <path d="M12 34l9-9 7 6 13-15" />
    <path d="M35 16h6v6" />
    <rect x="10" y="36" width="5" height="4" />
    <rect x="19" y="30" width="5" height="10" />
    <rect x="28" y="33" width="5" height="7" />
  </svg>
);

/** Dedicated teams: a squad, one lead */
export const IconTeams = ({ size = 44 }: IconProps) => (
  <svg {...base(size)}>
    <circle cx="24" cy="12" r="5" />
    <path d="M14 26c0-5 4.5-8 10-8s10 3 10 8" />
    <circle cx="9" cy="26" r="4" />
    <path d="M2 38c0-4 3.2-6.5 7-6.5" />
    <circle cx="39" cy="26" r="4" />
    <path d="M46 38c0-4-3.2-6.5-7-6.5" />
    <path d="M14 44v-6h20v6" />
  </svg>
);

export const CAPABILITY_ICONS: Record<string, (p: IconProps) => ReactElement> = {
  engineering: IconBuild,
  ai: IconAI,
  platforms: IconConnect,
  design: IconDesign,
  growth: IconGrow,
  teams: IconTeams,
};

/* ---------- PROCESS STAGE GLYPHS ---------- */

const stageBase = (size: number) => ({
  width: size,
  height: size,
  viewBox: "0 0 64 64",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.3,
  strokeLinecap: "square" as const,
  "aria-hidden": true,
  focusable: "false" as const,
});

/** 01 Discovery: survey the terrain */
const StageDiscover = ({ size = 64 }: IconProps) => (
  <svg {...stageBase(size)}>
    <rect x="4" y="4" width="56" height="56" opacity="0.3" />
    <circle cx="28" cy="28" r="13" />
    <path d="M37 37l14 14" />
    <path d="M22 28h12M28 22v12" opacity="0.55" />
  </svg>
);

/** 02 Architecture: the plan */
const StageArchitect = ({ size = 64 }: IconProps) => (
  <svg {...stageBase(size)}>
    <rect x="4" y="4" width="56" height="56" opacity="0.3" />
    <rect x="12" y="12" width="18" height="14" />
    <rect x="34" y="12" width="18" height="14" />
    <rect x="23" y="38" width="18" height="14" />
    <path d="M21 26v6h22v-6M32 32v6" />
  </svg>
);

/** 03 Build: increments stacking */
const StageBuild = ({ size = 64 }: IconProps) => (
  <svg {...stageBase(size)}>
    <rect x="4" y="4" width="56" height="56" opacity="0.3" />
    <rect x="12" y="40" width="40" height="10" />
    <rect x="12" y="28" width="28" height="10" />
    <rect x="12" y="16" width="16" height="10" />
    <path d="M44 22l5 5-5 5" opacity="0.55" />
  </svg>
);

/** 04 Launch: release and hand over */
const StageLaunch = ({ size = 64 }: IconProps) => (
  <svg {...stageBase(size)}>
    <rect x="4" y="4" width="56" height="56" opacity="0.3" />
    <path d="M32 12l10 18H22z" />
    <path d="M26 34h12v12H26z" />
    <path d="M22 50l4-6M42 50l-4-6" opacity="0.55" />
  </svg>
);

/** 05 Operate: monitored and steady */
const StageOperate = ({ size = 64 }: IconProps) => (
  <svg {...stageBase(size)}>
    <rect x="4" y="4" width="56" height="56" opacity="0.3" />
    <path d="M12 34h8l4-10 6 20 5-14 4 6h13" />
    <circle cx="32" cy="32" r="20" opacity="0.35" />
  </svg>
);

export const STAGE_GLYPHS = [
  StageDiscover,
  StageArchitect,
  StageBuild,
  StageLaunch,
  StageOperate,
];

/* ---------- CASE SYSTEM GLYPHS ----------
   A different small system map per engagement, so the Work page carries
   real artwork instead of repeating one decorative mark. */

const caseBase = (size: number) => ({
  width: size,
  height: Math.round(size * 0.78),
  viewBox: "0 0 120 94",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.2,
  strokeLinecap: "square" as const,
  "aria-hidden": true,
  focusable: "false" as const,
});

/** Listing integrity: intake, score, review queue */
const GlyphScreening = ({ size = 120 }: IconProps) => (
  <svg {...caseBase(size)}>
    <rect x="2" y="14" width="26" height="18" />
    <rect x="2" y="44" width="26" height="18" />
    <rect x="47" y="29" width="28" height="20" />
    <rect x="92" y="8" width="26" height="18" />
    <rect x="92" y="52" width="26" height="18" />
    <path d="M28 23h10v16h9M28 53h10V39" />
    <path d="M75 39h8v-22h9M75 39h8v22h9" />
    <path d="M55 36h12M55 41h8" opacity="0.6" />
  </svg>
);

/** Learning platform: authoring, delivery, assessment */
const GlyphLearning = ({ size = 120 }: IconProps) => (
  <svg {...caseBase(size)}>
    <rect x="2" y="10" width="34" height="24" />
    <path d="M8 18h20M8 24h14" opacity="0.6" />
    <rect x="43" y="34" width="34" height="26" />
    <path d="M36 22h7v12" />
    <path d="M60 60v12H24v-8" />
    <rect x="86" y="26" width="30" height="20" />
    <path d="M77 47h9V36" />
    <rect x="8" y="64" width="16" height="16" />
    <path d="M92 46v18H72" opacity="0.6" />
  </svg>
);

/** Traceability: batches flowing through stages */
const GlyphTraceability = ({ size = 120 }: IconProps) => (
  <svg {...caseBase(size)}>
    <rect x="2" y="36" width="22" height="22" />
    <rect x="34" y="36" width="22" height="22" />
    <rect x="66" y="36" width="22" height="22" />
    <rect x="98" y="36" width="20" height="22" />
    <path d="M24 47h10M56 47h10M88 47h10" />
    <path d="M13 36V16h62v20" opacity="0.55" />
    <path d="M45 58v20h63V58" opacity="0.55" />
    <circle cx="75" cy="16" r="3" fill="currentColor" stroke="none" />
    <circle cx="108" cy="78" r="3" fill="currentColor" stroke="none" />
  </svg>
);

/** Document automation: extract, validate, draft */
const GlyphDocuments = ({ size = 120 }: IconProps) => (
  <svg {...caseBase(size)}>
    <path d="M4 6h22l8 8v34H4z" />
    <path d="M26 6v8h8" />
    <path d="M10 24h14M10 31h10M10 38h14" opacity="0.6" />
    <rect x="48" y="20" width="26" height="26" />
    <path d="M55 33l5 5 8-11" />
    <path d="M34 33h14M74 33h12v34H50v-9" />
    <rect x="92" y="18" width="26" height="30" />
    <path d="M98 27h14M98 34h10M98 41h14" opacity="0.6" />
    <path d="M86 33h6" />
  </svg>
);

export const CASE_GLYPHS = [
  GlyphScreening,
  GlyphLearning,
  GlyphTraceability,
  GlyphDocuments,
];

/* ---------- ABOUT PANEL ----------
   A larger composition for the firm story: layered plan view of a system
   under construction. */
export const AboutPanel = () => (
  <svg
    className="about-panel"
    viewBox="0 0 520 420"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.2"
    strokeLinecap="square"
    aria-hidden="true"
    focusable="false"
  >
    {/* setting-out grid, held well back */}
    <g opacity="0.16">
      {Array.from({ length: 9 }).map((_, i) => (
        <path key={`h${i}`} d={`M0 ${i * 52} H520`} />
      ))}
      {Array.from({ length: 11 }).map((_, i) => (
        <path key={`v${i}`} d={`M${i * 52} 0 V420`} />
      ))}
    </g>

    {/* application window */}
    <rect x="52" y="52" width="208" height="130" strokeWidth="2" />
    <path d="M52 92h208" strokeWidth="2" />
    <circle cx="70" cy="72" r="4" fill="currentColor" stroke="none" />
    <circle cx="86" cy="72" r="4" fill="currentColor" stroke="none" />
    <rect x="78" y="110" width="60" height="52" fill="currentColor" stroke="none" opacity="0.16" />
    <path d="M152 116h82M152 134h82M152 152h56" strokeWidth="1.6" />

    {/* service row */}
    <rect x="286" y="52" width="182" height="76" strokeWidth="2" />
    <rect x="304" y="70" width="42" height="40" fill="currentColor" stroke="none" opacity="0.22" />
    <path d="M362 80h92M362 98h64" strokeWidth="1.6" />

    {/* the engine */}
    <rect x="286" y="156" width="182" height="130" strokeWidth="2" />
    <circle cx="377" cy="221" r="44" strokeWidth="1.8" />
    <circle cx="377" cy="221" r="26" strokeWidth="1.4" opacity="0.7" />
    <circle cx="377" cy="221" r="11" fill="currentColor" stroke="none" />
    <path
      d="M377 177v-14M377 265v14M333 221h-14M421 221h14M346 190l-10-10M408 252l10 10M408 190l10-10M346 252l-10 10"
      strokeWidth="1.6"
    />

    {/* measurement */}
    <rect x="52" y="208" width="208" height="78" strokeWidth="2" />
    <path d="M70 270l32-30 28 20 42-42 36 26" strokeWidth="2" />
    <circle cx="102" cy="240" r="4" fill="currentColor" stroke="none" />
    <circle cx="172" cy="198" r="4" fill="currentColor" stroke="none" />

    {/* data bar */}
    <rect x="52" y="312" width="416" height="56" strokeWidth="2" />
    <path
      d="M104 312v56M156 312v56M208 312v56M260 312v56M312 312v56M364 312v56M416 312v56"
      opacity="0.45"
    />
    <rect x="52" y="312" width="52" height="56" fill="currentColor" stroke="none" opacity="0.2" />
    <rect x="260" y="312" width="52" height="56" fill="currentColor" stroke="none" opacity="0.12" />

    {/* drawing ticks */}
    <g strokeWidth="2">
      <path d="M26 26h26M26 26v26" />
      <path d="M494 26h-26M494 26v26" />
      <path d="M26 394h26M26 394v-26" />
      <path d="M494 394h-26M494 394v-26" />
    </g>
  </svg>
);
