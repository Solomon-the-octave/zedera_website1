/**
 * Zedera mark, drawn on the refined golden-ratio grid (0.618 / 0.382).
 * Brand colours: teal #66CBB8, blue #306EF5.
 *
 *  variant "color"   full colour, for light backgrounds
 *  variant "onDark"  blue parts turn white, for brand-blue or navy backgrounds
 *  variant "auto"    full colour in light mode, onDark in dark mode
 *  variant "mono"    single colour (currentColor), teal parts at 50%
 */
type Variant = "color" | "onDark" | "auto" | "mono";

export function Mark({
  size = 28,
  variant = "onDark",
  className,
}: {
  size?: number;
  variant?: Variant;
  className?: string;
}) {
  const teal = variant === "mono" ? "currentColor" : "#66CBB8";
  const blue =
    variant === "color"
      ? "#306EF5"
      : variant === "onDark"
        ? "#FFFFFF"
        : variant === "auto"
          ? "var(--mark-blue)"
          : "currentColor";
  const tealOpacity = variant === "mono" ? 0.5 : 1;
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <polygon fill={teal} fillOpacity={tealOpacity} points="0,0 61.8,0 0,61.8" />
      <polygon style={{ fill: blue }} points="61.8,0 100,0 38.2,61.8 0,61.8" />
      <polygon fill={teal} fillOpacity={tealOpacity} points="0,61.8 38.2,61.8 0,100" />
      <polygon style={{ fill: blue }} points="38.2,61.8 100,61.8 100,100 38.2,100" />
    </svg>
  );
}

export function Logo({ variant = "onDark" }: { variant?: Variant }) {
  return (
    <span className="logo">
      <Mark size={26} variant={variant} />
      <span className="logo-word">Zedera</span>
    </span>
  );
}
