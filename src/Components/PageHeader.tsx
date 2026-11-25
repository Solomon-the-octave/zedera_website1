import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { Eyebrow } from "./ui";
import { useT } from "../i18n/context";

/**
 * Inner-page header: breadcrumb, eyebrow, title with accent line, lede,
 * and a page-specific illustration on the right (see HeaderArt.tsx).
 */
export default function PageHeader({
  crumb,
  eyebrow,
  title,
  accent,
  lede,
  art,
  children,
}: {
  crumb: string;
  eyebrow: string;
  title: string;
  accent?: string;
  lede: string;
  art?: ReactNode;
  children?: ReactNode;
}) {
  const t = useT();
  return (
    <section className={`page-header${art ? " has-art" : ""}`}>
      <div className="hero-bg" aria-hidden="true">
        <div className="hero-grid" />
      </div>
      <div className="wrap page-header-grid">
        <div className="page-header-inner">
          <div className="crumb">
            <Link to="/">{t.common.home}</Link>
            <span aria-hidden="true">/</span>
            <span>{crumb}</span>
          </div>
          <Eyebrow>{eyebrow}</Eyebrow>
          <h1 className="h1">
            {title}
            {accent ? (
              <>
                <br />
                <span className="accent">{accent}</span>
              </>
            ) : null}
          </h1>
          <p className="lede lede-lg">{lede}</p>
          {children}
        </div>
        {art ? <div className="page-header-art">{art}</div> : null}
      </div>
    </section>
  );
}
