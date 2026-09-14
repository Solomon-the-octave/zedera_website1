import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { Label } from "./ui";

type Backdrop = "plan" | "plan-hatch" | "plan-hatch-r" | "plan-rings" | "plan-dots";
type Layout = "rule" | "index" | "centre" | "editorial" | "compact";

/**
 * Inner-page header. Each page picks its own `backdrop` texture AND its own
 * `layout`, so the headers differ in structure, not just in wallpaper.
 *
 *  rule       accent bar beside the title, lede in a second column   (about)
 *  index      oversized ghost numeral behind the title               (services)
 *  centre     everything centred                                     (process)
 *  editorial  oversized title, lede dropped to the right below it    (work)
 *  compact    title and lede side by side, tighter                   (contact)
 */
export default function PageHeader({
  label,
  title,
  lede,
  crumb,
  backdrop = "plan",
  layout = "rule",
  ghost,
  aside,
}: {
  label: string;
  title: string;
  lede: string;
  crumb: string;
  backdrop?: Backdrop;
  layout?: Layout;
  /** numeral drawn behind the title when layout is "index" */
  ghost?: string;
  aside?: ReactNode;
}) {
  const Crumb = (
    <div className="crumb mono">
      <Link to="/">Zedera</Link>
      <span className="sep">/</span>
      <span>{crumb}</span>
    </div>
  );

  const Heading = (
    <h1 className="serif h1" style={{ marginTop: 22 }}>
      {title}
    </h1>
  );

  const Lede = <p className="lede">{lede}</p>;

  let body: ReactNode;

  if (layout === "index") {
    body = (
      <div className="ph-index">
        {ghost ? (
          <span className="ph-ghost" aria-hidden="true">
            {ghost}
          </span>
        ) : null}
        {Crumb}
        <Label>{label}</Label>
        {Heading}
        {Lede}
      </div>
    );
  } else if (layout === "centre") {
    body = (
      <div className="ph-centre">
        {Crumb}
        <Label>{label}</Label>
        {Heading}
        {Lede}
      </div>
    );
  } else if (layout === "editorial") {
    body = (
      <div className="ph-editorial">
        {Crumb}
        <Label>{label}</Label>
        {Heading}
        <div className="ph-foot">{Lede}</div>
      </div>
    );
  } else if (layout === "compact") {
    body = (
      <div>
        {Crumb}
        <Label>{label}</Label>
        <div className="ph-compact" style={{ marginTop: 18 }}>
          <h1 className="serif h1">{title}</h1>
          {Lede}
        </div>
      </div>
    );
  } else {
    body = (
      <div className="ph-rule">
        <div>
          {Crumb}
          <div className="ph-title">
            <Label>{label}</Label>
            {Heading}
          </div>
        </div>
        {Lede}
      </div>
    );
  }

  return (
    <section className={backdrop}>
      <div className="wrap page-header">
        {body}
        {aside ? <div className="header-aside">{aside}</div> : null}
      </div>
    </section>
  );
}
