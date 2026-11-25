import { Link } from "react-router-dom";
import Seo from "../Components/Seo";
import HeroVisual from "../Components/HeroVisual";
import SolutionsExplorer from "../Components/SolutionsExplorer";
import CTABand from "../Components/CTABand";
import { ServiceIcon, ServicePreview } from "../Components/ServiceArt";
import { ArrowRight, Check, Eyebrow, Marquee, Reveal, SectionHead } from "../Components/ui";
import { STACK } from "../data/site";
import { useT } from "../i18n/context";

export default function Home() {
  const t = useT();
  const h = t.home;
  return (
    <>
      <Seo title={t.seo.home.title} description={t.seo.home.description} />

      {/* ---------- HERO ---------- */}
      <section className="hero">
        <div className="hero-bg" aria-hidden="true">
          <div className="hero-grid" />
        </div>
        <div className="wrap hero-inner">
          <div className="hero-copy">
            <Eyebrow>{t.hero.eyebrow}</Eyebrow>
            <h1 className="display">
              {t.hero.title} <span className="accent">{t.hero.accent}</span>
            </h1>
            <p className="lede lede-lg">{t.hero.lede}</p>
            <div className="btn-row">
              <Link to="/contact" className="btn btn-primary btn-lg">
                {t.common.startProject} <ArrowRight />
              </Link>
              <Link to="/services" className="btn btn-ghost btn-lg">
                {t.common.exploreServices}
              </Link>
            </div>
          </div>
          <HeroVisual />
        </div>
      </section>

      {/* ---------- STACK ---------- */}
      <section className="strip">
        <p className="strip-label">{t.stripLabel}</p>
        <Marquee items={STACK} />
      </section>

      {/* ---------- SERVICES ---------- */}
      <section className="section">
        <div className="wrap">
          <Reveal>
            <SectionHead center {...h.services} />
          </Reveal>
          <div className="svc-grid">
            {t.services.map((s, i) => (
              <Reveal key={s.id} delay={(i % 3) * 70}>
                <Link to={`/services#${s.id}`} className="svc-card">
                  <ServicePreview id={s.id} />
                  <div className="svc-body">
                    <div className="svc-title">
                      <span className="icon-tile">
                        <ServiceIcon id={s.id} />
                      </span>
                      <h3 className="h4">{s.title}</h3>
                    </div>
                    <p className="body-sm">{s.summary}</p>
                    <span className="link-arrow">
                      {t.common.learnMore} <ArrowRight size={14} />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- SOLUTIONS ---------- */}
      <section className="section section-alt">
        <div className="wrap">
          <Reveal>
            <SectionHead {...h.solutions} />
          </Reveal>
          <Reveal>
            <SolutionsExplorer />
          </Reveal>
        </div>
      </section>

      {/* ---------- PROCESS ---------- */}
      <section className="section">
        <div className="wrap">
          <Reveal>
            <SectionHead center {...h.process} />
          </Reveal>
          <div className="steps">
            {t.stages.map((s, i) => (
              <Reveal key={s.num} delay={i * 60}>
                <div className="step">
                  <span className="step-num">{s.num}</span>
                  <h3 className="h4">{s.title}</h3>
                  <p className="body-sm">{s.body}</p>
                  <span className="step-time">{s.duration}</span>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="center mt-48">
            <Link to="/process" className="btn btn-ghost">
              {t.common.seeProcess} <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* ---------- WHY ---------- */}
      <section className="section section-alt">
        <div className="wrap why">
          <Reveal>
            <div className="why-copy">
              <SectionHead {...h.why} />
              <ul className="check-list">
                {t.standards.map((s) => (
                  <li key={s}>
                    <span className="check-icon">
                      <Check size={12} />
                    </span>
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
          <div className="why-cards">
            {t.principles.map((p, i) => (
              <Reveal key={p.title} delay={i * 70}>
                <div className="why-card">
                  <span className="why-num">{String(i + 1).padStart(2, "0")}</span>
                  <h3 className="h4">{p.title}</h3>
                  <p className="body-sm">{p.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTABand />
    </>
  );
}
