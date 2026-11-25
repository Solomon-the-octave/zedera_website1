import { Link } from "react-router-dom";
import { whatsappHref } from "../data/site";
import { useT } from "../i18n/context";
import { ArrowRight, Reveal } from "./ui";

export default function CTABand({
  title,
  accent,
  body,
}: {
  title?: string;
  accent?: string;
  body?: string;
}) {
  const t = useT();
  return (
    <section className="section cta-section">
      <div className="wrap">
        <Reveal>
          <div className="cta-card on-dark">
            <svg className="cta-art" viewBox="0 0 300 300" aria-hidden="true" preserveAspectRatio="xMaxYMid slice">
              <polygon fill="#66CBB8" points="0,0 185,0 0,185" />
              <polygon fill="#0B1430" points="185,0 300,0 115,185 0,185" />
              <polygon fill="#66CBB8" points="0,185 115,185 0,300" />
              <rect x="115" y="185" width="185" height="115" fill="#0B1430" />
            </svg>
            <div className="cta-copy">
              <h2 className="h2">
                {title ?? t.cta.title}
                <br />
                <span className="accent">{accent ?? t.cta.accent}</span>
              </h2>
              <p className="lede">{body ?? t.cta.body}</p>
              <div className="btn-row">
                <Link to="/contact" className="btn btn-primary btn-lg">
                  {t.common.startProject} <ArrowRight />
                </Link>
                <a
                  href={whatsappHref(t.common.whatsappText)}
                  className="btn btn-ghost btn-lg"
                  target="_blank"
                  rel="noreferrer"
                >
                  {t.common.chatWhatsApp}
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
